<template>
  <span>{{ toDisplay }}</span>
</template>

<script>
import Vue from "vue";

export default Vue.component('Timer', {

        props: {
            start: Number
        },

        data: {
            toDisplay: ""
        },

        method: {
            milisecondsToDhms(miliseconds) {
                const seconds = Number(miliseconds/1000);
                const d = Math.floor(seconds / (3600*24));
                const h = Math.floor(seconds % (3600*24) / 3600);
                const m = Math.floor(seconds % 3600 / 60);
                const s = Math.floor(seconds % 60);

                const dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
                const hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
                const mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
                const sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
                return dDisplay + hDisplay + mDisplay + sDisplay;
            },

            countDownTimer() {
                setTimeout(() => {
                        this.toDisplay = milisecondsToDhms(Date.now() - start);
                        this.countDownTimer()
                }, 1000)
            }
        },

        created() {
           this.countDownTimer()
        }
    })
</script>
