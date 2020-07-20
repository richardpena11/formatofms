<template>
  <div v-if="formatos" class="setup">
    <div class="input">
      <label for="mc1">Primer Freestyler:</label>
      <input name="mc1" type="text" list="mcs" v-model.lazy="freestyler1" />
    </div>

    <div class="input">
      <label for="mc2">Segundo Freestyler:</label>
      <input name="mc2" type="text" list="mcs" v-model.lazy="freestyler2" />
    </div>

    <datalist class="datalist" id="mcs">
      <option v-for="(mc, index) in freestylers" :key="index">
        {{ mc }}
      </option>
    </datalist>

    <div class="input">
      <label for="formato">Formatos:</label>
      <select name="formato" type="text" v-model="option">
        <option
          v-for="(formato, index) in formatos"
          :key="index"
          :value="formato.value"
        >
          {{ formato.name }}
        </option>
      </select>
    </div>

    <div v-if="option === 'personalizado'" ref="checkFormato" class="formato">
      <div
        class="check"
        ref="checkFormato"
        v-for="(ronda, index) in rondas"
        :value="ronda.value"
        :key="index"
      >
        <label :for="ronda.value">{{ ronda.name }}</label>
        <div class="checkbox">
          <input :name="ronda.value" type="checkbox" />
          <span class="checkbox-custom"></span>
        </div>
      </div>
    </div>

    <div class="btn">
      <button @click="sendSetup">Siguiente</button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      freestyler1: "",
      freestyler2: "",
      option: "fms2020"
    };
  },

  props: ["formatos", "rondas", "freestylers"],

  watch: {
    option(val) {
      this.updatedformatoActual(val);
    },

    freestyler1(val) {
      this.updatedFreestyler1(val);
    },

    freestyler2(val) {
      this.updatedFreestyler2(val);
    }
  },

  computed: {
    ruta() {
      return this.$store.state.ruta;
    }
  },

  methods: {
    ...mapMutations([
      "updatedRuta",
      "updatedRondaActual",
      "updatedformatoActual",
      "updatedFreestyler1",
      "updatedFreestyler2"
    ]),

    startVotacion() {
      this.updatedRondaActual(this.ruta[0]);
    },

    sendSetup() {
      if (this.option !== "personalizado") {
        this.updatedRuta(this.formatos[this.option].rondas);
      } else {
        const ruta = [];
        const formatoArr = Array.from(this.$refs.checkFormato.children);
        for (const ronda of formatoArr) {
          const rondaEl = ronda.querySelector('input[type="checkbox"]');
          if (rondaEl.checked) {
            ruta.push(rondaEl.name);
          }
        }
        this.updatedRuta(ruta);
      }
      this.startVotacion();
    }
  }
};
</script>

<style lang="scss">
.setup {
  height: 100%;
  overflow-y: scroll;
  .input {
    display: flex;
    flex-direction: column;
    padding: 10px;
    label {
      margin-bottom: 10px;
      color: var(--high-contrast-color);
      font-size: 20px;
    }
    input[type="text"],
    select {
      padding: 10px;
      border-radius: 12px;
      font-size: 18px;
      color: var(--low-contrast-color);
      border: 3px solid var(--high-contrast-color);
      background: var(--shadow-color);
      font-size: 20px;
      font-size: 18px;
      font-weight: normal;
      &:focus {
        outline: none;
      }
    }
  }
  .formato {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    .check {
      width: 130px;
      margin: 10px 0;
      display: flex;
      flex-direction: column-reverse;
      align-items: center;
      label {
        color: var(--high-contrast-color);
        font-size: 20px;
      }
      .checkbox {
        position: relative;
        display: flex;
        flex-direction: column;
        input[type="checkbox"] {
          height: 32px;
          width: 32px;
          opacity: 0;
          z-index: 2;
          cursor: pointer;
        }
        .checkbox-custom {
          z-index: 1;
          position: absolute;
          top: 0;
          left: 0;
          height: 32px;
          width: 32px;
          background: transparent;
          border-radius: 5px;
          border: 3px solid var(--high-contrast-color);
        }
        .checkbox-custom::after {
          position: absolute;
          content: "";
          top: 12px;
          left: 12px;
          height: 0px;
          width: 0px;
          border-radius: 5px;
          border: solid var(--pure-color);
          border-width: 0 3px 3px 0;
          -webkit-transform: rotate(0deg) scale(0);
          -ms-transform: rotate(0deg) scale(0);
          transform: rotate(0deg) scale(0);
          opacity: 1;
        }
        input:checked {
          & ~ .checkbox-custom {
            background: var(--bg-color);
            border-radius: 5px;
            -webkit-transform: rotate(0deg) scale(1);
            -ms-transform: rotate(0deg) scale(1);
            transform: rotate(0deg) scale(1);
            opacity: 1;
            border: 3px solid var(--high-contrast-color);
          }

          & ~ .checkbox-custom::after {
            -webkit-transform: rotate(45deg) scale(1);
            -ms-transform: rotate(45deg) scale(1);
            transform: rotate(45deg) scale(1);
            opacity: 1;
            left: 9px;
            top: 3px;
            width: 6px;
            height: 12px;
            border: solid var(--high-contrast-color);
            border-width: 0 3px 3px 0;
            background: transparent;
            border-radius: 0px;
          }
        }
      }
    }
  }
  .btn {
    margin-top: auto;
    display: flex;
    justify-content: center;
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
</style>
