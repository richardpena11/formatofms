<template>
  <div class="rondas">
    <div class="ronda" v-if="rondaActual === ronda">
      <div class="ronda-title">{{ rondas[ronda].name }}</div>

      <div class="freestylers">
        <freestyler
          :nombre="freestyler1"
          :contidadPatrones="rondas[ronda].patrones"
          :patrones="patronesDetalles.patrones"
          :patronesExtra="patronesDetalles.patronesExtra"
          :ronda="ronda"
        />

        <freestyler
          :nombre="freestyler2"
          :contidadPatrones="rondas[ronda].patrones"
          :patrones="patronesDetalles.patrones"
          :patronesExtra="patronesDetalles.patronesExtra"
          :ronda="ronda"
        />
      </div>

      <div class="btn">
        <button @click="nextRonda">Siguiente</button>
      </div>
    </div>
    <resultado :freestyler1="freestyler1" :freestyler2="freestyler2" v-else />
  </div>
</template>

<script>
import Freestyler from "./Freestyler.vue";
import Resultado from "./Resultado.vue";
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      ronda: null
    };
  },

  props: ["rondas", "formatos"],

  methods: {
    ...mapMutations(["updatedRondaActual"]),

    nextRonda() {
      const nextRondaI = this.ruta.findIndex(el => el === this.rondaActual) + 1;
      this.updatedRondaActual(this.ruta[nextRondaI]);
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
      return this.$store.state.ruta;
    },

    rondaActual() {
      return this.$store.state.rondaActual;
    },

    formatoActual() {
      return this.$store.state.formatoActual;
    },

    patronesDetalles() {
      const patronesDetalles = this.$store.state.patronesDetalles;
      if (patronesDetalles) {
        console.log(patronesDetalles);
        return patronesDetalles;
      }
      console.log({
        patrones: this.formatos[this.formatoActual].patrones,
        patronesExtra: this.formatos[this.formatoActual].patronesExtra
      });
      return {
        patrones: this.formatos[this.formatoActual].patrones,
        patronesExtra: this.formatos[this.formatoActual].patronesExtra
      };
    },

    freestyler1() {
      return this.$store.state.freestyler1;
    },

    freestyler2() {
      return this.$store.state.freestyler2;
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
