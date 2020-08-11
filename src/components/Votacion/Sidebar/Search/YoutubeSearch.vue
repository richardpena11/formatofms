<template>
  <div class="search">
    <div class="search-box">
      <input
        class="search-input"
        type="text"
        @keyup.enter="submitVideoSeach"
        v-model="api.query"
      />
      <input
        class="search-btn"
        type="submit"
        @click="submitVideoSeach"
        value="Buscar"
      />
    </div>
    <div v-if="result" class="search-result">
      <router-link
        class="video"
        v-for="(video, index) in result.items"
        :key="index"
        :to="`/votar/${video.id.videoId}`"
      >
        <div class="thumbnail">
          <img
            :src="video.snippet.thumbnails.medium.url"
            :alt="video.snippet.title"
          />
        </div>
        <div class="info">
          <div class="title">{{ video.snippet.title }}</div>
          <div class="channel">{{ video.snippet.channelTitle }}</div>
        </div>
      </router-link>
    </div>
    <div v-else class="waiting-search">
      <font-awesome-icon class="icon" icon="search" />
      <span>Esperando por tu busqueda...</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      result: null,
      api: {
        baseUrl: "https://www.googleapis.com/youtube/v3/search?",
        part: "snippet",
        type: "video",
        query: "",
        maxResults: 20,
        key: "AIzaSyDXiKRSPaCmmkkSlrHpc941T9zo2wrTYK0",
        prevPageToken: "",
        nextPageToken: ""
      }
    };
  },

  methods: {
    submitVideoSeach() {
      const { baseUrl, part, type, maxResults, query, key } = this.api;
      const apiUrl = `${baseUrl}part=${part}&type=${type}&q=${query}&maxResults=${maxResults}&key=${key}`;

      this.$http
        .get(apiUrl)
        .then(response => response.json())
        .then(data => (this.result = data))
        .catch(err => console.error(err));
    }
  }
};
</script>

<style lang="scss">
.search {
  .search-box {
    display: flex;
    border: 2px solid var(--low-contrast-color);
    border-radius: 8px;
    &:hover {
      border: 2px solid var(--main-color);
      .search-btn {
        border-left: 2px solid var(--high-contrast-color);
      }
    }
    .search-input {
      width: 100%;
      padding: 10px;
      font-size: 18px;
      background: var(--shadow-color);
      color: var(--low-contrast-color);
      border: none;
      border-radius: 8px 0 0 8px;
      &:focus {
        outline: none;
      }
    }
    .search-btn {
      width: 100px;
      padding: 10px;
      font-size: 18px;
      background: var(--shadow-color);
      color: var(--low-contrast-color);
      border: none;
      border-left: 2px solid var(--low-contrast-color);
      border-radius: 0 8px 8px 0;
      transition: all 200ms;
      &:hover {
        background: var(--main-color);
        color: var(--shadow-color);
      }
      &:focus {
        outline: none;
      }
    }
  }
  .search-result {
    width: 100%;
    margin-top: 10px;
    color: var(--high-contrast-color);
    overflow-y: scroll;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    &::-webkit-scrollbar {
      border-radius: 12px;
      width: 12px;
      background: var(--pure-color);
      border: 2px solid var(--high-contrast-color);
      opacity: 0.2;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 12px;
      background: var(--low-contrast-color);
      &:hover {
        background: var(--main-color);
      }
    }
    .video {
      width: 90%;
      margin-bottom: 15px;
      text-decoration: none;
      .thumbnail {
        img {
          width: 100%;
        }
      }
      .info {
        .title {
          color: var(--high-contrast-color);
          text-align: center;
          margin-top: 7px;
        }
        .channel {
          font-size: 15px;
          font-weight: bold;
          margin-top: 5px;
          color: var(--low-contrast-color);
          text-align: center;
        }
      }
    }
  }
  .waiting-search {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 50px 0;
    height: 100%;
    color: var(--high-contrast-color);
    .icon {
      font-size: 64px;
      margin-bottom: 20px;
    }
    span {
      font-size: 20px;
    }
  }
}
</style>
