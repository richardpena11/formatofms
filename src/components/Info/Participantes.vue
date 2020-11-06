<template>
  <div class="staff">
    <span class="title">Participantes</span>
    <div class="clasificados">
      <div class="mc" v-for="(mc, index) in info.mcs" :key="index">
        {{ mc }}
      </div>
    </div>
    <span class="title">Jurado</span>
    <div class="clasificados">
      <div class="mc" v-for="(jurado, index) in info.jurados" :key="index">
        {{ jurado }}
      </div>
    </div>
    <span class="title">Host</span>
    <div class="clasificados">
      <div class="mc" v-for="(host, index) in info.hosts" :key="index">
        {{ host }}
      </div>
    </div>
    <span class="title">Dj</span>
    <div class="clasificados">
      <div class="mc" v-for="(dj, index) in info.djs" :key="index">
        {{ dj }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["info"]
};
</script>

<style lang="scss">
.staff {
  width: 100%;
  max-width: 400px;
  padding: 20px;
  margin-left: 30px;
  margin-right: 20px;
  background: var(--shadow-color);
  border-radius: 12px;
  .title {
    display: block;
    text-align: center;
    color: var(--high-contrast-color);
    font-size: 22px;
    margin: 10px 0px;
  }
  .clasificados {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    .mc {
      display: flex;
      align-items: center;
      margin: 7px 0;
      font-size: 20px;
      padding: 0 10px 10px 10px;
      color: var(--high-contrast-color);
    }
  }
}

@media screen and (max-width: 900px) {
  .staff {
    margin: 0px;
    margin-bottom: 50px;
  }
}
</style>
