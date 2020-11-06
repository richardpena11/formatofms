<template>
  <div class="resultado" v-if="displayResults">
    <div class="freestyler-name">
      {{ name }}
    </div>
    <div class="freestyler-info">
      <div class="resultados" v-for="(ronda, index) in total" :key="index">
        <div class="title">{{ getRondaName(ronda.name) }}</div>
        <div class="puntos">{{ ronda.total }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["name", "rondas"],

  methods: {
    getRondaName(rondaName) {
      const ronda = this.rondas.find(el => el.value === rondaName);
      if (ronda) {
        return ronda.name;
      }
      return "Total";
    }
  },

  computed: {
    total() {
      return this.$store.state.votacion.total[this.name];
    },

    ruta() {
      return this.$store.state.votacion.ruta;
    },

    rondaActual() {
      return this.$store.state.votacion.rondaActual;
    },

    displayResults() {
      return this.$store.state.votacion.displayResults;
    }
  },

  created() {
    this.$store.dispatch("votacion/displayResultsWait");
  }
};
</script>

<style lang="scss">
.resultado {
  .freestyler-name {
    text-align: center;
    color: var(--high-contrast-color);
    font-size: 24px;
    font-weight: bold;
  }
  .freestyler-info {
    color: var(--high-contrast-color);
    .resultados {
      margin: 20px 0px;
      text-align: center;
      .title {
        font-size: 22px;
      }
      .puntos {
        font-size: 40px;
        font-weight: bold;
      }
    }
  }
}
</style>
