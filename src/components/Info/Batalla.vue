<template>
  <div class="batalla">
    <div class="mc">
      <span class="mc-name">{{ info.mc1.name }}</span>
      <span v-if="info.mc1.PTB" class="mc-ptb">({{ info.mc1.PTB }})</span>
    </div>

    <span class="puntos"> {{ info.mc1.puntos }} - {{ info.mc2.puntos }} </span>

    <div class="mc">
      <span class="mc-name">{{ info.mc2.name }}</span>
      <span v-if="info.mc2.PTB" class="mc-ptb">({{ info.mc2.PTB }})</span>
    </div>

    <a :href="info.videoUrl" target="_blank" class="batalla-url">
      <font-awesome-icon class="icon" icon="play-circle" />
    </a>
  </div>
</template>

<script>
export default {
  props: ["info"]
};
</script>

<style lang="scss">
.batalla {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  .batalla-url {
    color: var(--high-contrast-color);
    .icon {
      font-size: 30px;
    }
  }
}

@media screen and (max-width: 400px) {
  .batalla {
    font-size: 18px;
    .puntos {
      font-size: 22px;
    }
  }
}
</style>
