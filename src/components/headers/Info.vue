<script setup>
import { computed } from "vue"

const props = defineProps({
  devices: {
    type: Array,
    required: true,
    default: [],
  },
})

const deviceCount = computed(() => props.devices.length)
const noDevice = computed(() => deviceCount.value === 0)
</script>

<template>
  <h3 v-if="noDevice">目前無任何設備</h3>
  <h3 v-else>目前共計 {{ deviceCount }} 項設備</h3>
</template>
