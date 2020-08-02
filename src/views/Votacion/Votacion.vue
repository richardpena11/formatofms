<template>
  <div class="votar">
    <youtube-player :videoId="videoId" />
    <sidebar class="sidebar" />
  </div>
</template>

<script>
import YoutubePlayer from "../../components/Votacion/Player/Youtube.vue";
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
.votar {
  overflow-y: hidden;
  height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .sidebar {
    width: 400px;
    height: 90%;
  }
}
</style>
