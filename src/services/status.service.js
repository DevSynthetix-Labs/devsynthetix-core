import { statusService } from "../services/status.service.js";

export function registerServices() {
  return {
    status: statusService
  };
}
