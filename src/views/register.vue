<template>
  <div class="login-box mx-auto">
    <h1 class="mx-auto w-full text-center font-bold text-2xl">IMoney</h1>
    <base-card class="card">
      <form @submit.prevent="onSubmit">
        <div class="row mb-4">
          <base-input
            @focus="error = null"
            label="Full Name"
            idInput="full-name"
            placeholder="full name"
            v-model="user.fullName"
            type="text"
          ></base-input>
        </div>
        <div class="row mb-4">
          <base-input
            @focus="error = null"
            label="Email address"
            idInput="email"
            placeholder="email"
            v-model="user.email"
            type="email"
          ></base-input>
        </div>
        <div class="row mb-4">
          <base-input
            @focus="error = null"
            label="Password"
            idInput="password"
            placeholder="password"
            type="password"
            v-model="user.password"
          ></base-input>
        </div>
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full mt-4"
          type="submit"
          v-if="!isPening"
        >
          Sign up
        </button>
        <button
          class="bg-gray-500 text-white font-bold py-2 px-4 rounded w-full mt-4"
          disabled
          type="submit"
          v-else
        >
          Is loading...
        </button>
      </form>
      <div class="flex mt-2 justify-center">
        <p>I am already a member.</p>
        <router-link class="text-blue-700 pl-1" :to="{ name: 'Login' }"
          >Sign In</router-link
        >
      </div>
    </base-card>
  </div>
  <div id="error-message" class="text-red-700 text-center mt-16" v-if="error">
    <span class="sm:inline">{{ error }}</span>
  </div>
</template>
<script>
import { reactive } from "vue";
import { signUp, error, isPening } from "../composables/useSignUp";
import { useRouter } from "vue-router";

export default {
  setup() {
    const user = reactive({
      fullName: "",
      email: "",
      password: "",
    });
    const router = useRouter();
    async function onSubmit() {
      await signUp(user.email, user.password, user.fullName);
      if (!error.value) router.push({ name: "Profile" });
    }
    return { onSubmit, user, error, isPening };
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
