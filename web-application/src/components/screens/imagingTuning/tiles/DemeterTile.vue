<template>
  <v-card class="mt-10" width="100%">
    <v-card-title>
      <h3 class="text-h5">Demeter power actions</h3>
      <v-spacer></v-spacer>
      <v-btn class="mx-3" icon color="green" @click="refresh()">
        <v-icon>mdi-cached</v-icon>
      </v-btn>
    </v-card-title>
    <v-card-subtitle>
      Explore and undo levels created with demeter.
    </v-card-subtitle>
    <v-card-text>
      <v-container>
        <v-row v-if="loadingLevels">
          <p class="subtitle-1 mt-2 mr-4">Loading demeter levels</p>
          <v-progress-circular
            indeterminate
            color="persianGrey"
          ></v-progress-circular>
        </v-row>

        <v-row v-else>
          <v-container>
            <v-row v-if="levelList.length === 0">
              <i>No demeter levels were detected in the application</i></v-row
            >
            <v-row v-else>
              <i
                >Undo the demeter levels by clicking on the "close" icon for
                each chips</i
              ></v-row
            >
            <v-row class="my-2"
              ><v-chip-group active-class="primary--text" column>
                <v-chip v-for="(level, i) in levelList" :key="i">
                  <p class="mt-4 mr-3">{{ level.name }}</p>
                  <v-icon @click="openConfirmationModal(level.name)"
                    >mdi-close-circle</v-icon
                  >
                </v-chip>
              </v-chip-group></v-row
            >
            <v-row class="mt-5"> </v-row>
          </v-container>
        </v-row>

        <v-row class="my-4">
          <v-spacer></v-spacer>
          <v-btn
              color="persianGrey"
              dark
              @click="dialogAll = true"
          >
            Delete ALL Demeter Levels
          </v-btn>

        </v-row>

        <v-row v-if="errorMessage && !loadingLevels">
          <p class="red--text" v-if="errorMessage">{{ errorMessage }}</p>
        </v-row>
      </v-container>
    </v-card-text>


    <!--  Modal confirmation  -->
    <v-dialog v-model="dialog" width="500">
      <v-card>
        <v-card-title class="text-h5 white--text charcoal lighten-2">
          Confirmation
        </v-card-title>

        <v-card-text class="mt-4">
          You're about to undo level <b>{{ toDeleteLevel }}</b
          >. This action is not reversible.<br />
          Do you want to continue ?
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green"
            :loading="loadingDelete"
            text
            @click="cancelDelete"
          >
            Cancel
          </v-btn>
          <v-btn
            color="red"
            text
            :disabled="loadingDelete"
            @click="confirmDelete"
          >
            Undo level
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!--  Modal Delete All confirmation  -->
    <v-dialog v-model="dialogAll" width="500">
      <v-card>
        <v-card-title class="text-h5 white--text charcoal lighten-2">
          Confirmation
        </v-card-title>

        <v-card-text class="mt-4">
          You're about to undo level ALL the level in <i>{{ application }}.</i>
          <br />This action is not reversible.<br />
          Do you want to continue ?
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green"
            :loading="loadingDeleteAll"
            text
            @click="dialogAll = false"
          >
            Cancel
          </v-btn>
          <v-btn
            color="red"
            text
            :disabled="loadingDeleteAll"
            @click="confirmDeleteAll"
          >
            Undo All
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script>
import Vue from "vue";
import { LevelController } from "@/api/demeter/grouping/level.controller";

export default Vue.extend({
  name: "DemeterTile",

  computed: {
    getApplicationName() {
      return this.$store.state.applicationName;
    }
  },

  data: () => ({
    levelList: [],
    application: "",
    errorMessage: "",
    loadingLevels: false,

    // Modal
    dialog: false,
    toDeleteLevel: "",
    loadingDelete: false,

    // Modal All
    loadingDeleteAll: false,
    dialogAll: false
  }),

  mounted() {
    this.application = this.$store.state.applicationName;
    this.getDemeterLevel();
  },

  methods: {
    openConfirmationModal(levelName) {
      this.dialog = true;
      this.toDeleteLevel = levelName;
    },

    cancelDelete() {
      this.toDeleteLevel = "";
      this.dialog = false;
    },

    async confirmDelete() {
      try {
        if (this.toDeleteLevel === "") return;

        this.loadingDelete = true;
        await LevelController.undoGroupedLevel5(
          this.application,
          this.toDeleteLevel
        );

        this.toDeleteLevel = "";
        this.errorMessage = "";
      } catch (err) {
        console.error(
          `Failed to delete the level with name ${this.toDeleteLevel} in application ${this.application}`, err
        );
        this.errorMessage = `Failed to delete the level with name ${this.toDeleteLevel} in application ${this.application}. Error: ${err}`;
      } finally {
        this.loadingDelete = false;
        this.dialog = false;
        this.refresh();
      }
    },

    /**
     *  Delete all the levels in the demeter application
     */
    async confirmDeleteAll() {
      try {
        if (this.application === "") return;
        this.loadingDeleteAll = true;
        await LevelController.undoAllGroupedLevel5(this.application);
        this.errorMessage = "";
      } catch (err) {
        console.error(
          `Failed to delete all the levels in application ${this.application}.`
        );
        this.errorMessage = `Failed to delete all the levels in application ${this.application}. Error: ${err}.`;
      } finally {
        this.loadingDeleteAll = false;
        this.dialogAll = false;
        this.refresh();
      }
    },

    /**
     * Get level created by demeter
     * @return {Promise<void>}
     */
    async getDemeterLevel() {
      try {
        this.loadingLevels = true;
        this.levelList = await LevelController.getDemeterLevels(
          this.application
        );
        this.errorMessage = "";
      } catch (err) {
        this.errorMessage = `Failed to retrieve demeter levels ${err}.`;
      } finally {
        this.loadingLevels = false;
      }
    },

    refresh() {
      this.getDemeterLevel();
    }
  },

  watch: {
    getApplicationName(newApp) {
      this.application = newApp;
      this.refresh();
    }
  }
});
</script>

<style scoped></style>
