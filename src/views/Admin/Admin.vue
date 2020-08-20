<template>
  <div class="sign-in-container">
    <div class="sign-in">
      <div class="title">Sign In</div>
      <form class="inputs">
        <div class="input">
          <label for="email">Email</label>
          <input type="email" name="email" v-model.lazy="email" />
          <div class="error" v-if="errorEmail">
            {{ errorEmail }}
          </div>
        </div>
        <div class="input">
          <label class="label" for="password">Password</label>
          <input type="password" name="password" v-model.lazy="password" />
          <div class="error" v-if="errorPass">
            {{ errorPass }}
          </div>
        </div>
        <input type="submit" class="btn" @click.prevent="signInSubmit" />
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      errorEmail: "",
      errorPass: ""
    };
  },

  methods: {
    signInSubmit() {
      console.log(this.email);
      console.log(this.password);
    }
  }
};
</script>

<style lang="scss">
.sign-in-container {
  height: 100vh;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  .sign-in {
    border-radius: 24px;
    border: 1px solid var(--high-contrast-color);
    background: var(--shadow-color);
    width: 400px;
    padding: 40px;
    .title {
      text-align: center;
      font-weight: bold;
      font-size: 30px;
      color: var(--high-contrast-color);
    }
    .inputs {
      .input {
        padding: 10px 0;
        label {
          display: inline-block;
          font-size: 20px;
          padding: 5px 0;
          color: var(--high-contrast-color);
        }
        input {
          width: 100%;
          padding: 10px;
          margin: 5px 0px;
          font-weight: normal;
          font-size: 18px;
          color: var(--low-contrast-color);
          background: var(--shadow-color);
          border-radius: 12px;
          border: 3px solid var(--high-contrast-color);
          outline: none;
        }
        .error {
          margin-top: 10px;
          font-size: 18px;
          color: var(--error-color);
        }
      }
      .btn {
        width: 100%;
        padding: 10px;
        margin-top: 30px;
        font-size: 20px;
        font-weight: bold;
        color: var(--main-color);
        background: transparent;
        border: 5px solid var(--main-color);
        border-radius: 12px;
        outline: none;
        &:hover {
          color: white;
          background: var(--main-color);
        }
      }
    }
  }
}
</style>
