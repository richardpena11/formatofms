<template>
  <div class="votar">
    <youtube-player :videoId="videoId" class="youtube-container" />
    <sidebar class="sidebar-container" />
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
  padding: 0px 20px;
  overflow-y: auto;
  height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .sidebar-container {
    width: 450px;
    height: 95%;
  }
}

@media screen and (max-width: 1000px) {
  .votar {
    height: initial;
    flex-direction: column;
    .sidebar-container {
      height: 50vh;
    }
  }
}

@media screen and (max-width: 550px) {
  .votar {
    padding-bottom: 80px;
    .sidebar-container {
      width: 100%;
    }
  }
}
</style>
