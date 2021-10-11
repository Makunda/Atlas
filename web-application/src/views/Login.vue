<!-- Login modal -->
<template>
  <v-app class="main-application">
    <v-card class="mx-auto d-flex justify-content-between" id="colored-tile">
      <!-- Bakcground Image  -->
      <img
        :src="`${publicPath}assets/svg/atlasBlack2.svg`"
        alt="Atlas logo"
        id="background-logo"
      />

      <v-card-text fill-height height="100%" class="grow">
        <v-container style="height: 100%">
          <v-row fill-height style="height: 100%">
            <!-- Image column -->
            <v-col cols="12" md="5"></v-col>

            <!-- Title column -->
            <v-col cols="12" md="7" id="form" style="height: 100%">
              <v-container style="height: 100%">
                <!-- Title & version -->
                <v-row class="pt-12 d-flex flex-column">
                  <h2 class="white--text text-h1">NASD Atlas</h2>
                  <i class="white--text text-h5 pl-2">Version 2.6.0</i>
                </v-row>

                <!-- Login -->
                <v-row class="pt-12 d-flex flex-column white--text">
                  <v-text-field
                    dark
                    class="limited-size-input mt-10"
                    color="white"
                    ref="neo4jUser"
                    v-model="username"
                    label="Username"
                    placeholder="User"
                    :error-messages="loginError"
                    required
                  ></v-text-field>
                  <v-text-field
                    dark
                    class="limited-size-input mt-3"
                    v-model="password"
                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="show1 ? 'text' : 'password'"
                    label="Password"
                    name="input-10-1"
                    :error-messages="loginError"
                    required
                    @click:append="show1 = !show1"
                  ></v-text-field>
                  <p>Database bolt URI : {{ uri }}</p>

                  <div
                    v-show="failedLogin"
                    class="red darken-2 text-center pa-2"
                    width="100%"
                  >
                    <span class="white--text"
                      >Wrong credentials / URI. Contact your CAST Imaging
                      administrator for more information.</span
                    >
                  </div>

                  <v-btn
                    class="mt-12"
                    color="white"
                    style="max-width: 100px"
                    @click="save"
                  >
                    Log In
                  </v-btn>
                </v-row>
              </v-container>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <!-- Mentions -->
      <div class="white--text pr-4 mentions">
        <v-spacer></v-spacer>
        <p>Powered by the North America Solutions Design Team - 2021</p>
      </div>
    </v-card>
  </v-app>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";
import { Configuration } from "@/Configuration";
import { UtilsController } from "@/api/controllers/utils/UtilsController";
import LoginController from "@/api/controllers/login/LoginController";

export default Vue.extend({
  name: "Login",

  data: () => ({
    // Path for the Images
    publicPath: process.env.BASE_URL,
    failedLogin: false,
    showLogin: true,
    show1: false,
    uri: Configuration.getProperties().neo4jUri,
    username: "",
    password: "",
    loginError: [] as string[],

    onlineDatabase: true,
    healthcheckGoingon: false,

    switchInternalUse: false
  }),

  mounted() {
    this.simpleHealthCheck();
  },

  methods: {
    // Check, save and redirect to the Main dashboard
    async save() {
      // Save new URI
      const properties = Configuration.getProperties();
      properties.neo4jUri = this.uri;
      Configuration.saveProperties(properties);

      const res: boolean = await LoginController.postLogin(
        this.username,
        this.password
      );
      if (res) {
        this.$router.replace("/atlas/");
        window.location.reload();
      } else {
        // Ignore & unvalidate the login form
        this.loginError = ["Wrong Username/Password"];
      }
    },

    async simpleHealthCheck() {
      try {
        if (this.healthcheckGoingon) return;
        this.healthcheckGoingon = true;
        this.onlineDatabase = await UtilsController.healthCheck();
        this.healthcheckGoingon = false;
      } catch (err) {
        this.onlineDatabase = false;
        setTimeout(this.simpleHealthCheck, 3000);
      }
    }
  }
});
</script>

<style>
.main-application {
  background-color: #e2e2e2 !important;
  position: relative;
}

.limited-size-input {
  max-width: 450px !important;
}

.mentions {
  position: absolute;
  bottom: 2px;
  right: 0;
}

#colored-tile {
  top: 10%;
  left: 10%;
  right: 10%;
  bottom: 10%;

  min-height: 640px;

  margin: auto;
  position: absolute;
  background: rgb(0, 36, 47);
  background: -moz-linear-gradient(
    28deg,
    rgba(0, 36, 47, 1) 0%,
    rgba(15, 79, 99, 1) 100%
  );
  background: -webkit-linear-gradient(
    28deg,
    rgba(0, 36, 47, 1) 0%,
    rgba(15, 79, 99, 1) 100%
  );
  background: linear-gradient(
    28deg,
    rgba(0, 36, 47, 1) 0%,
    rgba(15, 79, 99, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#00242f",endColorstr="#0f4f63",GradientType=1);
}

#form {
  z-index: 10;
}

#background-logo {
  z-index: 1;
  background-size: contain;
  position: absolute;
  margin-top: auto;
  margin-right: auto;
  color: white;
  left: 5%;
  top: 10%;
  opacity: 0.2;
  height: 80%;
  fill: #0e4b5f;
}

.login-container {
  display: block;
  width: 100%;

  /* Positionning */
  position: absolute;
  top: 0;
  left: 0;

  background-color: rgba(0, 0, 0, 0.103);
  min-width: 100vw;
  min-height: 100vh;
}
</style>
