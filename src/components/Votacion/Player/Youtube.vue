<template>
  <div class="youtube">
    <youtube
      class="youtube-player"
      :video-id="videoId ? videoId : videoPreview"
      :resizeDelay="0"
      :resize="true"
      :fitParent="true"
      :player-vars="{ autoplay: 1 }"
    ></youtube>
    <div v-if="videoInfo" class="youtube-info">
      <div class="youtube-info-title">
        {{ videoInfo.title }}
      </div>
      <div class="youtube-info-extra">
        <div class="youtube-info-extra-channel">
          {{ videoInfo.channelTitle }}
        </div>
        <div class="youtube-info-extra-date">
          {{ dataFixed }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      videoInfo: null,
      videoPreview: "mNJz5L6wbCg"
    };
  },

  props: ["videoId"],

  computed: {
    dataFixed() {
      const oldDate = this.videoInfo.publishedAt;
      const newDate = this.fixingDate(oldDate);
      return newDate;
    }
  },

  methods: {
    getVideoInfo() {
      let videoId;

      if (this.videoInfo) {
        videoId = this.$route.params.videoId;
      } else {
        videoId = this.videoPreview;
      }

      const key = "AIzaSyDXiKRSPaCmmkkSlrHpc941T9zo2wrTYK0";

      const apiUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=${videoId}&key=${key}`;

      this.$http
        .get(apiUrl)
        .then(response => response.json())
        .then(data => (this.videoInfo = data.items[0].snippet))
        .catch(err => console.error(err));
    },

    fixingDate(date) {
      const newDate = date
        .split("T")[0]
        .split("-")
        .reverse()
        .join("-");
      return newDate;
    }
  },

  created() {
    this.getVideoInfo();
  },

  watch: {
    $route() {
      this.getVideoInfo();
    }
  }
};
</script>

<style lang="scss">
.youtube {
  max-width: 1440px;
  width: 100%;
  margin-right: 10px;
  display: flex;
  flex-direction: column;
  &-player {
    width: 100%;
    border: 2px solid var(--low-contrast-color);
  }
  &-info {
    width: 100%;
    background: var(--high-contrast-color);
    text-align: center;
    border-radius: 0px 0px 24px 24px;
    &-title {
      color: var(--pure-color);
      font-weight: bold;
      font-size: 20px;
      padding-top: 15px;
      padding-bottom: 5px;
    }
    &-extra {
      color: var(--shadow-color);
      display: flex;
      justify-content: center;
      &-channel {
        padding: 5px 0;
        margin-right: 20px;
      }
      &-date {
        padding-top: 5px;
        padding-bottom: 15px;
      }
    }
  }
}

@media screen and (max-width: 1000px) {
  .youtube {
    flex-direction: column-reverse;
    margin-bottom: 10px;
    width: 70%;
    &-info {
      border-radius: 12px 12px 0 0;
    }
  }
}

@media screen and (max-width: 800px) {
  .youtube {
    width: 100%;
  }
}
</style>
