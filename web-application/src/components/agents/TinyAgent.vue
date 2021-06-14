<template>
  <v-card :color="color" width="330">
    <!--     Level Agent        -->
    <v-card-text class="d-flex flex-row justify-space-between">
      <div class="d-flex flex-column white--text">
        <h3 class="text-h5  mt-1">{{ getName }} Agent</h3>
        <p v-if="daemonLevelState">Is running</p>
        <p v-else>Is stopped</p>
      </div>
      <div class="white--text mt-3" style="height: 100%">
        <v-btn
          class="mx-4 my-auto"
          fab
          dark
          small
          :color="!daemonLevelState ? '#7DCEA0' : '#D32F2F'"
          :loading="loadingToggle"
          @click="toggleDaemon"
        >
          <v-icon v-if="!daemonLevelState" class="text--white">
            mdi-play
          </v-icon>
          <v-icon v-else class="text--white">
            mdi-stop
          </v-icon>
        </v-btn>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
import { Vue } from "vue-property-decorator";
import AgentController from "../../api/agents/agent.controller";

export default Vue.extend({
  name: "TinyAgent",

  /**
   * Accepted values for the prop 'type' : { level, module, architecture, framework }
   */
  props: {
    type: String,
    color: String
  },

  computed: {
    getName() {
      if (this.type == null) return "Undefined";
      return this.type.charAt(0).toUpperCase() + this.type.slice(1);
    }
  },

  data: () => ({
    daemonLevelState: false,
    loadingToggle: false
  }),

  mounted() {
    this.getStatus();
  },

  methods: {
    /**
     *  Get the prefix ( prefix you need to put in front of a tag in Imaging to trigger the agent
     */
    async getPrefix() {
      try {
        this.prefix = await AgentController.getPrefix(this.type);
      } catch (err) {
        console.error(
          "Failed to retrieve the prefix of the Framework agent",
          err
        );
        this.prefix = "<Failed to retrieve the tag>";
      }
    },

    /**
     * Get the status of a daemon and store it
     * @return {Promise<void>}
     */
    async getStatus() {
      try {
        this.daemonLevelState = await AgentController.getStatus(this.type);
      } catch (err) {
        console.error("Failed to retrieve the status of the level agent", err);
      }
    },

    /**
     * Toggle the status of one daemon
     */
    async toggleDaemon() {
      this.loadingToggle = true;
      try {
        // These two methods returns true if the operation is successful false otherwise
        const res = this.daemonLevelState
          ? await AgentController.stopAgent(this.type)
          : await AgentController.startAgent(this.type);
        if (res) this.daemonLevelState = !this.daemonLevelState;
      } catch (err) {
        console.error(
          `Failed to change the status of the agent ${this.type}.`,
          err
        );
      } finally {
        this.loadingToggle = false;
      }
    }
  }
});
</script>

<style scoped></style>
