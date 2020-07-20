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
    fetchData() {
      this.$http
        .get("http://localhost:3004/Formatos")
        .then(response => response.json())
        .then(data => (this.formatos = data))
        .catch(err => console.error(err));
      this.$http
        .get("http://localhost:3004/Freestylers")
        .then(response => response.json())
        .then(data => (this.freestylers = data))
        .catch(err => console.error(err));
      this.$http
        .get("http://localhost:3004/Rondas")
        .then(response => response.json())
        .then(data => (this.rondas = data))
        .catch(err => console.error(err));
    }
  },

  created() {
    this.fetchData();
  },

  components: {
    Start,
    Rondas
  }
};
</script>

<style></style>
