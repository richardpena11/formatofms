<template>
  <div id="app">
    <div id="sun">
      <Navbar />
      <router-view v-if="info" :info="info" class="main" />
      <CookieLaw
        theme="formato-fms"
        transitionName="slideFromTop"
        position="top"
      >
        <div slot-scope="props">
          <p class="Cookie__content">{{ cookies.message }} <span></span></p>
          <div class="Cookie__buttons">
            <button class="Cookie__button" @click="props.accept">
              {{ cookies.buttonText }}
            </button>
            <router-link class="Cookie__button" :to="cookies.link">
              <span>{{ cookies.linkText }}</span>
            </router-link>
          </div>
        </div>
      </CookieLaw>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Nav/Navbar.vue";
import CookieLaw from "vue-cookie-law";

export default {
  data() {
    return {
      info: null,
      cookies: {
        message:
          "Esta pagina utiliza cookies para poder funcionar. Si continuas en esta paginas aceptas el uso de estos.",
        buttonText: "Acepto",
        link: "/cookies",
        linkText: "Mas Info."
      }
    };
  },

  components: {
    Navbar,
    CookieLaw
  },

  methods: {
    fetchData() {
      this.$http
        .get("Contenido.json")
        .then(response => response.json())
        .then(data => (this.info = data))
        .catch(err => console.error(err));
    }
  },

  created() {
    this.$store.dispatch("admin/refreshToken");

    this.fetchData();
  },

  watch: {
    $route() {
      this.fetchData();
    }
  }
};
</script>

<style lang="scss">
#sun {
  --main-color: #3d5af1;
  --pure-color: #ffffff;
  --bg-color: #f1f1f1;
  --shadow-color: #d9d9d9;
  --low-contrast-color: #484d51;
  --high-contrast-color: #323538;
  --white-color: #f1f1f1;
  --black-color: #323538;
  --error-color: #eb3d3d;

  --menu-bg-color: var(--high-contrast-color);
  --menu-shadow-color: var(--low-contrast-color);
}

#moon {
  --main-color: #3d5af1;
  --pure-color: #1a1a1a;
  --bg-color: #323538;
  --shadow-color: #484d51;
  --low-contrast-color: #d9d9d9;
  --high-contrast-color: #f1f1f1;
  --white-color: #f1f1f1;
  --black-color: #323538;
  --error-color: #eb3d3d;

  --menu-bg-color: var(--pure-color);
  --menu-shadow-color: var(--bg-color);
}

* {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  padding-left: 80px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  & > div {
    background: var(--bg-color);
    min-height: 100vh;
  }
}

.Cookie--formato-fms {
  padding: 20px;
  background: var(--shadow-color);
  > div {
    width: 100%;
    padding: 0 20px;
    margin: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .Cookie__content {
      margin-right: 20px;
      text-align: center;
      font-size: 18px;
      line-height: 24px;
      color: var(--high-contrast-color);
    }
    .Cookie__buttons {
      .Cookie__button {
        border: none;
        text-decoration: none;
        font-size: 18px;
        margin-right: 20px;
        padding: 12px 40px;
        border-radius: 10px;
        color: var(--white-color);
        background: var(--main-color);
        opacity: 0.9;
        &:hover {
          background: var(--main-color) !important;
          opacity: 1;
        }
      }
    }
  }
}

@media screen and (max-width: 550px) {
  body {
    padding-left: 0px;
    padding-bottom: 64px;
  }
  .Cookie--formato-fms {
    padding: 10px;
    > div {
      flex-direction: column;
    }
    .Cookie__buttons {
      margin-top: 10px;
    }
  }
}
</style>
