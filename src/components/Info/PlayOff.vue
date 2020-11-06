<template>
  <div class="clasificados_container">
    <span class="title">Clasificados</span>
    <div class="clasificados">
      <div class="mc" v-for="(mc, index) in info" :key="index">{{ mc }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["info"]
};
</script>

<style lang="scss">
.clasificados_container {
  width: 100%;
  max-width: 450px;
  padding: 20px;
  margin-left: 30px;
  background: var(--shadow-color);
  border-radius: 12px;
  .title {
    display: block;
    text-align: center;
    color: var(--high-contrast-color);
    font-size: 22px;
    margin: 10px 0px;
  }
  .clasificados {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    .mc {
      display: flex;
      align-items: center;
      margin: 7px 0;
      font-size: 20px;
      padding: 0 10px 10px 10px;
      color: var(--high-contrast-color);
    }
  }
}

@media screen and (max-width: 900px) {
  .clasificados_container {
    margin-left: 0px;
    margin-top: 50px;
  }
}
</style>
