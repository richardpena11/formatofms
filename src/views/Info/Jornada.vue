<template>
  <div v-if="info" class="home">
    <navigation :info="infoJornada" />
    <div class="jornada_container">
      <div class="title">
        <h2>FMS {{ info[pais].title }}</h2>
        <h3>
          {{ info[pais].temporadas[temporada - 1].nombre }}:
          {{ infoJornada.nombre }}
        </h3>
      </div>
      <div class="jornada">
        <participantes
          v-if="infoJornada.participantes"
          :info="infoJornada.participantes"
        />
        <batallas
          v-if="infoJornada.batallas"
          :info="infoJornada.batallas"
          :exhibicion="infoJornada.exhibicion"
        />
        <tabla v-if="infoJornada.tabla" :info="infoJornada.tabla" />
        <playOff
          v-if="infoJornada.clasificados"
          :info="infoJornada.clasificados"
        />
        <torneo v-if="infoJornada.torneo" :info="infoJornada.torneo" />
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from "../../components/Info/Navigation.vue";
import Participantes from "../../components/Info/Participantes.vue";
import Batallas from "../../components/Info/Batallas.vue";
import Tabla from "../../components/Info/Tabla.vue";
import PlayOff from "../../components/Info/PlayOff.vue";
import Torneo from "../../components/Info/Torneo.vue";

export default {
  name: "Info",

  data() {
    return {
      infoJornada: null,
      pais: null,
      temporada: null,
      jornada: null
    };
  },

  props: ["info"],

  methods: {
    getDataFromId() {
      this.pais = this.$route.params.pais;
      this.temporada = this.$route.params.temporada;
      this.jornada = this.$route.params.jornada;

      if (this.jornada.includes("BA")) {
        this.jornada = parseInt(this.jornada.replace(/BA/g, ""));
        this.infoJornada = this.info[this.pais].temporadas[this.temporada - 1].aplazadas[this.jornada - 1];
      } else if (this.jornada.includes("PlayOff")) {
        this.infoJornada = this.info[this.pais].temporadas[this.temporada - 1].playOff;
      } else {
        this.infoJornada = this.info[this.pais].temporadas[this.temporada - 1].jornadas[this.jornada - 1];
      }
    }
  },

  created() {
    this.getDataFromId();
  },

  watch: {
    $route() {
      this.getDataFromId();
    }
  },

  components: {
    Navigation,
    Participantes,
    Batallas,
    Tabla,
    PlayOff,
    Torneo
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
    h2 {
      font-size: 28px;
      margin-bottom: 10px;
    }
    h3 {
      font-size: 22px;
    }
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
