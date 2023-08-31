<script>
export default {
  props: {
    device: {
      type: Object,
      required: true,
    },
  },
};
</script>

<template>
  <li>
    {{ device.title }}
    <button>X</button>
  </li>
</template>
