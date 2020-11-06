<template>
  <div class="batallas">
    <div v-for="(batalla, index) in info" :key="index">
      <batalla :info="batalla" />
    </div>

    <div v-if="exhibicion" class="exhibicion">
      <span class="title">Exhibicion:</span>
      <div v-for="(batalla, index) in exhibicion" :key="index">
        <batalla :info="batalla" />
      </div>
    </div>
  </div>
</template>

<script>
import Batalla from "./Batalla.vue";

export default {
  props: ["info", "exhibicion"],

  components: {
    Batalla
  }
};
</script>

<style lang="scss">
.batallas {
  padding: 20px 30px;
  width: 100%;
  max-width: 500px;
  background: var(--shadow-color);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-radius: 12px;
  .exhibicion {
    .title {
      display: block;
      color: var(--high-contrast-color);
      font-size: 20px;
      margin: 10px 0px 15px 20px;
    }
  }
}


</style>
