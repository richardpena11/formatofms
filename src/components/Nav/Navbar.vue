<template>
  <div class="nav">
    <div class="item" v-for="(item, index) in nav" :key="index">
      <router-link v-if="item.type === 'link'" class="link" :to="item.link">
        <font-awesome-icon class="icon" :icon="item.ico" />
        <span class="title"> {{ item.titulo }} </span>
      </router-link>

      <div
        v-if="item.type === 'action'"
        class="link"
        @click="checkTheme(theme)"
      >
        <font-awesome-icon class="icon" :icon="theme" />
        <span class="title"> {{ item.titulo }} </span>
      </div>

      <div class="subitem" v-if="item.submenu">
        <router-link
          class="subitem-link"
          v-for="(subitem, index) in item.submenu"
          :key="index"
          :to="subitem.link"
        >
          <font-awesome-icon class="icon" icon="chevron-right" />
          <span>{{ subitem.titulo }}</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      nav: null,
      theme: "sun"
    };
  },

  methods: {
    fetchData() {
      this.$http
        .get("http://localhost:3004/Nav")
        .then(response => response.json())
        .then(data => (this.nav = data))
        .catch(err => console.error(err));
    },

    changeTheme(newTheme) {
      this.theme = newTheme;
      document.querySelector("#app").firstElementChild.id = newTheme;
      localStorage.setItem("theme", newTheme);
    },

    checkTheme(ico) {
      let newTheme;
      if (ico === "sun") {
        newTheme = "moon";
      } else if (ico === "moon") {
        newTheme = "sun";
      }

      this.changeTheme(newTheme);
    }
  },

  created() {
    this.fetchData();
  },

  mounted() {
    if (localStorage.getItem("theme")) {
      const newTheme = localStorage.getItem("theme");
      this.changeTheme(newTheme);
    }
  }
};
</script>

<style scoped lang="scss">
.nav {
  position: fixed;
  left: -170px;
  top: 0;
  background: var(--menu-bg-color);
  width: 250px;
  height: 100%;
  transition: all 200ms;

  .item {
    .link {
      color: #fff;
      display: flex;
      align-items: center;
      margin-left: 170px;
      text-decoration: none;
      padding: 20px 0px 20px 20px;
      box-sizing: border-box;
      transition: background-color 200ms;

      &:hover {
        background: var(--main-color);
      }

      .icon {
        color: #fff;
        text-align: center;
        width: 40px;
        font-size: 40px;
      }

      .title {
        margin-left: 40px;
        color: #fff;
        display: none;
        font-size: 20px;
      }
    }

    .subitem {
      display: none;
      background: var(--menu-shadow-color);
      .subitem-link {
        color: #fff;
        display: flex;
        align-items: center;
        text-decoration: none;
        padding: 15px 0px;
        margin-left: 50px;
        box-sizing: border-box;
        transition: background-color 200ms;
        .icon {
          display: none;
        }

        span {
          margin-left: 30px;
          width: 100%;
        }

        &:hover {
          .icon {
            display: initial;
          }
        }
      }
    }

    &:hover {
      .subitem {
        display: block;
      }
    }

    &:last-child {
      width: 80px;
      position: absolute;
      bottom: 0;
    }
  }

  &:hover {
    left: 0;
    .item {
      &:last-child {
        width: 250px;
      }
    }
  }

  &:hover .link .title {
    display: initial;
  }

  &:hover .link {
    margin-left: 0;
  }
}

@media screen and (max-width: 550px) {
  .nav {
    display: flex;
    justify-content: space-around;
    left: 0;
    top: initial;
    bottom: 0;
    width: 100%;
    height: 80px;
    .item {
      .link {
        margin-left: initial;
        padding: 20px;

        .title {
          display: none;
        }
      }

      .subitem {
        display: none;
        .subitem-link {
          &:hover {
            .icon {
              display: initial;
            }
          }
        }
      }

      &:hover {
        .subitem {
          display: none;
        }
      }

      &:last-child {
        position: initial;
      }
    }

    &:hover {
      .item {
        &:last-child {
          width: 80px;
        }
      }
    }
  }
}
</style>
