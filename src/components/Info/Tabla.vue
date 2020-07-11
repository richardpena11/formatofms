<template>
  <div class="tabla">
    <div class="row" v-for="(row, index) in info" :key="index">
      <span class="cell" v-for="(cell, index) in row" :key="index">{{
        cell
      }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["info"]
};
</script>

<style lang="scss">
.tabla {
  width: 100%;
  max-width: 450px;
  padding: 20px;
  margin-left: 30px;
  background: var(--shadow-color);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-radius: 12px;
  .row {
    display: flex;
    align-items: center;
    margin: 7px 0;
    font-size: 20px;
    padding: 0 10px 10px 10px;
    border-bottom: 2px solid var(--low-contrast-color);
    color: var(--high-contrast-color);
    .cell {
      text-align: center;
      width: 25%;
      &:first-child {
        text-align: start;
        width: 55%;
      }
      &:last-child {
        text-align: end;
        width: 20%;
      }
    }

    &:first-child {
      font-weight: bold;
    }
  }
}

@media screen and (max-width: 900px) {
  .tabla {
    margin-left: 0px;
    margin-top: 50px;
  }
}
</style>
