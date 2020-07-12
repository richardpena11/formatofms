<template>
  <div v-if="info" class="navigation-container">
    <div v-if="info" class="navigation">
      <div class="btn_action previous">
        <router-link class="btn-link" v-if="info.previous" :to="info.previous">
          <font-awesome-icon class="icon" icon="chevron-left" />
        </router-link>
      </div>

      <div class="current">
        <span>{{ info.nombre }}</span>
      </div>

      <div class="btn_action next">
        <router-link class="btn-link" v-if="info.next" :to="info.next">
          <font-awesome-icon class="icon" icon="chevron-right" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["info"]
};
</script>

<style scoped lang="scss">
.navigation-container {
  width: 100%;
  background: var(--shadow-color);
  .navigation {
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--low-contrast-color);
    font-size: 18px;
    .btn_action {
      padding: 10px 30px;
      .btn-link {
        cursor: pointer;
      }
      .icon {
        color: var(--low-contrast-color);
      }
      &:hover {
        color: var(--high-contrast-color);
      }
    }
  }
}
</style>
