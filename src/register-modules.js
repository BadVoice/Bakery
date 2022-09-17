import router from "./router";
import stores from "@/stores/counter";

const registerModule = (name, module) => {
  if (module.stores) {
    stores.registerModule(name, module.stores);
  }

  if (module.router) {
    module.router(router);
  }
};

export const registerModules = modules => {
  Object.keys(modules).forEach(moduleKey => {
    const module = modules[moduleKey];
    registerModule(moduleKey, module);
  });
};