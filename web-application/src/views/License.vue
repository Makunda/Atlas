<!-- Login modal -->
<template>
  <v-app class="main-application">
    <v-container class="login-container mx-auto" fill-height>
      <v-card ref="form" class="mx-auto" min-width="500px">
        <v-card-title
          class="mt-3 mb-8 d-flex flex-column justify-center text-center"
        >
          <h2>
            <v-icon large class="pr-2">mdi-file-key-outline</v-icon>Enter a
            license
          </h2>
          <p class="subtitle-2">Ping HJO in case you don't have a license</p>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <p>
                <i
                  >Enter a license of the type ATLAS_LICENSE$1234567:SIGNATURE
                </i>
              </p>
            </v-row>
            <v-row>
              <v-textarea
                outlined
                name="input-7-4"
                label="License"
                v-model="license"
              ></v-textarea>
            </v-row>
            <v-row v-if="errorMessage" class="red--text">
              {{ errorMessage }}
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="save" :loading="loadingLicense">
            Apply new license
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
  </v-app>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";

import { LicenseController } from "@/api/login/License.controller";
import {
  LicenseInterface,
  LicenseStatus
} from "@/api/interface/license/License.interface";

export default Vue.extend({
  name: "License",

  data: () => ({
    license: "" as string,

    loadingLicense: false,
    errorMessage: ""
  }),

  methods: {
    async save() {
      try {
        this.loadingLicense = true;
        const results: LicenseInterface = await LicenseController.applyLicense(
          this.license
        );
        if (results.status == LicenseStatus.NOT_VALID) {
          this.errorMessage = "The license entered is not valid.";
        } else {
          // Redirection
          await this.$router.replace("/atlas/");
          window.location.reload();
        }
      } catch (err) {
        this.errorMessage = err;
      } finally {
        this.loadingLicense = false;
      }
    }
  }
});
</script>

<style>
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
