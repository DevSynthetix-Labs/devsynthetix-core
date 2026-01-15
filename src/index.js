import { registerServices } from "./core/serviceRegistry.js";
import { environment } from "./config/environment.js";

export const system = {
  env: environment.name,
  bootTime: Date.now(),
  services: registerServices()
};
