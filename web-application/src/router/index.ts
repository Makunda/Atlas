import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Application from "../views/Application.vue";
import Login from "../views/Login.vue";
import License from "@/views/License.vue";
import Home from "@/views/Home.vue";
import ApplicationSelection from "@/views/ApplicationSelection.vue";
import ServerHome from "@/views/ServerHome.vue";
import Reporting from "@/components/screens/reports/Reporting.vue";
import AnalysisChecker from "@/components/screens/recommendation/AnalysisChecker.vue";
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
import store from "@/store";
import LevelExplorer from "@/components/imaging/levels/LevelExplorer.vue";
import ModuleExplorer from "@/components/imaging/modules/ModulesExplorer.vue";
import ArchitectureExplorer from "@/components/imaging/architectures/ArchitectureExplorer.vue";
import TransactionExplorer from "@/components/imaging/TransactionExplorer.vue";
import DataCallGraphExplorer from "@/components/imaging/DataCallGraphExplorer.vue";
import Backup from "@/components/imaging/backup/Backup.vue";
import TransactionStudio from "@/components/imaging/transaction/TransactionStudio.vue";
import TransactionCommunities from "@/components/screens/communities/TransactionCommunities.vue";

Vue.use(VueRouter);

Vue.component("Login", Login);
Vue.component("ApplicationSelection", ApplicationSelection);
Vue.component("License", License);
Vue.component("Application", Application);
Vue.component("Home", Home);
Vue.component("ServerHome", ServerHome);
Vue.component("Server", Server);
Vue.component("CloudRecommendations", CloudRecommendations);

/** Middleware definition */
const authMiddleware = (to, from, next) => {
  if (!store.state.isAuthenticated) next({ name: "Login" });
  else next();
};

const routes: Array<RouteConfig> = [
  { path: "/api" }, // Ignore or pass on to server
  {
    path: "",
    redirect: "/atlas/"
  },
  {
    path: "/atlas",
    name: "Main",
    beforeEnter: authMiddleware,
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
        path: "tuning",
        component: ImagingTuning,
        children: [
          {
            path: "level",
            component: LevelExplorer
          },
          {
            path: "module",
            component: ModuleExplorer
          },
          {
            path: "architecture",
            component: ArchitectureExplorer
          },
          {
            path: "transaction",
            component: TransactionExplorer
          },
          {
            path: "transaction/byId/:id",
            component: TransactionStudio
          },
          {
            path: "dataCallGraph",
            component: DataCallGraphExplorer
          },
          {
            path: "backup",
            component: Backup
          }
        ]
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
      },
      {
        path: "communities",
        component: TransactionCommunities
      }
    ]
  },
  {
    path: "/administration",
    name: "Administration",
    beforeEnter: authMiddleware,
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
    path: "/applications",
    name: "ApplicationSelection",
    component: ApplicationSelection
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
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "*",
    name: "404",
    component: NotFound
  }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

export default router;
