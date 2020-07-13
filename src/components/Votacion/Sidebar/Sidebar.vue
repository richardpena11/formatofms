<template>
  <aside>
    <div class="action">
      <div class="action_btn action_votar">Votar</div>
      <div class="action_btn action_search">Buscador</div>
    </div>
    <div class="sidebar">
      <youtube-search />
    </div>
  </aside>
</template>

<script>
import YoutubeSearch from "./YoutubeSearch.vue";

export default {
  components: {
    YoutubeSearch
  }
};
</script>

<style lang="scss">
aside {
  background: var(--shadow-color);
  border: 1px solid var(--low-contrast-color);
  border-radius: 24px;
  .action {
    display: flex;
    width: 100%;
    .action_btn {
      background: var(--low-contrast-color);
      color: var(--shadow-color);
      font-size: 20px;
      height: 50px;
      line-height: 50px;
      width: 50%;
      text-align: center;
      &:hover {
        background: var(--main-color);
      }
    }
    .action_votar {
      border-radius: 24px 0 0 0;
    }
    .action_search {
      border-left: 1px solid var(--shadow-color);
      border-radius: 0 24px 0 0;
    }
  }
}
</style>
