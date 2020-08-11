<template>
  <aside>
    <div class="action">
      <div
        :class="
          `action_btn action_votar ${ sidebarStatus === 'votar' ? 'action_btn-active' : '' }`
        "
        @click="changeSidebarStatus('votar')"
      >
        Votar
      </div>
      <div
        :class="
          `action_btn action_search ${
            sidebarStatus === 'search' ? 'action_btn-active' : ''
          }`
        "
        @click="changeSidebarStatus('search')"
      >
        Buscador
      </div>
    </div>
    <div class="sidebar">
      <youtube-search class="sidebar-content" v-if="sidebarStatus === 'search'" />
      <votacion class="sidebar-content" v-if="sidebarStatus === 'votar'" />
    </div>
  </aside>
</template>

<script>
import YoutubeSearch from "./Search/YoutubeSearch.vue";
import votacion from "./Votacion/Votacion.vue";

export default {
  data() {
    return {
      sidebarStatus: "votar"
    };
  },

  methods: {
    changeSidebarStatus(newStatus) {
      this.sidebarStatus = newStatus;
    }
  },

  components: {
    YoutubeSearch,
    votacion
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
        color: #fff;
      }
    }
    .action_votar {
      border-radius: 24px 0 0 0;
    }
    .action_search {
      border-left: 1px solid var(--low-contrast-color);
      border-radius: 0 24px 0 0;
    }
    .action_btn-active {
      background: var(--main-color);
      color: #fff;
    }
  }
  .sidebar {
    height: 90%;
    .sidebar-content {
      height: 100%;
      padding: 20px 15px;
      display: flex;
      flex-direction: column;
    }
  }
}
</style>
