<template>
  <div class="rondas">
    <div class="ronda" v-for="(ronda, index) in ruta" :key="index" >
      <div class="ronda-title">{{ rondas[ronda].name }}</div>

      <div class="freestylers">
        <freestyler
          :nombre="freestyler1"
          :contidadPatrones="rondas[ronda].patrones"
          :patrones="formatos[formatoActual].patrones"
          :patronesExtra="formatos[formatoActual].patronesExtra"
        />

        <freestyler
          :nombre="freestyler2"
          :contidadPatrones="rondas[ronda].patrones"
          :patrones="formatos[formatoActual].patrones"
          :patronesExtra="formatos[formatoActual].patronesExtra"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Freestyler from "./Freestyler.vue";

export default {
  props: ["rondas", "formatos"],

  computed: {
    ruta() {
      return this.$store.state.ruta;
    },

    rondaActual() {
      return this.$store.state.rondaActual;
    },

    formatoActual() {
      return this.$store.state.formatoActual;
    },

    freestyler1() {
      return this.$store.state.freestyler1;
    },

    freestyler2() {
      return this.$store.state.freestyler2;
    }
  },

  components: {
    Freestyler
  }
};
</script>

<style lang="scss">
.rondas {
  overflow-y: scroll;
  .ronda {
    margin-bottom: 50px;
    .ronda-title {
      text-align: center;
      font-size: 24px;
      color: var(--high-contrast-color);
      margin: 10px 0 20px 0;
    }
    .freestylers {
      justify-content: space-around;
      display: flex;
      .frestyler {
        .frestyler-name {
          text-align: center;
          font-size: 22px;
          color: var(--high-contrast-color);
          margin: 10px 0 20px 0;
        }
      }
    }
  }
}
</style>
