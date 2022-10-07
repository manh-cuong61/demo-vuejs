<template>
  <Suspense>
    <template #default>
      <component :is="layout">
        <router-view></router-view>
      </component>
    </template>
    <template #fallback>
      <div class="h-screen w-full color bg-green-500">...Loading</div>
    </template>
  </Suspense>
</template>

<script>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { PUBLIC_LAYOUT } from "./constants/index";

export default {
  setup() {
    const route = useRoute();
    const layout = computed(
      () => (route.meta.layout || PUBLIC_LAYOUT) + "-layout"
    );

    return { layout };
  },
};
</script>
