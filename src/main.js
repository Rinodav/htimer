import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/styles/index.scss";

import PrimeVue from "primevue/config";
import Aura from "@primevue/themes/aura";
import "primeicons/primeicons.css";
import { createPinia } from "pinia";

const pinia = createPinia();
const app = createApp(App);
app.use(pinia);
app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      prefix: "p",
      darkModeSelector: ".p-dark",
      cssLayer: false,
    },
  },
});

// app.use(PrimeVue, {
//   theme: {
//     preset: Aura,
//   },
// });

app.use(router);
app.mount("#app");
