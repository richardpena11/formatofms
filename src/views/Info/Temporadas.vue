<template>
  <div v-if="info" class="ligas">
    <h3 class="title">FMS {{ info[pais].title }}</h3>
    <div class="ligas-card-container">
      <div v-for="(temp, index) in info[pais].temporadas" :key="index">
        <div class="title">{{ temp.nombre }} ({{ temp.date }})</div>
        <div class="jornadas">
          <div v-for="(jornada, index) in temp.jornadas" :key="index">
            <router-link :to="jornada.link" class="jornada">
              {{ jornada.nombre }}
            </router-link>
            <router-link
              v-if="isNextBA(jornada)"
              :to="temp.aplazadas[isNextBA(jornada) - 1].link"
              class="jornada"
            >
              {{ temp.aplazadas[isNextBA(jornada) - 1].nombre }}
            </router-link>
            <router-link
              v-if="isPlayOff(jornada)"
              :to="temp.playOff.link"
              class="jornada"
            >
              {{ temp.playOff.nombre }}
            </router-link>
          </div>
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

  methods: {
    isNextBA(jornada) {
      if (jornada.next) {
        return jornada.next.split("BA")[1];
      }
      return false;
    },

    isPlayOff(jornada) {
      if (jornada.next) {
        return jornada.next.includes("PlayOff");
      }
      return false;
    }
  },

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
    font-size: 28px;
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
      padding: 10px 15px 10px 10px;
      border-radius: 0 0 10px 10px;
      background: var(--shadow-color);
      height: 300px;
      overflow-y: auto;
      &::-webkit-scrollbar {
        border-radius: 12px;
        width: 10px;
        background: var(--bg-color);
        border: 2px solid var(--pure-color);
        opacity: 0.2;
      }
      &::-webkit-scrollbar-thumb {
        border-radius: 12px;
        background: var(--pure-color);
        &:hover {
          background: var(--main-color);
        }
      }
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
