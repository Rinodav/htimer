import { defineStore } from "pinia";

export const useDataStore = defineStore("data", {
  state: () => ({ count: 435, name: "Eduardo" }),
  actions: {
    signUp: async function (userData) {
      let url = "http://127.0.0.1:8000/api/v1/signup/";
      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        });

        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
      } catch (error) {
        console.error(error.message);
      }
    },
  },
});
