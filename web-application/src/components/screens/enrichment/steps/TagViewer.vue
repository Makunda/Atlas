<template>
  <v-card class="pa-2">
    <v-row class="my-6 d-flex flex-column">
      <h3 class="text-h4 ml-8">Discover and apply tags on {{ application }}</h3>
      <p class="ml-8 py-6 pr-10 text-body-1">
        The discovery section is here to help you putting tags on interst points
        in your application. It matches some predefined patterns, to give you
        quick ideas of what can be done in the application.<br />
        You can enrich this configuration manually, and create custom generics
        tags in the <i>Tag creator studio</i>.
        <br />
        For more informations on tags and documents, please refer to the
        official <a href="#">CAST Imaging documentation</a>. <br /><br />
        To excecute a tag, you can navigate to the "use case tree" on the left
        column, expand the different use cases, and select the items you wan to
        execute. The selected items, that will be exeucted, appear on the right
        panel. <br />
        If you want more information about a recommendation, you can click on
        it, to display more details and see the description associated with the
        tag.<br /><br />
        NB: A recommendation displayed in blue means this recommendation will
        have a good effect on the application you currently selected.
      </p>
    </v-row>

    <v-card class="mx-4" min-width="90%" fluid>
      <v-toolbar color="charcoal" dark flat>
        <v-toolbar-title>Applicable tags</v-toolbar-title>
      </v-toolbar>

      <v-sheet class="pa-4 persianGrey">
        <v-text-field
          v-model="search"
          label="Search for Recommendations"
          dark
          flat
          solo-inverted
          hide-details
          clearable
          clear-icon="mdi-close-circle-outline"
        ></v-text-field>
      </v-sheet>

      <v-row no-gutters>
        <v-col max-width="400px">
          <v-card-text
            class="d-flex justify-center"
            v-if="!items || items.length == 0"
          >
            <v-progress-circular
              class="mx-auto my-8"
              :size="50"
              color="primary"
              indeterminate
            ></v-progress-circular>
          </v-card-text>
          <v-card-text
            class="d-flex justify-center"
            v-if="!application || application.length == 0"
          >
            <v-btn color="info" @click="refreshtree()">Load tags</v-btn>
          </v-card-text>

          <v-card-text v-if="items && items.length != 0">
            <v-treeview
              v-model="tree"
              :items="items"
              :search="search"
              selected-color="indigo"
              open-on-click
              selectable
              return-object
              expand-icon="mdi-chevron-down"
              on-icon="mdi-bookmark"
              off-icon="mdi-bookmark-outline"
              indeterminate-icon="mdi-bookmark-minus"
            >
              <template slot="label" slot-scope="{ item }">
                <div v-if="item.isUseCase">
                  <p class="pt-4">{{ item.title }}</p>
                  <span v-if="item.groups" class="red--green">
                    <i>- {{ item.groups.length }} tags</i>
                  </span>
                </div>
                <div v-else @click="focusGroup(item)">
                  <p class="pt-4">Tag : {{ item.name }}</p>
                </div>
              </template>
            </v-treeview>
          </v-card-text>
        </v-col>

        <v-divider vertical></v-divider>

        <v-col>
          <h6 v-if="focusedGroup == null" class="text-subtitle-1">
            No tag selected
          </h6>

          <v-scroll-x-transition hide-on-leave>
            <v-card-text>
              <div v-if="focusedGroup != null">
                <h5 class="text-h5 mb-5">Focused tag</h5>
                <strong class="text-subtitle-1 text-decoration-underline"
                  >Name:</strong
                >
                <h6 class="text-body-1 mb-3">{{ focusedGroup.name }}</h6>
                <strong class="text-subtitle-1 text-decoration-underline">
                  Description:
                </strong>
                <h6 class="text-body-1 mb-3">{{ focusedGroup.description }}</h6>
                <strong class="text-subtitle-1 text-decoration-underline">
                  Number of objects concerned:
                </strong>
                <h6 class="text-body-1 mb-3">{{ focusedGroup.numMatch }}</h6>
                <strong class="text-subtitle-1 text-decoration-underline">
                  Categories:
                </strong>
                <v-row>
                  <v-chip
                    v-for="b in focusedGroup.categories"
                    v-bind:key="b"
                    class="ma-2"
                    color="primary"
                    >{{ b }}</v-chip
                  >
                </v-row>
              </div>
            </v-card-text>
          </v-scroll-x-transition>
        </v-col>

        <v-divider vertical></v-divider>

        <v-col>
          <v-card-text>
            <div
              v-if="tree.length === 0"
              key="title"
              class="title font-weight-light grey--text pa-4 text-center"
            >
              Select the tags you want to apply
            </div>

            <v-scroll-x-transition group hide-on-leave>
              <v-chip
                v-for="(selection, i) in tree"
                :key="i"
                color="grey"
                dark
                small
                class="ma-1"
              >
                <v-icon left small>
                  mdi-label
                </v-icon>
                {{ selection.name || "Cat. " + selection.title }}
              </v-chip>
            </v-scroll-x-transition>
          </v-card-text>
        </v-col>
      </v-row>

      <v-divider></v-divider>

      <v-card-actions>
        <v-btn text @click="tree = []">
          Reset
        </v-btn>

        <v-spacer></v-spacer>
        <i class="px-4" v-if="onGoingQueries.length > 0">
          Executing {{ onGoingQueries.length }}
          {{ onGoingQueries.length == 1 ? "query" : "queries" }}</i
        >
        <v-btn
          class="white--text"
          color="green darken-1"
          :loading="loadingQueries"
          depressed
          @click="executeSelectedTags()"
        >
          Execute {{ getToExecuteSize() }} tags
          <v-icon right>
            mdi-animation-play
          </v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>

    <!-- Export / Import -->
    <v-row class="mt-5 mx-4">
      <v-container>
        <v-row class="my-5"
          ><h4 class="text-h5">Export / Import options</h4></v-row
        >
        <v-row class="my-5"><h4>Export a zip file containing tags.</h4></v-row>
        <v-row class="my-5">
          <v-btn
            large
            color="persianGrey"
            class="ml-7"
            dark
            @click="generateZip"
          >
            Generate the export
          </v-btn>
        </v-row>
        <v-row class="my-5"><h4>Import a zip file containing tags.</h4></v-row>
        <v-row class="my-5">
          <v-file-input
            v-model="files"
            color="persianGrey"
            counter
            multiple
            placeholder="Select the Zip containing Paris extensions data"
            prepend-icon="mdi-paperclip"
            outlined
            :show-size="1000"
          >
            <template v-slot:selection="{ index, text }">
              <v-chip
                v-if="index < 2"
                color="deep-purple accent-4"
                dark
                label
                small
              >
                {{ text }}
              </v-chip>

              <span
                v-else-if="index === 2"
                class="overline grey--text text--darken-3 mx-2"
              >
                +{{ files.length - 2 }} File(s)
              </span>
            </template>
          </v-file-input>
        </v-row>
      </v-container>
    </v-row>
    <v-row> </v-row>
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
import Vue from "vue";
import { ApplicationRecord } from "@/api/applications/application.controller";
import { UseCaseController } from "@/api/paris/UseCase.controller";
import { TagController, TagResult } from "@/api/demeter/tag.controller";
import { IUseCase } from "@/api/interface/paris/useCase.interface";
import { IGroup } from "@/api/interface/paris/group.interface";
import { GroupController } from "@/api/paris/Group.controller";
import DragAndDropTile from "@/components/tiles/DragAndDropTile.vue";
import { ExportController } from "@/api/paris/Export.controller";

