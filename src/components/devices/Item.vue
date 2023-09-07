<script setup>
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
</script>

<template>
  <li
    class="flex items-center justify-between px-2 py-1 my-1 text-lg bg-slate-100"
  >
    {{ device.title }}
    <button class="px-2 py-1 text-white bg-black" @click="remove">X</button>
  </li>
</template>
