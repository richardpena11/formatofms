<template>
  <div class="patron">
    <span class="patron-name">{{ info.name }}</span>
    <div class="input-container">
      <span class="patron-value">{{ patronValue }}</span>

      <div class="checkbox" v-if="hasPuntoExtra">
        <input class="patron-check" type="checkbox" />
        <span class="checkbox-custom"></span>
      </div>

      <input
        type="range"
        :max="info.maxValue"
        :min="info.minValue"
        :step="info.rangeValue"
        v-model="patronValue"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      patronValue: 0
    };
  },

  props: ["info", "hasPuntoExtra"]
};
</script>

<style lang="scss">
.patron {
  min-height: 110px;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  .patron-name {
    font-size: 20px;
    color: var(--low-contrast-color);
  }
  .input-container {
    display: flex;
    flex-direction: column;
    position: relative;
    .patron-value {
      font-size: 40px;
      font-weight: bold;
      color: var(--high-contrast-color);
    }
    .checkbox {
      margin: 6px 0;
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      position: absolute;
      right: 0;
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
        left: calc(50% - 16px);
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
    input[type="range"] {
      -webkit-appearance: none;
      background: transparent;
      width: 100%;
      margin: 18px 0;
      &::-webkit-slider-thumb {
        -webkit-appearance: none;
        margin-top: -14px;
        width: 16px;
        height: 36px;
        border-radius: 6px;
        background: var(--main-color);
        cursor: pointer;
      }
      &::-moz-range-thumb {
        width: 16px;
        height: 36px;
        border-radius: 6px;
        background: var(--main-color);
        cursor: pointer;
      }
      &::-ms-thumb {
        width: 16px;
        height: 36px;
        border-radius: 6px;
        background: var(--main-color);
        cursor: pointer;
      }
      &:focus {
        outline: none;
      }
      &::-webkit-slider-runnable-track {
        width: 100%;
        height: 8.4px;
        border-radius: 1.3px;
        background: var(--bg-color);
        cursor: pointer;
      }
      &::-moz-range-track {
        width: 100%;
        height: 8.4px;
        border-radius: 1.3px;
        background: var(--bg-color);
        cursor: pointer;
      }
      &::-ms-track {
        width: 100%;
        height: 8.4px;
        background: transparent;
        border-color: transparent;
        color: transparent;
        cursor: pointer;
      }
      &::-ms-fill-lower {
        background: var(--bg-color);
        border-radius: 2.6px;
      }
      &::-ms-fill-upper {
        background: var(--bg-color);
        border-radius: 2.6px;
      }
    }
  }
}
</style>
