<template>
  <div class="not-found">
    <div class="title">Error 404: No se ha encontrado</div>
    <div class="info">
      Parece que la url que esta buscando no existe o ya no es valida.
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.not-found {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  .title {
    padding: 20px;
    font-size: 48px;
    color: var(--high-contrast-color);
  }
  .info {
    padding: 20px;
    font-size: 32px;
    color: var(--low-contrast-color);
  }
}
</style>
