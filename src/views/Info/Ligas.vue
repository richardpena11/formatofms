<template>
  <div v-if="info" class="ligas">
    <div class="ligas-card-container">
      <router-link
        v-for="(liga, index) in info"
        :key="index"
        :to="liga.link"
        class="ligas-card"
      >
        <img class="img" :src="liga.img" alt="liga.title" />
        <span class="title">{{ liga.title }}</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Ligas",

  props: ["info"]
};
</script>

<style scoped lang="scss">
.ligas {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  .ligas-card-container {
    width: 95%;
    max-width: 1400px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    .ligas-card {
      width: 400px;
      margin: 20px;
      .img {
        border-radius: 10px 10px 0 0;
        vertical-align: top;
        width: 100%;
      }
      .title {
        border-radius: 0 0 10px 10px;
        box-sizing: border-box;
        display: block;
        padding: 20px;
        width: 100%;
        text-align: center;
        background: var(--high-contrast-color);
        color: var(--pure-color);
        font-size: 20px;
      }
    }
  }
}
</style>
