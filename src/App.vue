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
  <main class="mx-6 sm:mx-12">
    <h1 class="my-6 text-4xl font-extrabold">{{ title }} 設備管理系統</h1>
    <form>
      <div>
        <label class="text-white bg-black p-2">設備名稱</label><br />

        <div class="flex gap-2 items-center">
          <input
            type="text"
            placeholder="請輸入設備名稱"
            class="input-device"
            v-model="device"
          />
          <button @click.prevent="addDevice" class="btn btn-action">
            新增
          </button>
        </div>
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
  </main>
</template>

<style scoped>
.input-device {
  @apply my-2 px-2 text-xl py-2 border border-slate-500;
}

.btn {
  @apply mx-1 py-2 px-4 select-none;
}

.btn-action {
  @apply bg-black text-white hover:bg-slate-600;
}
</style>
