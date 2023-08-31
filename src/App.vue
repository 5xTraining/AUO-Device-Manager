<script>
import DeviceInfo from "./components/headers/Info.vue";

export default {
  components: {
    DeviceInfo,
  },
  data: function () {
    return {
      title: "AUO",
      device: "",
      devices: [],
    };
  },
  methods: {
    addDevice() {
      if (this.device !== "") {
        this.devices.unshift(this.device);
        this.device = "";
      }
    },
  },
};
</script>

<template>
  <h1>{{ title }} 設備管理系統</h1>
  <form>
    <div>
      <label>設備名稱</label><br />
      <input type="text" v-model="device" />
      <button @click.prevent="addDevice">新增</button>
    </div>
  </form>
  <section>
    <header>
      <DeviceInfo :devices="devices" />
    </header>

    <ul>
      <li v-for="d in devices">{{ d }}</li>
    </ul>
  </section>
</template>

<style scoped>
label {
  background-color: black;
  color: white;
  padding: 4px 8px;
}
</style>
