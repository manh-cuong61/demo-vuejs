<template>
  <div class="flex h-screen">
    <side-bar></side-bar>
    <div class="w-full">
      <header-layout @onLogout="onLogout"></header-layout>
      <slot></slot>
    </div>
  </div>
  <div class="flex h-screen"></div>
</template>

<script>
import Header from "../layouts/header.vue";
import SideBar from "../layouts/siderbar.vue";
import { projectAuth } from "../../config/firebase";
import { useRouter } from "vue-router";

export default {
  components: {
    HeaderLayout: Header,
    SideBar: SideBar,
  },
  setup() {
    const router = useRouter();
    async function onLogout() {
      await projectAuth.signOut();

      router.push({ name: "Login" });
    }

    return { onLogout };
  },
};
</script>
