import Vue from "vue";
import Vuex from "vuex";

import Default from "@/views/Default.vue";
import Login from "./views/Login.vue";
import License from "./views/License.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import store from "./store";

import { Component } from "vue-router/types/router";
import { LicenseController } from "@/api/login/License.controller";
import { LicenseStatus } from "@/api/interface/license/License.interface";

Vue.config.productionTip = false;
Vue.use(Vuex);

console.log("Launching Atlas");

// Declare application
let el: Component;

/**
 * Launch the web application
 */
async function launch() {
  // Verify the license
  const license = await LicenseController.getLicense();
  if (license.status == LicenseStatus.NOT_VALID) {
    el = License;
    router.replace("/license");
  } else {
    el = Default;
  }

  new Vue({
    router: router,
    vuetify,
    store,
    render: (h) => h(el),
  }).$mount("#app");
}

launch();