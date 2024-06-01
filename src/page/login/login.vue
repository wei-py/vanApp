<script setup>
import { companyForm } from "./login";
const _ = makeForm({ companyForm });
const userStore = useUser();
const user = reactive({
  username: lo.get(userStore, "usernameList[0].text"),
  password: lo.get(userStore, "usernameList[0].password"),
  code: "",

  usernameList: [],
  usernameListShow: false,

  passwordFlag: true,
  passwordType: "password",
  passwordIcon: "closed-eye",

  usernameRule: toRaw(convertRules([(val) => val.length || "用户名必填"])),
  passwordRule: toRaw(convertRules([(val) => val.length || "密码必填"])),
  codeRule: toRaw(convertRules([(val) => val.length || "验证码必填"])),
});

// const checked = ref(userStore.checked);
const isPasswordToLogin = ref(true);

async function onLogin(params) {
  const t = {
    phone: user.username,
    password: user.password,
    code: "",
    type: "password",
    systemType: "android",
    systemVersion: "6.0",
    appVersion: "2.4.16",
  };
  const body = lo.merge(t, params);
  setItem("userId", "loginInfo", body);
  const { data } = await http.post("/login", body);

  // 已阅读
  if (!userStore.checked.includes("readed")) {
    showFailToast("请阅读并同意博光 NEW 隐私政策和使用协议");
    return;
  }

  // 缓存用户信息
  userStore.info = data;

  // 缓存密码项
  params.text = params.phone;
  if (userStore.checked.includes("remember")) {
    userStore.usernameList.unshift(lo.omit(params, "phone"));
    userStore.usernameList = lo.uniqBy(userStore.usernameList, "text");
  } else {
    const popIndex = userStore.usernameList.findIndex((n) => n.text == params.phone);
    userStore.usernameList.splice(popIndex, 1);
  }

  // 状态字典
  const resp = await http.get("order-state/dic");
  const statusDic = resp.data;
  const flag = useFlag();
  flag.statusDic = { ...statusDic.state, ...statusDic.stage, ...statusDic.task };
  flag.tabbar = 0;

  // 选择组织

  // 跳转
  // console.log(, 3333)

  if (lo.get(data, "userVo.curUserCompanyVo.company.name")) {
    router.push({
      path: "/home",
      query: {
        title: "当前组织： " + data.userVo.curUserCompanyVo.company.name,
        tab: 0,
      },
    });
    showSuccessToast({
      message: "登录成功",
      className: "shadowC",
    });
  } else {
    // console.log(data.userVo)
    backfill(_, data);
    setItem("title", "show", true);
  }
}

async function onGetCode() {
  console.log("获取验证码");
}

function onPasswordIconClick() {
  user.passwordFlag = !user.passwordFlag;
  user.passwordType = user.passwordFlag ? "password" : "text";
  user.passwordIcon = user.passwordFlag ? "closed-eye" : "eye-o";
}

function onUsernameInput(val) {
  user.usernameList = userStore.usernameList.filter((n) => n.text.includes(val));
  user.usernameListShow = new Boolean(user.usernameList.length);
  user.usernameListShow = val.length ? true : false;
}

function onUsernamePopClick(val) {
  user.username = val.text;
  user.password = val.password;
}

eventManage({ getData: onLogin });
</script>

