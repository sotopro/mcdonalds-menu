import { url } from "../../constants/index";
import api from "../api";

export default {
  getData: async () => {
    try {
      let response = await api.get(url.API);
      return response;
    } catch (error) {
      return error;
    }
  },
};
