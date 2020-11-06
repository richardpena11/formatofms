<template>
  <div class="sign-in-container">
    <div class="sign-in">
      <div class="title">Sign In</div>
      <form class="inputs">
        <div class="input_field" :class="{ invalid: $v.formData.email.$error }">
          <label for="email">Email</label>
          <input
            type="email"
            name="email"
            @blur="$v.formData.email.$touch()"
            v-model.trim="formData.email"
          />

          <div class="error" v-if="$v.formData.email.$error">
            <p class="error_label" v-if="!$v.formData.email.required">
              Este campo es obligatorio
            </p>

            <p class="error_label" v-if="!$v.formData.email.email">
              Por favor introduce un correo valido
            </p>
          </div>
        </div>

        <div
          class="input_field"
          :class="{ invalid: $v.formData.password.$error }"
        >
          <label class="label" for="password">Password</label>

          <input
            type="password"
            name="password"
            @blur="$v.formData.password.$touch()"
            v-model.trim="formData.password"
          />

          <div class="error" v-if="$v.formData.password.$error">
            <p class="error_label" v-if="!$v.formData.password.required">
              Este campo es obligatorio
            </p>

            <p class="error_label" v-if="!$v.formData.password.minLength">
              La contraseña debe ser mayor de 4 caracteres
            </p>
          </div>
        </div>

        <input type="submit" class="btn" @click.prevent="signInSubmit" />

        <div class="error_submit">
          <p class="error_label" v-if="error">
            Algo salio mal...
          </p>
        </div>

        <div class="error_submit">
          <p class="error_label" v-if="authFailed">
            El correo o contraseña es incorrecto. Por favor intentelo
            nuevamente.
          </p>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { required, email, minLength } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      error: false,
      formData: {
        email: "v29590611@gmail.com",
        password: "Rjpv.2002"
      }
    };
  },

  computed: {
    authFailed() {
      return this.$store.state.admin.authFailed;
    }
  },

  destroyed() {
    this.$store.commit("admin/authFailed", "reset");
  },

  validations: {
    formData: {
      email: {
        required,
        email
      },
      password: {
        required,
        minLength: minLength(4)
      }
    }
  },

  methods: {
    signInSubmit() {
      if (!this.$v.$invalid) {
        this.$store.dispatch("admin/signIn", this.formData);
      } else {
        this.error = true;
        setTimeout(() => {
          this.error = false;
        }, 2000);
      }
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
      .input_field {
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
          font-size: 18px;
          color: var(--error-color);
        }
      }
      .input_field.invalid input {
        border: 3px solid var(--error-color);
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
    .error_submit {
      font-size: 18px;
      color: var(--error-color);
      margin-top: 10px;
    }
  }
}
</style>
