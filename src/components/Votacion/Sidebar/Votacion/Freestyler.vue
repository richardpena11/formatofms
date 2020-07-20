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
  props: ["nombre", "contidadPatrones", "patrones", "patronesExtra", "ronda"],

  components: { Patron },

  methods: {
    ...mapMutations(["updatedTotalRuta", "addPatrones", "addPatronesTotal"])
  },

  beforeDestroy() {
    const inputArr = Array.from(
      this.$refs.patrones.querySelectorAll('input[type="range"]')
    );

    for (const input of inputArr) {
      this.addPatrones({
        value: input.value,
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
