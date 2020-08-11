<template>
  <div class="resultado">
    <div class="freestyler-name">
      {{ name }}
    </div>
    <div class="freestyler-info">
      <div class="resultados" v-for="(ronda, index) in total" :key="index">
        <div class="title">{{ ronda.name }}</div>
        <div class="puntos">{{ ronda.total }}</div>
      </div>
    </div>
  </div> 
</template>

<script>
import { mapMutations } from "vuex";

export default {
  props: ["name"],

  methods: {
    ...mapMutations(["calculateTotal"])
  },

  computed: {
    total() {
      return this.$store.state.total[this.name];
    }
  },

  created() {
    this.calculateTotal(this.name);
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
