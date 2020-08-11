<template>
  <div class="votacion">
    <Start
      v-if="rondaActual === 'setup'"
      :formatos="formatos"
      :freestylers="freestylers"
      :rondas="rondas"
    />
    <rondas v-else :rondas="rondas" :formatos="formatos" />
  </div>
</template>

<script>
import Start from "./Start.vue";
import Rondas from "./Rondas.vue";

import { mapMutations } from "vuex";

export default {
  data() {
    return {
      formatos: null,
      freestylers: null,
      rondas: null,
      ruta: null
    };
  },

  computed: {
    rondaActual() {
      return this.$store.state.rondaActual;
    }
  },

  methods: {
    ...mapMutations(["resetVotacion"]),

    fetchData() {
      this.$http
        .get("Formatos.json")
        .then(response => response.json())
        .then(data => (this.formatos = data))
        .catch(err => console.error(err));
      this.$http
        .get("Freestylers.json")
        .then(response => response.json())
        .then(data => (this.freestylers = data))
        .catch(err => console.error(err));
      this.$http
        .get("Rondas.json")
        .then(response => response.json())
        .then(data => (this.rondas = data))
        .catch(err => console.error(err));
    }
  },

  created() {
    this.fetchData();
    this.resetVotacion();
  },

  components: {
    Start,
    Rondas
  }
};
</script>

<style lang="scss">
.votacion {
  > div {
    &::-webkit-scrollbar {
      border-radius: 12px;
      width: 12px;
      background: var(--pure-color);
      border: 2px solid var(--high-contrast-color);
      opacity: 0.2;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 12px;
      background: var(--low-contrast-color);
      &:hover {
        background: var(--main-color);
      }
    }
  }
}
</style>
