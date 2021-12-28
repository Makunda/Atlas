<template>
  <v-card width="100%">
    <v-card-title class="display-1 text--primary">
      Actions on the application
      <v-spacer></v-spacer>

      <v-btn icon color="green" @click="refresh" x-large class="pb-5">
        <v-icon>mdi-cached</v-icon>
      </v-btn>
    </v-card-title>
    <v-card-text>
      <v-icon color="red" large class="mr-3">mdi-information-outline</v-icon
      ><i class="text-h5 mt-3">Make sure the Level Agent is up and running.</i
      ><br />
      <a class="text-subtitle-1 ml-10" href="/administration/automation"
        >Go to Agent Section</a
      >
    </v-card-text>
    <v-card-text>
      <v-container fluid>
        <v-row>
          <v-card
            class="ma-2"
            v-for="action in actionList"
            :key="action.id"
            :color="action.color"
            width="330"
          >
            <!--     Action Card       -->
            <v-card-subtitle>
              <p style="color: #ededed">{{ action.categories }}</p>
            </v-card-subtitle>
            <v-card-text class="d-flex flex-row justify-space-between">
              <div class="d-flex flex-column white--text">
                <h3 claslevels5s="text-h5">{{ action.title }}</h3>
                <p>{{ action.description }}</p>
              </div>
              <div class="white--text mt-3" style="height: 100%">
                <v-btn
                  class="mx-4 my-auto"
                  fab
                  dark
                  small
                  :loading="getLoading(action.id)"
                  @click="executeAction(action)"
                >
                  <v-icon class="text--white">
                    mdi-send
                  </v-icon>
                </v-btn>
              </div>
            </v-card-text>
          </v-card>
        </v-row>
      </v-container>
    </v-card-text>

    <!-- Snack Bar information -->
    <v-snackbar v-model="snackbarInfo" :timeout="5000">
      {{ textSnackBar }}

      <template v-slot:action="{ attrs }">
        <v-btn color="blue" text v-bind="attrs" @click="snackbarInfo = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';
import { ActionController } from '@/api/controllers/actions/ActionsController';
import ActionInterface from '@/api/interface/actions/Action.interface.fs';

export default Vue.extend({
  name: 'ActionsTile',

  computed: {
    getApplicationName() {
      return this.$store.state.applicationName;
    },
  },

  mounted() {
    this.application = this.$store.state.applicationName;
    this.refresh();
  },

  data: () => ({
    // Loadings
    loadActions: false,
    actionList: [] as ActionInterface[],
    application: '',

    // Snackbar
    snackbarInfo: false,
    textSnackBar: '',

    loadingActions: new Map(),
  }),

  methods: {
    async getActions() {
      this.loadActions = true;
      try {
        this.actionList = await ActionController.getActionList();
      } catch (err) {
        console.error('Failed to retrieve the list of actions.', err);
      } finally {
        this.loadActions = false;
      }
    },

    async executeAction(action: ActionInterface) {
      if (this.application == '') return;

      if (this.loadingActions.has(action.id)) return;
      this.loadingActions.set(action.id, true);

      try {
        await ActionController.executeAction(action.id, this.application);
        this.textSnackBar = `${action.title}: Done.`;
        this.snackbarInfo = true;
      } catch (err) {
        console.error('Failed to execute the action.', err);
        this.textSnackBar = `Failed to execute action. ${err}`;
        this.snackbarInfo = true;
      } finally {
        this.loadingActions.delete(action.id);
      }
    },

    getLoading(actionId: number): boolean {
      return this.loadingActions.has(actionId);
    },

    refresh() {
      this.getActions();
    },
  },

  watch: {
    getApplicationName(newApp) {
      this.application = newApp;
    },
  },
});
</script>