<template>
  <div class="h-full w-full flex-1 bg-[#febc04] !overflow-hidden">
    <div class="float-left mb-[-100vh] ml-[7vw] font-bold text-white text-[35px]">
      <div class="mt-[10vh]">您 好 ,</div>
      <div>欢 迎 使 用 博 光</div>
    </div>
    <div class="h-[30vh] w-full bgImg flex items-end justify-end">
      <img class="h-[30vw] w-[30vw] mb-[-3vw] mr-[-5vw] z-0 object-contain" src="./newLogo.png" />
    </div>
    <div class="h-[70vh] bg-white rounded-t-[20px] py-[5vw] flex flex-col">
      <van-form @submit="onLogin">
        <van-cell-group inset>
          <van-cell title="手机号" :border="false" titleClass="text-[25px]"></van-cell>
          <van-field
            size="large"
            v-model="user.username"
            @update:model-value="onUsernameInput"
            name="phone"
            label=""
            placeholder="请输入账号"
            :rules="user.usernameRule"
            class="!text-[16px] !pt-[5px]"
            clearable
            @click-right-icon="user.usernameListShow = !user.usernameListShow"
          >
            <template #extra>
              <van-popover
                v-if="isPasswordToLogin"
                v-model:show="user.usernameListShow"
                :actions="user.usernameList"
                @select="onUsernamePopClick"
                placement="bottom-end"
              />
            </template>
          </van-field>
          <van-cell title="密码" :border="false" titleClass="text-[25px]"></van-cell>

          <van-field
            v-if="isPasswordToLogin"
            size="large"
            class="!text-[16px] !pt-[5px]"
            v-model="user.password"
            @click-right-icon="onPasswordIconClick"
            :type="isPasswordToLogin ? user.passwordType : ''"
            :name="isPasswordToLogin ? 'password' : 'code'"
            :right-icon="user.passwordIcon"
            placeholder="请输入密码"
            clearable
            :rules="user.passwordRule"
          />
          <van-field
            v-else
            size="large"
            class="!text-[16px] !pt-[5px]"
            v-model="user.code"
            name="code"
            clearable
            :rules="user.codeRule"
            placeholder="请输入验证码"
          >
            <template #button>
              <van-button @click="onGetCode" size="small" type="warning" class="!bg-[#ffab30] !h-[24px] shadow-md">获取验证码</van-button>
            </template>
          </van-field>
        </van-cell-group>
        <van-checkbox-group v-model="userStore.checked" class="flex-1 justify-end flex flex-col px-[7vw]">
          <van-checkbox icon-size="16px" checked-color="#ffab30" name="remember">记住密码</van-checkbox>
        </van-checkbox-group>

        <div class="xCenter mt-[5vh]">
          <vButton class="!w-[90%]" native-type="submit">登录</vButton>
        </div>
        <div class="w-[90%] mx-auto">
          <van-divider>OR</van-divider>
        </div>
        <div class="xCenter">
          <vButton class="!w-[90%]" @click="isPasswordToLogin = !isPasswordToLogin">
            {{ isPasswordToLogin ? "密码登录" : "验证码一键登录" }}
          </vButton>
        </div>
      </van-form>

      <van-tabs v-if="$appConfig.env == 'dev'" v-model:active="userStore.httpBase" title-active-color="#ffab30" color="#ffab30" class="mt-[10px]">
        <van-tab v-for="h of userStore.httpList" :key="h.name" v-bind="h" class="ml-[9vw] mt-[10px]"> 生产环境: {{ h.name }} </van-tab>
      </van-tabs>

      <!-- <div class="mt-[5vw] text-[25px]">手机号</div>
      <van-
      <div class="text-[25px]">密码</div> -->
      <van-checkbox-group v-model="userStore.checked" class="flex-1 justify-end flex flex-col px-[7vw]">
        <!-- <van-checkbox icon-size="16px" checked-color="#ffab30" name="remember">记住密码</van-checkbox> -->
        <van-checkbox class="py-[1vh]" icon-size="16px" checked-color="#ffab30" name="readed">
          我已阅读并同意博光NEW
          <a class="text-[blue]" @click.stop="$openWeb('https://www.btosolarman.com/APP/boGuangAPP/privacy.txt', '隐私政策')">隐私政策</a>
          和
          <a class="text-[blue]" @click.stop="$openWeb('/orderh5/protocolOfUsage.html', '使用协议')">使用协议</a>
        </van-checkbox>
      </van-checkbox-group>
    </div>
  </div>
</template>

<style scoped>
:deep(.van-popover__action) {
  width: 60vw;
}
.bgImg {
  width: 100%;
  background: #fff url("./newLogin.png") center/100%;
  /* border-bottom-right-radius: 50% 55px;
  border-bottom-left-radius: 50% 55px; */
}
:deep(.van-checkbox__icon) {
  @apply shadow-inner;
}
:deep(.van-field__button) {
  @apply !flex;
}
:deep(.van-field__left-icon) {
  margin-right: 10px;
  color: #ffab30;
}
:deep(.van-checkbox__label) {
  font-size: 16px !important;
}
</style>
