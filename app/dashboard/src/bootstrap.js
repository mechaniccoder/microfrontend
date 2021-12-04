import { createApp } from "vue";
import Dashboard from "./components/Dashboard.vue";

// Mount function to start up the app
const mount = (el) => {
  const app = createApp(Dashboard);
  app.mount(el);
};

// Running in isolation
if (process.env.NODE_ENV === "development") {
  const root = document.querySelector("#dev-dashboard-root");
  if (root) {
    mount(root);
  }
}

// Running through container
export { mount };
