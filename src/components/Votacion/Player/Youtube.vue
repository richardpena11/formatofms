<template>
  <div class="youtube">
    <youtube
      class="youtube-player"
      v-if="videoId"
      :video-id="videoId"
      :resizeDelay="0"
      :resize="true"
      :fitParent="true"
      :player-vars="{ autoplay: 1 }"
    ></youtube>
  </div>
</template>

<script>
export default {
  props: ["videoId"]
};
</script>

<style lang="scss">
.youtube {
  width: 70%;
  .youtube-player {
    border: 1px solid var(--low-contrast-color);
  }
}
</style>
