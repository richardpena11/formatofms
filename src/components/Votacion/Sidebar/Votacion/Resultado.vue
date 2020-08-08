<template>
  <div class="ronda" v-if="!checkPage">
    <div class="ronda-title">Resultados</div>
    <div class="freestylers">
      <FreestylerResultado :name="freestyler1" />

      <FreestylerResultado :name="freestyler2" />
    </div>
  </div>
</template>

<script>
import FreestylerResultado from "./Freestyler_resultado.vue";

export default {
  props: ["freestyler1", "freestyler2"],

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
