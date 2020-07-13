<template>
  <div class="votacion">
    <youtube-player class="youtube-player" :videoId="videoId" />
    <sidebar class="sidebar" />
  </div>
</template>

<script>
import YoutubePlayer from "../../components/Votacion/Youtube.vue";
import Sidebar from "../../components/Votacion/Sidebar/Sidebar.vue";

export default {
  data() {
    return {
      videoId: null
    };
  },

  created() {
    this.videoId = this.$route.params.videoId;
  },

  watch: {
    $route() {
      this.videoId = this.$route.params.videoId;
    }
  },

  components: {
    YoutubePlayer,
    Sidebar
  }
};
</script>

<style lang="scss">
.votacion {
  height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.youtube-player {
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  height: 90%;
}

.sidebar {
  width: 450px;
  height: 90%;
}
</style>
