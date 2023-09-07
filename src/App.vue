<script setup>
import DeviceInfo from "./components/headers/Info.vue";
import DeviceItem from "./components/devices/Item.vue";
import { v4 as uuidv4 } from "uuid";
import { ref, reactive } from "vue";

// Options -> Composition
const title = "AUO";
const device = ref("");
const devices = reactive([]);

const addDevice = () => {
  if (device !== "") {
    const item = {
      id: uuidv4(),
      title: device.value,
    };
    devices.unshift(item);
    device.value = "";
  }
};

const removeItem = (id) => {
  const index = devices.findIndex((device) => {
    return device.id === id;
  });

  devices.splice(index, 1);
};
</script>

<template>
  <main class="mx-6 sm:mx-12">
    <h1 class="my-6 text-4xl font-extrabold">{{ title }} 設備管理系統</h1>
    <form>
      <div>
        <label class="p-2 text-white bg-black">設備名稱</label><br />

        <div class="flex items-center gap-2">
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
