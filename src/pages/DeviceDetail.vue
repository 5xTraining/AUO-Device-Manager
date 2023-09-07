<script setup>
import { onBeforeMount } from "vue"
import { useRoute } from "vue-router"
import { ref } from "vue"

const route = useRoute()
const StorageKey = "AUO-Device-List"
const deviceName = ref("")
const deviceId = ref("")

onBeforeMount(() => {
  const id = route.params.deviceId

  const allDevices = JSON.parse(localStorage.getItem(StorageKey))
  const device = allDevices.find((d) => d.id === id)

  deviceId.value = device.id
  deviceName.value = device.title
})
</script>

<template>
  <h1 class="h1">設備：{{ deviceName }}</h1>
  <div>編號：{{ deviceId }}</div>
</template>
