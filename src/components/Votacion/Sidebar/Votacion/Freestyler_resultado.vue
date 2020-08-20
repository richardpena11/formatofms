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
import { mapActions } from "vuex";

export default {
  props: ["name", "rondas"],

  methods: {
    ...mapActions(["displayResultsWait"]),

    getRondaName(name) {
      const ronda = this.rondas[name];
      if (ronda) {
        return ronda.name;
      }
      return "Total";
    }
  },

  watch: {
    totalIsDone() {
      console.log("cambio");
    }
  },

  computed: {
    total() {
      return this.$store.state.total[this.name];
    },

    ruta() {
      return this.$store.state.ruta;
    },

    rondaActual() {
      return this.$store.state.rondaActual;
    },

    displayResults() {
      return this.$store.state.displayResults;
    }
  },

  created() {
    this.displayResultsWait();
  }
};
</script>

<style lang="scss">
.resultado {
  .freestyler-name {
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
