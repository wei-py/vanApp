<template>
  <div>
    <div ref="scanRef" id="barcodeScan" class="w-full h-[90vw]"></div>
  </div>
</template>

<script setup>
import Quagga from "quagga"

const scanRef = ref(null)

onMounted(() => {
  init()
})

function init() {
  Quagga.init(
    {
      inputStream: {
        name: 'Live',
        type: 'LiveStream', // 方式
        constraints: {
          width: '790',
          height: '490'
        }, // 解码区域
        numberOfWorkers: navigator.hardwareConcurrency,
        target: scanRef.value // 影像输出到的节点
      },
      locate: true,
      decoder: {
        readers: ['ean_reader'], // 解码方式
        debug: {
          drawBoundingBox: true,
          showFrequency: true,
          drawScanline: true,
          showPattern: true
        },
      },
      
    },
    function (err) {
      if (err) {
        return
      }
      Quagga.start() // 开启
    }
  )
  Quagga.onDetected(onDetect)
  // Quagga.onProcessed()

}

function onDetect(res) {
  // Quagga.stop()
  // Quagga.offProcessed()
  console.log(res.codeResult)
}
</script>
