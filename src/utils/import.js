import { defineAsyncComponent } from "vue";

export function registerGlobalComponents(app) {
  app.component(
    "base-card",
    defineAsyncComponent(() => import("../components/BaseCard.vue"))
  );
  app.component(
    "base-input",
    defineAsyncComponent(() => import("../components/BaseInput.vue"))
  );
  app.component(
    "default-layout",
    defineAsyncComponent(() => import("../assets/layouts/default.vue"))
  );

  app.component(
    "auth-layout",
    defineAsyncComponent(() => import("../assets/layouts/auth.vue"))
  );
}
