<template>
  <div v-if="info" class="ligas">
    <h3 class="title">FMS {{ info[pais].title }}</h3>
    <div class="ligas-card-container">
      <div v-for="(temp, index) in info[pais].temporadas" :key="index">
        <div class="title">{{ temp.nombre }} ({{ temp.date }})</div>
        <div class="jornadas">
          <router-link
            v-for="(jornada, index) in temp.jornadas"
            :key="index"
            :to="jornada.link"
            class="jornada"
          >
            {{ jornada.nombre }}
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Info",

  data() {
    return {
      pais: null
    };
  },

  props: ["info"],

  created() {
    this.pais = this.$route.params.pais;
  },

  updated() {
    this.pais = this.$route.params.pais;
  }
};
</script>

<style scoped lang="scss">
.ligas {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  > .title {
    color: var(--high-contrast-color);
  }
  .ligas-card-container {
    width: 95%;
    max-width: 1400px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    & > div {
      margin: 20px;
    }
    .title {
      border-radius: 10px 10px 0 0;
      box-sizing: border-box;
      display: block;
      padding: 15px;
      width: 100%;
      text-align: center;
      background: var(--high-contrast-color);
      color: var(--pure-color);
      font-size: 20px;
    }
    .jornadas {
      padding: 10px 0;
      border-radius: 0 0 10px 10px;
      background: var(--shadow-color);
      .jornada {
        display: block;
        padding: 10px;
        text-align: center;
        font-size: 18px;
        text-decoration: none;
        color: var(--low-contrast-color);
      }
    }
  }
}
</style>
