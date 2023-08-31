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
  <li>
    {{ device.title }}
    <button @click="remove">X</button>
  </li>
</template>
