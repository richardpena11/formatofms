<template>
  <div class="ronda" v-if="!checkPage">
    <div class="ronda-title">Resultados</div>

    <div class="freestylers">
      <FreestylerResultado :rondas="rondas" :name="freestyler1" />

      <FreestylerResultado :rondas="rondas" :name="freestyler2" />
    </div>

    <div class="ganador">
      <div class="title">Resultado</div>
      <div class="info">{{ ganador }}</div>
    </div>
  </div>
</template>

<script>
import FreestylerResultado from "./Freestyler_resultado.vue";

export default {
  props: ["freestyler1", "freestyler2", "rondas"],

  components: {
    FreestylerResultado
  },

  computed: {
    checkPage() {
      return this.$store.state.votacion.rondaActual;
    },

    ganador() {
      return this.$store.state.votacion.ganador;
    }
  }
};
</script>

<style lang="scss">
.ronda {
  .ganador {
    .title {
      text-align: center;
      color: var(--high-contrast-color);
      font-size: 22px;
      font-weight: bold;
    }
    .info {
      margin: 10px 0;
      text-align: center;
      color: var(--high-contrast-color);
      font-size: 32px;
    }
  }
}
</style>
