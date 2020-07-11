<template>
  <div class="batallas">
    <div v-for="(batalla, index) in info" :key="index" class="batalla">
      <div class="mc">
        <span class="mc-name">{{ batalla.mc1.name }}</span>
        <span class="mc-ptb">({{ batalla.mc1.PTB }})</span>
      </div>

      <span class="puntos">
        {{ batalla.mc1.puntos }} - {{ batalla.mc2.puntos }}
      </span>

      <div class="mc">
        <span class="mc-name">{{ batalla.mc2.name }}</span>
        <span class="mc-ptb">({{ batalla.mc2.PTB }})</span>
      </div>

      <div>
        <font-awesome-icon class="icon" icon="play-circle" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["info"]
};
</script>

<style lang="scss">
.batallas {
  padding: 10px;
  width: 100%;
  max-width: 500px;
  background: var(--shadow-color);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-radius: 12px;
  .batalla {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 15px 0;
    font-size: 20px;
    color: var(--high-contrast-color);
    .mc {
      width: 100px;
      display: flex;
      flex-direction: column;
      text-align: center;
    }
    .puntos {
      background: var(--high-contrast-color);
      padding: 7px;
      border-radius: 12px;
      font-size: 24px;
      color: var(--pure-color);
    }
    .icon {
      font-size: 30px;
    }
  }
}

@media screen and (max-width: 400px) {
  .batallas {
    .batalla{
      font-size: 18px;
      .puntos {
        font-size: 22px;
      }
    }
  }
}
</style>
