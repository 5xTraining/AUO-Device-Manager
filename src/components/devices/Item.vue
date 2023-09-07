<script setup>
import { computed } from "vue"
import { RouterLink } from "vue-router"

const props = defineProps({
  device: {
    type: Object,
    required: true,
  },
})

const emits = defineEmits(["remove-auo-item"])

const remove = () => {
  emits("remove-auo-item", props.device.id)
}

const url = computed(() => `/devices/${props.device.id}`)
</script>

<template>
  <li
    class="flex items-center justify-between px-2 py-1 my-1 text-lg bg-slate-100"
  >
    <RouterLink :to="url">{{ device.title }}</RouterLink>
    <button class="px-2 py-1 text-white bg-black" @click="remove">X</button>
  </li>
</template>
