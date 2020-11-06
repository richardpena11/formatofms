<template>
  <div class="form">
    <div class="input">
      <label for="nameLiga">Nombre de la liga</label>
      <input type="text" name="nameLiga" v-model="data.title" />
    </div>
    <div class="input">
      <label for="valorLiga">Valor</label>
      <input type="text" name="valorLiga" v-model="data.value" />
    </div>
    <div class="input">
      <label for="thumbLiga">Imagen de miniatura</label>
      <input type="text" name="thumbLiga" v-model="data.img" />
    </div>
    <div class="input">
      <label for="linkLiga">Enlace</label>
      <input type="text" name="linkLiga" v-model="data.link" />
    </div>
    <div class="input">
      <input type="submit" value="Enviar" @click="addLiga" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: {
        title: "",
        img: "",
        link: "",
        value: ""
      }
    };
  },

  props: ["info"],

  methods: {
    addLiga() {
      this.$store.dispatch("admin/addLiga", this.data);
    }
  }
};
</script>

<style></style>
