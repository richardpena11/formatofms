<template>
  <div class="ronda">
    <div class="ronda-title">Resultados</div>
    <div class="freestylers">
      <FreestylerResultado :name="freestyler1" :total="total[freestyler1]" />

      <FreestylerResultado :name="freestyler2" :total="total[freestyler2]" />
    </div>
  </div>
</template>

<script>
import FreestylerResultado from "./Freestyler_resultado.vue";

export default {
  props: ["freestyler1", "freestyler2", "total"],

  components: {
    FreestylerResultado
  }
}
</script>

<style lang="scss">

</style>
