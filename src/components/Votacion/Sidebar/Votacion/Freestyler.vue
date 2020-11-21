<template>
  <div class="frestyler">
    <div class="frestyler-name">
      {{ nombre }}
    </div>
    <div class="puntos" ref="patrones">
      <patron
        v-for="index in contidadPatrones"
        :key="`patron ${index}`"
        :info="patrones"
        :hasPuntoExtra="hasPuntoExtra"
      />
      <patron
        v-for="(patronExtra, index) in patronesExtra"
        :key="`patronExtra ${index}`"
        :info="patronExtra"
      />
    </div>
  </div>
</template>

<script>
import Patron from "./Patron.vue";

export default {
  props: [
    "nombre",
    "contidadPatrones",
    "patrones",
    "patronesExtra",
    "rondas",
    "ronda"
  ],

  components: { Patron },

  computed: {
    rondaActual() {
      return this.$store.state.votacion.rondaActual;
    },

    ruta() {
      return this.$store.state.votacion.ruta;
    },

    inputPatrones() {
      return Array.from(
        this.$refs.patrones.querySelectorAll('input[type="range"]')
      );
    },

    inputExtra() {
      return Array.from(
        this.$refs.patrones.querySelectorAll('input[type="checkbox"]')
      );
    },

    hasPuntoExtra() {
      for (const ronda of this.rondas) {
        if (ronda.value === this.ronda) {
          if (this.nombre === this.$store.state.votacion.freestyler1) {
            return ronda.freestyler1.puntoExtra;
          } else if (this.nombre === this.$store.state.votacion.freestyler2) {
            return ronda.freestyler2.puntoExtra;
          }
        }
      }
      return false;
    }
  },

  beforeDestroy() {
    const inputPatronesValue = [];
    const inputExtraValue = [];

    for (const input of this.inputPatrones) {
      inputPatronesValue.push(input.value);
    }

    for (const input of this.inputExtra) {
      let value;
      if (input.checked) {
        value = 1;
      } else {
        value = 0;
      }
      inputExtraValue.push(value);
    }

    const inputValue = [...inputPatronesValue, ...inputExtraValue];

    for (const value of inputValue) {
      this.$store.commit("votacion/addPatrones", {
        value: value,
        name: this.nombre,
        ronda: this.ronda
      });
    }

    this.$store.commit("votacion/addPatronesTotal", {
      name: this.nombre,
      ronda: this.ronda
    });
  }
};
</script>

<style lang="scss">
.frestyler {
  .frestyler-name {
    text-align: center;
    font-size: 22px;
    color: var(--high-contrast-color);
    margin: 10px 0 20px 0;
  }
}
</style>
