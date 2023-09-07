<script>
export default {
  props: {
    devices: {
      type: Array,
      required: true,
      default: [],
    },
  },
  computed: {
    deviceCount() {
      return this.devices.length;
    },

    noDevice() {
      return this.deviceCount === 0;
    },
  },
};
</script>

<template>
  <h3 v-if="noDevice">目前無任何設備</h3>
  <h3 v-else>目前共計 {{ deviceCount }} 項設備</h3>
</template>
