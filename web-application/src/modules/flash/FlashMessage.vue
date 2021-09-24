<template>
  <v-container class="bottom-right">
    <v-row class="w-100 d-flex flex-column align-end pa-8">
      <v-card
        loading
        v-for="(notification, i) in displayedNotification"
        :key="i"
        width="20vw"
        class="ma-1"
        :color="getFlashColor(notification.type)"
        dark
      >
        <template slot="progress">
          <v-progress-linear
            color="white"
            height="5"
            class="progress-card"
            :value="notification.length"
          ></v-progress-linear>
        </template>

        <v-card-title class="pa-2"
          >{{ notification.title }}
          <v-spacer></v-spacer>
          <v-btn @click="close(i)" text dark x-small>
            <v-icon>mdi-close-thick</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text class="">{{ notification.body }}</v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import flash, { Flash, FlashType } from "./Flash";
import { uuidv4 } from "../../utils/Uuidv4";

export default Vue.extend({
  name: "FlashMessage",

  computed: {
    count() {
      return flash.state.notifications.length;
    },
  },

  methods: {
    removeByUUID(uuid: string) {
      for (let i = 0; i < this.displayedNotification.length; i++) {
        if (this.displayedNotification[i].id == uuid) {
          // Notification has been found
          this.displayedNotification.splice(i, 1);
          break;
        }
      }
    },

    getFlashColor(type: FlashType): string {
      switch (type) {
        case FlashType.INFO:
          return "blue";
        case FlashType.SUCCESS:
          return "green";
        case FlashType.ERROR:
          return "red";
        case FlashType.NEUTRAL:
          return "black";
        default:
          return "black";
      }
    },

    close(position: number) {
      // remove the notification
      this.displayedNotification.splice(position, 1);
    },
  },

  data: () => ({
    displayedNotification: [
    ] as Flash[],
  }),

  watch: {
    count(newCount, oldCount) {
      // Pop new notification
      const notification: Flash = flash.getters.pop;

      // Initialize the notification
      notification.id = uuidv4();
      notification.length = 0;
      notification.createdOn = Date.now();

      if (!notification.duration) notification.duration = 5000;

      // Add timer to the notification
      // eslint-disable-next-line @typescript-eslint/no-this-alias
      let setIntervalRef: number;

      if (notification.createdOn && notification.duration)
        setIntervalRef = setInterval(() => {
          const start = notification.createdOn as number;
          const end = start + (notification.duration as number);

          notification.length = ((Date.now() - start) / (end - start)) * 100;

          if (notification.length >= 100) {
            // find a remove notification from the list
            this.removeByUUID(notification.id as string);

            // Clear interval
            clearInterval(setIntervalRef);
          }
        }, 500);

      this.displayedNotification.push(notification);
    },
  },
});
</script>

<style scoped>
.bottom-right {
  display: block;
  position: absolute;
  right: 0;
  bottom: 0;
}

.progress-card {
}
</style>