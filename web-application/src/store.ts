import Vue, {Component} from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        applicationName: "" as string,
        currentView: {} as Component,
        daemonLevelState: true as boolean,
        daemonModuleState: true as boolean
    }
});
