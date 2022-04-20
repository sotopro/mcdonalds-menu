const api = {
  get: async (url) => {
    try {
      let response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      let data = await response.json();
      return { data };
    } catch (error) {
      return { error };
    }
  },
  post: async (url, params) => {
    try {
      let response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(params),
      });
      let data = await response.json();
      return { data };
    } catch (error) {
      return { error };
    }
  },
};

export default api;
