import {Component} from "vue";
import {Store} from "vuex";

declare module "@vue/runtime-core" {
    // declare your own store states
    interface State {
        applicationName: string;
        currentView: Component;
    }

    // provide typings for `this.$store`
    interface ComponentCustomProperties {
        $store: Store<State>;
    }
}
