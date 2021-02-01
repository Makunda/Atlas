<template>
  <v-card min-height="100%">
    <v-card-title> Framework Agent</v-card-title>
    <v-card-text class="mb-6">
      Automatically extracts the nodes marked by the tag $f_ and creates frameworks nodes. <br /><br />
      For more information please visit the wiki of the extension :
      <a href="https://github.com/CAST-Extend/com.castsoftware.uc.artemis/wiki"
        >Artemis Wiki</a
      >
    </v-card-text>
    <v-card-actions class="card-actions">
      <v-btn
        class="mx-2"
        tile
        color="persianGrey"
        dark
        v-on:click="forceAction(application)"
      >
        <v-icon left>
          mdi-adjust
        </v-icon>
        Extract frameworks
      </v-btn>
      <v-btn
        tile
        :loading="loadingToggle"
        class="ml-2 mr-8 white--text"
        :color="daemonLevelState ? '#2a9d8f' : '#f4a261'"
        v-on:click="toggleDaemon()"
      >
        <v-icon left>
          mdi-image-auto-adjust
        </v-icon>
        Assistant {{ daemonLevelState ? "active" : "stopped" }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import AgentController from "@/api/agents/agent.controller";

export default Vue.extend({
  name: "FrameworkAgent",

  data: () => ({
    nameAgent: "framework",
    daemonLevelState: false,

    loadingToggle: false,
  }),

  methods: {
    getStatus() {
      AgentController.getStatus(this.nameAgent)
        .then((res: boolean) => {
          console.log("Status of the Framework agent", res);
          this.daemonLevelState = res;
        })
        .catch((err) => {
          console.error(
            "Failed to retrieve the status of the Framework agent",
            err
          );
        });
    },

    toggleDaemon() {
      this.loadingToggle = true;
      if (this.daemonLevelState) {
        AgentController.stopAgent(this.nameAgent)
          .then((res: boolean) => {
            this.daemonLevelState = !res;
          })
          .catch((err) => {
            console.error("Failed to stop the Framework agent", err);
          })
          .finally(() => {
            this.loadingToggle = false;
          });
      } else {
        AgentController.startAgent(this.nameAgent)
          .then((res: boolean) => {
            this.daemonLevelState = res;
          })
          .catch((err) => {
            console.error("Failed to start the Framework agent", err);
          })
          .finally(() => {
            this.loadingToggle = false;
          });
      }
    },

    forceAction() {
      console.log("Extract");
    },
  },

  mounted() {
    this.getStatus();
  },
});
</script>

<style>
.card-outter {
  position: relative;
  padding-bottom: 50px;
}
.card-actions {
  position: absolute;
  bottom: 0;
}
</style>
