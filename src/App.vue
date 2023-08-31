<script>
import DeviceInfo from "./components/headers/Info.vue";
import DeviceItem from "./components/devices/Item.vue";
import { v4 as uuidv4 } from "uuid";

export default {
  components: {
    DeviceInfo,
    DeviceItem,
  },
  data: function () {
    return {
      title: "AUO",
      device: "",
      devices: [],
    };
  },
  methods: {
    removeItem(id) {
      const index = this.devices.findIndex((device) => {
        return device.id === id;
      });

      this.devices.splice(index, 1);
    },
    addDevice() {
      if (this.device !== "") {
        const item = {
          id: uuidv4(),
          title: this.device,
        };
        this.devices.unshift(item);
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
      <DeviceItem
        @remove-auo-item="removeItem"
        v-for="d in devices"
        :device="d"
      />
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
