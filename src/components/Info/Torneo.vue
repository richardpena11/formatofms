<template>
  <div class="torneo">
    <div class="batallas" v-for="(ronda, index) of info" :key="index">
      <div class="title">{{ ronda.nombre }}</div>
      <div class="batalla-container">
        <batalla
          v-for="(batalla, index) of ronda.batallas"
          :key="index"
          :info="batalla"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Batalla from "./Batalla.vue";

export default {
  props: ["info"],

  components: {
    Batalla
  }
};
</script>

<style lang="scss">
.torneo {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  width: 100%;
  .batallas {
    max-width: 1000px;
    margin-top: 20px;
    justify-content: initial;
    .title {
      color: var(--high-contrast-color);
      font-size: 22px;
      text-align: center;
      margin-bottom: 10px;
    }
    .batalla-container {
      display: flex;
      justify-content: space-around;
      flex-flow: row wrap;
      .batalla {
        width: 42%;
      }
    }
  }
}

@media screen and (max-width: 1000px) {
  .torneo {
    .batallas {
      max-width: 600px;
      .batalla-container {
        align-content: space-around;
        flex-flow: column wrap;
        .batalla {
          width: 90%;
        }
      }
    }
  }
}

@media screen and (max-width: 600px) {
  .torneo {
    .batallas {
      .batalla-container {
        .batalla {
          width: 100%;
        }
      }
    }
  }
}
</style>
