<template>
  <div class="ronda" v-if="!checkPage">
    <div class="ronda-title">Resultados</div>
    <div class="freestylers">
      <FreestylerResultado :rondas="rondas" :name="freestyler1" />

      <FreestylerResultado :rondas="rondas" :name="freestyler2" />
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
      return this.$store.state.rondaActual;
    }
  }
};
</script>

<style lang="scss"></style>
