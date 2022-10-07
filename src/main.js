import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/styles/tailwind.css";
import "./assets/styles/global.css";
import { registerGlobalComponents } from "./utils/import";
import "@ocrv/vue-tailwind-pagination/styles";
// import fontAwesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fab);
import { far } from "@fortawesome/free-regular-svg-icons";
library.add(far);
import { dom } from "@fortawesome/fontawesome-svg-core";
dom.watch();
import Toast from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";
import "vue-universal-modal/dist/index.css";

import VueUniversalModal from "vue-universal-modal";

const app = createApp(App);
registerGlobalComponents(app);

app.use(router);
app.use(Toast);
app.use(VueUniversalModal, {
  teleportTarget: "#my-modals",
  modalComponent: "Modal",
});
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
