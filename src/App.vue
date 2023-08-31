<script>
export default {
  data: function () {
    return {
      title: "AUO",
      device: "",
      devices: [],
    };
  },
};
</script>

<template>
  <h1>{{ title }} 設備管理系統</h1>
  <form>
    <div>
      <label>設備名稱</label><br />
      <input type="text" v-model="device" />
      <button>新增</button>
    </div>
  </form>
  <section>
    <h3 v-if="devices.length == 0">目前無任何設備</h3>
    <h3 v-else>目前共計 {{ devices.length }} 項設備</h3>
  </section>
</template>

<style scoped>
label {
  background-color: black;
  color: white;
  padding: 4px 8px;
}
</style>
