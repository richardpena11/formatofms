<template>
  <div>
    <div class="add_container">
      <router-link to="/admin/add_jornada" class="add">
        Añadir Jornada
      </router-link>
      <router-link to="/admin/add_temporada" class="add">
        Añadir Temporada
      </router-link>
      <router-link to="/admin/add_liga" class="add">
        Añadir Liga
      </router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.add_container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .add {
    width: 300px;
    margin: 30px 0;
    padding: 30px;
    font-size: 22px;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
    border-radius: 12px;
    background: var(--high-contrast-color);
    color: var(--shadow-color);
    &:hover {
      background: var(--main-color);
      color: white;
    }
  }
}
</style>
