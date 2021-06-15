import Vue from "vue";
import Vuex from "vuex";

import Default from "@/views/Default.vue";
import Login from "./views/Login.vue";
import License from "./views/License.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import store from "./store";

import { Neo4JAccessLayer } from "./api/Neo4jAccessLayer";
import { Component } from "vue-router/types/router";
import { LicenseController } from "@/api/login/License.controller";
import { LicenseStatus } from "@/api/interface/license/License.interface";

Vue.config.productionTip = false;
Vue.use(Vuex);

console.log("Launching Atlas");

// Test Neo4J Connection
// If connected, render the app view, otherwise ask for a login
Neo4JAccessLayer.connect();
const neo4jAl: Neo4JAccessLayer = Neo4JAccessLayer.getInstance();

// Declare application
let el: Component;

// Get token from Server

neo4jAl
  .testConnection()
  .then(async () => {
    // Successful connection

    // Verify License
    // Verify the license
    const license = await LicenseController.getLicense();
    if (license.status == LicenseStatus.NOT_VALID) {
      el = License;
      router.replace("/license");
    } else {
      el = Default;
    }
  })
  .catch(err => {
    // Cannot connect to the Neo4j instance
    console.warn("Connection to Neo4j failed.", err);
    router.replace("/login");
    el = Login;
  })
  .finally(() => {
    new Vue({
      router: router,
      vuetify,
      store,
      render: h => h(el)
    }).$mount("#app");
  });
