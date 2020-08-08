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
import { mapMutations } from "vuex";
import Patron from "./Patron.vue";

export default {
  props: [
    "nombre",
    "contidadPatrones",
    "hasPuntoExtra",
    "patrones",
    "patronesExtra",
    "ronda"
  ],

  components: { Patron },

  methods: {
    ...mapMutations(["addPatrones", "addPatronesTotal"])
  },

  beforeDestroy() {
    const inputPatrones = Array.from(
      this.$refs.patrones.querySelectorAll('input[type="range"]')
    );

    const inputExtra = Array.from(
      this.$refs.patrones.querySelectorAll('input[type="checkbox"]')
    );

    const inputPatronesValue = [];
    const inputExtraValue = [];

    for (const input of inputPatrones) {
      inputPatronesValue.push(input.value);
    }

    for (const input of inputExtra) {
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
      this.addPatrones({
        value: value,
        name: this.nombre,
        ronda: this.ronda
      });
    }

    this.addPatronesTotal({
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
