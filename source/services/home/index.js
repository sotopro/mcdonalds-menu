import { url } from "../../constants/index";
import api from "../api";

export default {
  getMenus: async () => {
    try {
      let response = await api.get(url.API);
      const data = response.data.menus;
      const menus = await data.map((item, index) => {
        return {
          id: index,
          name: item.name,
          data: item.items,
        };
      });

      return menus;
    } catch (error) {
      return error;
    }
  },
};
