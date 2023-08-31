<script>
export default {
  props: {
    devices: {
      type: Array,
      required: true,
      default: [],
    },
  },
};
</script>

<template>
  <h3 v-if="devices.length == 0">目前無任何設備</h3>
  <h3 v-else>目前共計 {{ devices.length }} 項設備</h3>
</template>