export default Vue.extend({
  name: "TagViewer",

  components: {},

  computed: {
    getApplicationName() {
      return this.$store.state.applicationName;
    }
  },

  data: () => ({
    application: "" as string,

    // Snack bar
    snackbarInfo: false,
    textSnackBar: "",

    tree: [] as (IUseCase | IGroup)[],
    items: [],
    singleSelect: false,
    selected: [],
    onGoingQueries: [] as number[],

    applicationName: "No application selected" as string,
    numberOfApplication: 0 as number,
    applicationList: [] as ApplicationRecord[],
    tagResultList: [] as TagResult[],
    errorState: null as unknown,
    search: "",
    focusedGroup: null as IGroup | null,

    // Loadings
    loadingApplication: true as boolean,
    loading: true as boolean,
    loadingQueries: false as boolean
  }),

  mounted() {
    this.application = this.$store.state.applicationName;
    if (this.application && this.application.length != 0) {
      this.getRootUseCase();
    }
  },

  methods: {
    async getChildren(item): Promise<IUseCase> {
      item.children = await UseCaseController.getAttachedUseCase(item.id);

      for (const i in item.children) {
        item.children[i] = await this.getChildren(item.children[i]);
      }

      const groups = await UseCaseController.getAttachedGroups(item.id);
      item.children.push(...groups);
      item.isUseCase = true;
      return item;
    },

    focusGroup(item: IGroup) {
      this.focusedGroup = item;
    },

    generateZip() {
      window.open(ExportController.getDownloadUrl());
    },

    getRootUseCase() {
      UseCaseController.getRootUseCase()
        .then(async (res: IUseCase[]) => {
          if (res) {
            this.items = [];
            for (const i in res) {
              this.items.push(await this.getChildren(res[i]));
            }
          }
          console.log("Tree", this.items);
        })
        .catch(err => {
          console.error("Failed to retrieve the root use cases", err);
        });
    },

    getTagResults() {
      this.loading = true;
      TagController.getTagResults("Configuration_1", this.application)
        .then((res: TagResult[]) => {
          this.tagResultList = res.sort(this.sortByNumMAtch);

          this.loading = false;
          console.log(res);
          console.log(
            `${res.length} tags were loaded for application ${this.application}`
          );
        })
        .catch(err => {
          console.error("An error occurred while retrieving tags.", err);
        });
    },

    refreshtree() {
      this.getRootUseCase();
    },

    checkOnGoing(idTag: number) {
      return this.onGoingQueries.indexOf(idTag) != -1;
    },

    async executeSelectedTags() {
      this.loadingQueries = true;

      // Get selection, and filter tags
      const toExecute: IGroup[] = this.tree.filter(x => {
        return x && (x as IGroup) !== undefined && !x.isUseCase;
      }) as IGroup[];

      console.log("ToExecute", toExecute);
      console.log(
        `About to execute ${toExecute.length} tags on the application.`
      );

      const groupsID = this.tree.map(x => x.id);

      GroupController.executeListGroupAsTag(this.application, groupsID)
        .then((res: number) => {
          this.snackbarInfo = true;
          this.textSnackBar = `${res} objects were tags during the process.`;
        })
        .catch(err => {
          this.snackbarInfo = true;
          this.textSnackBar = `Failed to flags objects. Error :${err}`;
        })
        .finally(() => {
          this.loadingQueries = false;
        });
    },

    getToExecuteSize() {
      const toExecute: IGroup[] = this.tree.filter(x => {
        return x && (x as IGroup) !== undefined && !x.isUseCase;
      }) as IGroup[];
      return toExecute.length;
    },

    convertBadgeToHTML(badgeValue: string): string {
      let categorieBadges = "";
      badgeValue.split(":").forEach(x => {
        categorieBadges += `<v-chip class="ma-2" color="primary">${x}</v-chip>`;
      });
      return categorieBadges;
    },

    sortByNumMAtch(a: TagResult, b: TagResult) {
      return b.numMatch - a.numMatch;
    }
  },

  watch: {
    getApplicationName(newApp) {
      this.application = newApp;
      if (this.application && this.application.length != 0) {
        this.getTreeview();
      }
    }
  }
});
</script>
