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

    <div v-if="option === 'personalizado'" class="formato">
      <div class="formato_ronda" ref="checkFormato">
        <div
          class="check"
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
      <div class="formato_rango">
        <div class="ajustes" ref="patronesDOM">
          <span>Patrones</span>
          <div class="input">
            <label>Min.</label>
            <input id="min" type="number" value="0" />
          </div>

          <div class="input">
            <label>Max.</label>
            <input id="max" type="number" value="4" />
          </div>

          <div class="input">
            <label>rango</label>
            <input id="range" type="number" value="0.5" />
          </div>
        </div>

        <div class="ajustes" ref="skillDOM">
          <span>Skill</span>
          <div class="input">
            <label>Min.</label>
            <input id="min" type="number" value="0" />
          </div>

          <div class="input">
            <label>Max.</label>
            <input id="max" type="number" value="2" />
          </div>

          <div class="input">
            <label>rango</label>
            <input id="range" type="number" value="0.5" />
          </div>
        </div>

        <div class="ajustes" ref="flowDOM">
          <span>Flow</span>
          <div class="input">
            <label>Min.</label>
            <input id="min" type="number" value="0" />
          </div>

          <div class="input">
            <label>Max.</label>
            <input id="max" type="number" value="2" />
          </div>

          <div class="input">
            <label>rango</label>
            <input id="range" type="number" value="0.5" />
          </div>
        </div>

        <div class="ajustes" ref="escenaDOM">
          <span>Escena</span>
          <div class="input">
            <label>Min.</label>
            <input id="min" type="number" value="0" />
          </div>

          <div class="input">
            <label>Max.</label>
            <input id="max" type="number" value="2" />
          </div>

          <div class="input">
            <label>rango</label>
            <input id="range" type="number" value="0.5" />
          </div>
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
      "updatedFreestyler2",
      "updatedpatronesDetalles"
    ]),

    startVotacion() {
      this.updatedRondaActual(this.ruta[0]);
    },

    getPatronesDetalles() {
      const patrones = this.$refs.patronesDOM;
      const skill = this.$refs.skillDOM;
      const flow = this.$refs.flowDOM;
      const escena = this.$refs.escenaDOM;

      const patronesDetalles = {
        patrones: {
          name: "Patron",
          maxValue: parseFloat(patrones.querySelector("#max").value),
          minValue: parseFloat(patrones.querySelector("#min").value),
          rangeValue: parseFloat(patrones.querySelector("#range").value)
        },
        patronesExtra: [
          {
            name: "Skill",
            maxValue: parseFloat(skill.querySelector("#max").value),
            minValue: parseFloat(skill.querySelector("#min").value),
            rangeValue: parseFloat(skill.querySelector("#range").value)
          },
          {
            name: "Flow",
            maxValue: parseFloat(flow.querySelector("#max").value),
            minValue: parseFloat(flow.querySelector("#min").value),
            rangeValue: parseFloat(flow.querySelector("#range").value)
          },
          {
            name: "Escena",
            maxValue: parseFloat(escena.querySelector("#max").value),
            minValue: parseFloat(escena.querySelector("#min").value),
            rangeValue: parseFloat(escena.querySelector("#range").value)
          }
        ]
      };
      this.updatedpatronesDetalles(patronesDetalles);
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
        this.getPatronesDetalles();
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
    &_ronda {
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
    &_rango {
      .ajustes {
        margin-top: 25px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        &:last-child {
          margin-bottom: 25px;
        }
        > span {
          margin-bottom: 10px;
          color: var(--high-contrast-color);
          font-size: 24px;
          text-align: center;
          width: 100%;
        }
        .input {
          width: 32%;
          display: flex;
          flex-direction: column;
          text-align: center;
          padding: 10px;
          label {
            margin-bottom: 10px;
            color: var(--high-contrast-color);
            font-size: 20px;
          }
          input[type="number"] {
            padding: 10px 0;
            border-radius: 12px;
            font-size: 18px;
            text-align: center;
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
