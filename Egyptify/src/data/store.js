import { defineStore } from "pinia";

export const useCardStore = defineStore("card", {
  state: () => ({
    card: {
      image: null,
      title: null,
      rate: null,
      price: 0,
      description: null,
      activities: [],
    },
  }),

  getters: {
    total: (state) => {
      let base = state.card.price || 0;

      let activitiesTotal = state.card.activities?.length
        ? state.card.activities.reduce((sum, a) => sum + (a.price || 0), 0)
        : 0;

      return base + activitiesTotal;
    },
  },

  actions: {
    setCardData({ image, title, rate, price, description }) {
      this.card = { 
        image, 
        title, 
        description, 
        rate, 
        price: price || 0, 
        activities: [] 
      };
    },

    addActivityToCard(activity) {
      this.card.activities.push({
        name: activity.name,
        image: activity.image,
        price: activity.price || 0,
        description: activity.description || "",
        duration: activity.duration || "",
      });
    },

    resetCard() {
      this.card = {
        image: null,
        title: null,
        rate: null,
        description: null,
        price: 0,
        activities: [],
      };
    },
  },
});
