<template>
  <div class="rondas" ref="rondasDOM">
    <div class="ronda" v-if="rondaActual === ronda">
      <div class="ronda-title">{{ rondas.find(el => el.value === ronda).name }}</div>

      <div :class="`freestylers ${orderFreestyler}`">
        <freestyler
          :nombre="freestyler1"
          :contidadPatrones="rondas.find(el => el.value === ronda).patrones"
          :patrones="patronesDetalles.patrones"
          :patronesExtra="patronesDetalles.patronesExtra"
          :rondas="rondas"
          :ronda="ronda"
        />

        <freestyler
          :nombre="freestyler2"
          :contidadPatrones="rondas.find(el => el.value === ronda).patrones"
          :patrones="patronesDetalles.patrones"
          :patronesExtra="patronesDetalles.patronesExtra"
          :rondas="rondas"
          :ronda="ronda"
        />
      </div>

      <div class="btn">
        <button @click="nextRonda">Siguiente</button>
      </div>
    </div>
    <resultado
      :freestyler1="freestyler1"
      :freestyler2="freestyler2"
      :rondas="rondas"
      v-else
    />
  </div>
</template>

<script>
import Freestyler from "./Freestyler.vue";
import Resultado from "./Resultado.vue";

export default {
  data() {
    return {
      ronda: null
    };
  },

  props: ["rondas"],

  methods: {
    nextRonda() {
      const nextRondaI = this.ruta.findIndex(el => el === this.rondaActual) + 1;
      this.$store.commit("votacion/updatedRondaActual", this.ruta[nextRondaI]);
      this.$refs.rondasDOM.scrollTo(0, 0);
    },

    checkRondaActual() {
      const rondaI = this.ruta.findIndex(el => el === this.rondaActual);
      if (rondaI <= this.ruta.length) {
        this.ronda = this.ruta[rondaI];
      } else {
        this.ronda = "resultado";
      }
    }
  },

  computed: {
    ruta() {
      return this.$store.state.votacion.ruta;
    },

    rondaActual() {
      return this.$store.state.votacion.rondaActual;
    },

    formatoActual() {
      return this.$store.state.votacion.formatoActual;
    },

    patronesDetalles() {
      return this.$store.state.votacion.patronesDetalles;
    },

    freestyler1() {
      return this.$store.state.votacion.freestyler1;
    },

    freestyler2() {
      return this.$store.state.votacion.freestyler2;
    },

    orderFreestyler() {
      const rondaActual = this.rondaActual;
      const ruta = this.ruta;
      const i = ruta.findIndex(el => el === rondaActual);
      console.log(i % 2);
      if (i % 2 === 1) {
        return "freestylers--reverse";
      }
      return "";
    }
  },

  components: {
    Freestyler,
    Resultado
  },

  created() {
    this.checkRondaActual();
  },

  updated() {
    this.checkRondaActual();
  }
};
</script>

<style lang="scss">
.rondas {
  overflow-y: auto;
  .ronda {
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
    .freestylers--reverse {
      flex-direction: row-reverse;
    }
    .btn {
      margin-top: auto;
      display: flex;
      justify-content: center;
      margin-top: 20px;
      button {
        padding: 10px 20px;
        font-size: 20px;
        background: transparent;
        border-radius: 12px;
        color: var(--main-color);
        font-weight: bold;
        border: 5px solid var(--main-color);
        &:focus {
          outline: none;
        }
        &:hover {
          background: var(--main-color);
          color: #f1f1f1;
        }
      }
    }
  }
}
</style>
