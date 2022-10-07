<template>
  <div class="login-box mx-auto">
    <h1 class="mx-auto w-full text-center font-bold text-2xl">IMoney</h1>
    <base-card class="card">
      <form @submit.prevent="onSubmit">
        <div class="row mb-4">
          <base-input
            @focus="error = null"
            label="Email address"
            idInput="email"
            placeholder="email"
            v-model="userLogin.email"
          ></base-input>
        </div>
        <div class="row mb-4">
          <base-input
            @focus="error = null"
            label="Password"
            idInput="password"
            placeholder="password"
            type="password"
            v-model="userLogin.password"
          ></base-input>
        </div>
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full mt-4"
          type="submit"
        >
          Sign In
        </button>
      </form>
      <div class="flex mt-2 justify-center">
        <p>I am a new user.</p>
        <router-link class="text-blue-700 pl-1" :to="{ name: 'Register' }"
          >Sign Up</router-link
        >
      </div>
    </base-card>
  </div>
  <div id="error-message" class="text-red-700 text-center mt-16" v-if="error">
    <span class="sm:inline">{{ error }}</span>
  </div>
</template>
<script>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import AuthService from "../apis/authAdmin";

export default {
  setup() {
    const userLogin = reactive({
      email: "",
      password: "",
    });
    const router = useRouter();
    const error = ref(null);
    async function onSubmit() {
      const result = await AuthService.login(userLogin);
      if (result.status != 200) {
        error.value = result.data.message;
      } else {
        router.push({ name: "Home" });
      }
    }
    return { userLogin, onSubmit, error };
  },
};
</script>

<style scoped>
.card {
  margin: auto;
  min-width: 450px;
}
.login-box {
  position: absolute;
  top: 35%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
}
</style>
