import Vue from "vue";
import Vuex from "vuex";
import VuexPersist from "vuex-persist";
import createLogger from "vuex/dist/logger";

// LINK vuex modules
import module from "./modules/module";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

const vuexLocalStorage = new VuexPersist({
  key: "STORAGE_KEY",
  storage: window.localStorage,
  reducer: (state) => ({
    module: state.module,
  }),
});

export default new Vuex.Store({
  modules: {
    module,
  },
  strict: debug,
  plugins: debug ? [createLogger(), vuexLocalStorage.plugin] : [],
});
