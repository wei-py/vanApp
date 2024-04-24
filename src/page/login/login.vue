<template>
  <div class="h-full w-full flex-1">
    <div class="h-[30vh] w-full center bgImg">
      <van-image width="100" height="100" src="/icons/loginRegister/btoWhiteLogo.png" />
    </div>
    <div class="h-[50vh] w-full pt-[5vh] px-[3vw]">
      <van-form @submit="onLogin">
        <van-cell-group inset>
          <van-field
            v-model="user.username"
            @update:model-value="onUsernameInput"
            name="phone"
            label=""
            placeholder="请输入账号"
            :rules="user.usernameRule"
            right-icon="arrow"
            left-icon="contact"
            clearable
            class="!bg-[#f2f5f9] mb-[1vh] shadow-inner rounded-lg"
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

          <van-field
            v-if="isPasswordToLogin"
            v-model="user.password"
            :right-icon="user.passwordIcon"
            :left-icon="isPasswordToLogin ? 'lock' : 'chat-o'"
            @click-right-icon="onPasswordIconClick"
            :type="isPasswordToLogin ? user.passwordType : ''"
            class="!bg-[#f2f5f9] shadow-inner rounded-lg"
            :name="isPasswordToLogin ? 'password' : 'code'"
            placeholder="请输入密码"
            clearable
            :rules="user.passwordRule"
          />
          <van-field
            v-else
            v-model="user.code"
            left-icon="comment-circle"
            class="!bg-[#f2f5f9] shadow-inner rounded-lg"
            name="code"
            clearable
            :rules="user.codeRule"
            placeholder="请输入验证码"
          >
            <template #button>
              <van-button @click="onGetCode" size="small" type="warning" class="!bg-[#ffab30] !h-[24px] shadow-md"
                >获取验证码</van-button
              >
            </template>
          </van-field>
        </van-cell-group>
        <div class="w-full px-[4.5vw] pt-[2vh]">
          <van-checkbox-group v-model="checked">
            <van-checkbox icon-size="18px" checked-color="#ffab30" name="remember">记住密码</van-checkbox>
            <van-checkbox class="py-[1vh]" icon-size="18px" checked-color="#ffab30" name="readed">
              我已阅读并同意博光NEW
              <a class="text-[blue]" @click.stop="$openWeb('https://www.btosolarman.com/APP/boGuangAPP/privacy.txt', '隐私政策')"
                >隐私政策</a
              >
              和
              <a class="text-[blue]" @click.stop="$openWeb('/protocolOfUsage.html', '使用协议')"
                >使用协议</a
              >
            </van-checkbox>
          </van-checkbox-group>
        </div>

        <div class="w-full xCenter px-[4vw] py-[2vh]">
          <vButton class="!w-full" native-type="submit">登录</vButton>
        </div>
      </van-form>
    </div>
    <div class="h-[20vh] w-full flex flex-col">
      <van-divider :style="{ borderColor: '#9c9c9c', padding: '0 16px' }">其他登录方式</van-divider>
      <div class="h-[30%] xCenter" @click="isPasswordToLogin = !isPasswordToLogin">
        <van-image class="w-[8%]" mode="aspectFit" src="/icons/loginRegister/phone.png" />
      </div>
      <div class="text-center my-auto text-[#9c9c9c]">
        {{ isPasswordToLogin ? "密码登录" : "验证码登录" }}
      </div>
    </div>
  </div>
</template>

<script setup>
const userStore = useUser();
const user = reactive({
  username: "superadmin",
  password: "CMJBG06#",
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

const checked = ref([]);
const isPasswordToLogin = ref(true);

async function onLogin(params) {
  const t = {
    phone: "superadmin",
    password: "CMJBG06#",
    code: "",
    type: "password",
    systemType: "android",
    systemVersion: "6.0",
    appVersion: "2.4.16",
  };
  const body = lo.merge(t, params);
  const { data } = await http.post("/login", body);
  // 缓存用户信息
  userStore.info = data;

  // 缓存密码项
  params.text = params.phone;
  userStore.usernameList.unshift(lo.omit(params, "phone"));
  userStore.usernameList = lo.uniqBy(userStore.usernameList, "text");

  // 状态字典
  const resp = await http.get("order-state/dic");
  const statusDic = resp.data;
  const flag = useFlag();
  flag.statusDic = { ...statusDic.state, ...statusDic.stage, ...statusDic.task };

  // 选择组织

  // 跳转
  router.push("/home");
  showSuccessToast("登录成功");
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
</script>

<style scoped>
:deep(.van-popover__action) {
  width: 60vw;
}
.bgImg {
  width: 100%;
  background: #fff url("/background/login.png") center no-repeat;
  border-bottom-right-radius: 50% 55px;
  border-bottom-left-radius: 50% 55px;
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
</style>
