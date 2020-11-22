<template>
  <div class="inicio-container">
    <h1 class="h1">Formato FMS</h1>
    <div class="inicio">
      <div class="search-container">
        <h2>Busca una batalla</h2>
        <YoutubeSearch />
      </div>

      <div class="ultimas">
        <h2 class="title">Ultimas jornadas por liga</h2>
        <router-link
          class="ultima"
          v-for="(liga, index) in newInfo"
          :key="index"
          :to="liga.link"
        >
          <div class="pais">{{ liga.pais }}</div>
          <div class="info">
            {{ liga.temporada }}:
            {{ liga.jornada }}
          </div>
        </router-link>
      </div>
    </div>
    <footer class="footer">
      <div class="menu">
        <router-link to="/cookies">Cookies</router-link>
        <router-link to="/nosotros">Nosotros</router-link>
        <div class="redes">
          <a
            href="https://www.youtube.com/c/Nigatsu?sub_confirmation=1"
            target="_blank"
            class="redes__youtube"
            ><font-awesome-icon class="icon" :icon="['fab', 'youtube']"
          /> Youtube</a>
          <a
            href="https://www.youtube.com/c/Nigatsu?sub_confirmation=1"
            target="_blank"
            class="redes__twitter"
            ><font-awesome-icon class="icon" :icon="['fab', 'twitter']"
          /> Twitter</a>
        </div>
      </div>
      <div class="version">Version {{ version }}</div>
    </footer>
  </div>
</template>

<script>
import YoutubeSearch from "../../components/Votacion/Sidebar/Search/YoutubeSearch.vue";

export default {
  data() {
    return {
      version: null
    };
  },
  computed: {
    newInfo() {
      const info = this.info;
      let newInfo = new Array();
      for (const ligaName in info) {
        const pais = info[ligaName];
        const temporada = pais.temporadas[pais.temporadas.length - 1];
        const jornada = temporada.jornadas[temporada.jornadas.length - 1];

        newInfo.push({
          pais: pais.title,
          temporada: temporada.nombre,
          jornada: jornada.nombre,
          link: jornada.link
        });
      }

      return newInfo;
    }
  },
  methods: {
    getVersion() {
      this.$http
        .get("Version.json")
        .then(response => response.json())
        .then(data => (this.version = data))
        .catch(err => console.error(err));
    }
  },
  props: ["info"],
  components: {
    YoutubeSearch
  }
};
</script>

<style lang="scss">
.inicio-container {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .h1 {
    text-align: center;
    color: var(--high-contrast-color);
    margin-top: 20px;
    margin-bottom: 30px;
    font-size: 40px;
  }
  .inicio {
    display: flex;
    justify-content: space-around;
    text-align: center;
    .ultimas {
      color: var(--high-contrast-color);
      .title {
        font-size: 24px;
        margin-bottom: 25px;
      }
      .ultima {
        cursor: pointer;
        display: block;
        text-decoration: none;
        color: var(--high-contrast-color);
        border-radius: 15px;
        padding: 15px 0;
        .pais {
          font-size: 20px;
          margin-bottom: 5px;
        }
        .info {
          font-size: 20px;
          color: var(--high-contrast-color);
        }
        &:hover {
          background: var(--bg-color);
        }
      }
    }
    .search-container {
      h2 {
        color: var(--high-contrast-color);
        margin-bottom: 15px;
      }
      .search {
        .search-result {
          max-height: 500px;
        }
      }
    }
    > div {
      max-width: 500px;
      width: 40%;
      border-radius: 30px;
      padding: 30px;
      background: var(--shadow-color);
    }
  }
  .footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    .menu {
      display: flex;
      align-items: center;
      height: 100%;
      a {
        padding: 0 10px;
        text-decoration: none;
        font-size: 18px;
        color: var(--low-contrast-color);
        &:hover {
          color: var(--high-contrast-color);
        }
      }
      .redes {
        display: flex;
        align-items: center;
        a {
          padding: 2px;
          margin: 0 8px;
          text-decoration: none;
          font-size: 18px;
          color: var(--low-contrast-color);
          &:hover {
            color: var(--high-contrast-color);
          }
          border-bottom: 3px solid transparent;
          transition: border 0.3s;
        }
        .redes__youtube {
          &:hover {
            border-bottom: 3px solid #FF0000;
          }
        }
        .redes__twitter {
          &:hover {
            border-bottom: 3px solid #1DA1F2;
          }
        }
      }
    }
    .version {
      color: var(--high-contrast-color);
      padding: 0 20px;
      margin-left: auto;
    }
  }
}

@media screen and (max-width: 900px) {
  .inicio-container {
    height: initial;
    .inicio {
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      > div {
        width: 80%;
        margin: 20px 0;
      }
    }
  }
}

@media screen and (max-width: 450px) {
  .inicio-container {
    .inicio {
      > div {
        width: 90%;
      }
    }
  }
}
</style>
