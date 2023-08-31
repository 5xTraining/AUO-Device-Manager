<script>
export default {
  props: {
    device: {
      type: Object,
      required: true,
    },
  },
  methods: {
    remove() {
      this.$emit("remove-auo-item", this.device.id);
    },
  },
};
</script>

<template>
  <li
    class="flex px-2 py-1 text-lg my-1 items-center justify-between bg-slate-100"
  >
    {{ device.title }}
    <button class="bg-black text-white px-2 py-1" @click="remove">X</button>
  </li>
</template>
