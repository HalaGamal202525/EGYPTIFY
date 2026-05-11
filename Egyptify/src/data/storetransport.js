// stores/transportation.js
import { defineStore } from "pinia";

export const useTransportationStore = defineStore("transportation", {
  state: () => ({
    transportation: null,
  }),

  actions: {
    setTransportation(data) {
      this.transportation = data;
    },
    resetTransportation() {
      this.transportation = null;
    },
  },
});
