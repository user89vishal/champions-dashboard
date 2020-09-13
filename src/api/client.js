import { create } from "apisauce";

const apiClient = create({
  baseURL: "https://api.pandascore.co",
});

export default apiClient;
