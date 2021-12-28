import Vue from 'vue';
import Vuex from 'vuex';

import VueCookies from 'vue-cookies';
import { Component } from 'vue-router/types/router';
import Default from '@/views/Default.vue';
import Login from './views/Login.vue';
import License from './views/License.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import store from './store';
import { LicenseController } from '@/api/controllers/license/LicenseController';
import { LicenseStatus } from '@/api/interface/license/License';
import CookieManager from './api/utils/CookieManager';

Vue.config.productionTip = false;
Vue.use(Vuex);
Vue.use(VueCookies);

console.log('Launching Atlas');

// Declare application
let el: Component;

/**
 * Launch the web application
 */
async function launch() {
  // Verify the license
  const license = await LicenseController.getLicense();
  const authenticated = CookieManager.isAuthenticated();

  if (license.status == LicenseStatus.NOT_VALID) {
    el = License;
    await router.replace('/license').catch(() => {
      /** Ignored */
    });
  } else if (!authenticated) {
    el = Login;
    await router.replace('/login').catch(() => {
      /** Ignored */
    });
  } else {
    el = Default;
  }

  new Vue({
    router,
    vuetify,
    store,
    render: (h) => h(el),
  }).$mount('#app');
}

launch();
