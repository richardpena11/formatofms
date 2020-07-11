<template>
  <div id="app">
    <div id="sun">
      <Navbar />
      <router-view v-if="info" :info="info" class="main" />
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Nav/Navbar.vue";

export default {
  data() {
    return {
      info: null
    };
  },

  components: {
    Navbar
  },

  methods: {
    fetchData() {
      this.$http
        .get("http://localhost:3004/Contenido")
        .then(response => response.json())
        .then(data => (this.info = data))
        .catch(err => console.error(err));
    }
  },

  created() {
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

  --menu-bg-color: var(--pure-color);
  --menu-shadow-color: var(--bg-color);
}

* {
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

@media screen and (max-width: 550px) {
  body {
    padding-left: 0px;
  }
}
</style>
