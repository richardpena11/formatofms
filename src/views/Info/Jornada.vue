<template>
  <div v-if="info" class="home">
    <Navigation :info="infoJornada" />
    <div class="jornada_container">
      <h2 class="title">
        FMS {{ info[pais].title }}: {{ infoJornada.nombre }}
      </h2>
      <div class="jornada">
        <batallas :info="infoJornada.batallas" />
        <tabla :info="infoJornada.tabla" />
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from "../../components/Info/Navigation.vue";
import Batallas from "../../components/Info/Batallas.vue";
import Tabla from "../../components/Info/Tabla.vue";

export default {
  name: "Info",

  data() {
    return {
      infoJornada: null,
      pais: null
    };
  },

  props: ["info"],

  methods: {
    getDataFromId(ID) {
      const IDArr = ID.split("");
      this.temporada = IDArr[1];
      this.jornada = IDArr[3];

      const id = {
        temporada: IDArr[1],
        jornada: IDArr[3]
      };

      return id;
    }
  },

  created() {
    this.pais = this.$route.params.pais;
    const id = this.getDataFromId(this.$route.params.id);
    this.infoJornada = this.info[this.pais].temporadas[id.temporada - 1].jornadas[id.jornada - 1];
  },

  updated() {
    this.pais = this.$route.params.pais;
    const id = this.getDataFromId(this.$route.params.id);
    this.infoJornada = this.info[this.pais].temporadas[id.temporada - 1].jornadas[id.jornada - 1];
  },

  components: {
    Navigation,
    Batallas,
    Tabla
  }
};
</script>

<style scoped lang="scss">
.jornada_container {
  margin: 0 auto;
  width: 95%;
  max-width: 1400px;
  min-height: calc(100vh - 41px);
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .title {
    color: var(--high-contrast-color);
    margin-bottom: 50px;
    text-align: center;
  }
  .jornada {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
}

@media screen and (max-width: 900px) {
  .jornada {
    flex-direction: column;
  }
}
</style>
