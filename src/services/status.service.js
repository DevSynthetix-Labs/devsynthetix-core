export const statusService = {
  name: "core-status",
  state: "active",
  description: "Reports core system availability",
  response() {
    return {
      service: "devsynthetix-core",
      status: "operational"
    };
  }
};
