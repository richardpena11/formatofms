<template>
  <div class="patron">
    <span class="patron-name">{{ info.name }}</span>
    <div class="input-container">
      <span class="patron-value">{{ patronValue }}</span>
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
  props: ["info"]
};
</script>

<style lang="scss">
.patron {
  padding: 5px;
  text-align: center;
  .patron-name {
    font-size: 20px;
    color: var(--low-contrast-color);
  }
  .input-container {
    display: flex;
    flex-direction: column;
    .patron-value {
      font-size: 40px;
      font-weight: bold;
      color: var(--high-contrast-color);
    }
    input[type="range"] {
      //ds
    }
  }
}
</style>
