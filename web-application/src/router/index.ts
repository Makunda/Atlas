import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Application from "../views/Application.vue";
import Login from "../views/Login.vue";
import License from "@/views/License.vue";
import Home from "@/views/Home.vue";
import ServerHome from "@/views/ServerHome.vue";
import Reporting from "@/components/screens/reports/Reporting.vue";
import AnalysisChecker from "@/components/screens/recommendation/AnalysisChecker.vue";
import Enrichment from "@/components/screens/enrichment/Enrichment.vue";
import Frameworks from "@/components/screens/frameworks/Frameworks.vue";
import Highlight from "@/components/screens/highlight/Highlight.vue";
import ImagingTuning from "@/components/screens/imagingTuning/ImagingTuning.vue";
import Automation from "@/components/screens/automation/Automation.vue";
import Administration from "@/components/screens/administration/Administration.vue";
import AipAdministration from "@/components/screens/aip/administration/AipAdministration.vue";
import AipInjection from "@/components/screens/aip/injection/AipInjection.vue";
import CloudRecommendations from "@/components/screens/cloud/recommendations/CloudRecommendations.vue";
import Server from "@/views/Server.vue";
import NotFound from "@/views/NotFound.vue";

Vue.use(VueRouter);

Vue.component("Login", Login);
Vue.component("License", License);
Vue.component("Application", Application);
Vue.component("Home", Home);
Vue.component("ServerHome", ServerHome);
Vue.component("Server", Server);
Vue.component("CloudRecommendations", CloudRecommendations);

const routes: Array<RouteConfig> = [
  {
    path: "",
    redirect: "/atlas/"
  },
  {
    path: "/atlas",
    name: "Main",
    component: Application,
    children: [
      {
        path: "",
        component: Home
      },
      {
        path: "reports",
        component: Reporting
      },
      {
        path: "analysis",
        component: AnalysisChecker
      },
      {
        path: "tags",
        component: Enrichment
      },
      {
        path: "tuning",
        component: ImagingTuning
      },
      {
        path: "highlight",
        component: Highlight
      },
      {
        path: "aip",
        component: AipInjection
      },
      {
        path: "cloudreco",
        component: CloudRecommendations
      }
    ]
  },
  {
    path: "/administration",
    name: "Administration",
    component: Server,
    children: [
      {
        path: "",
        component: ServerHome
      },
      {
        path: "automation",
        component: Automation
      },
      {
        path: "frameworks",
        component: Frameworks
      },
      {
        path: "aipAdministration",
        component: AipAdministration
      },
      {
        path: "parameters",
        component: Administration
      }
    ]
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/license",
    name: "License",
    component: License
  },
  {
    path: "/atlas/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  { path: "/api" }, // Ignore or pass on to server
  {
    path: "*",
    name: "404",
    component: NotFound
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
