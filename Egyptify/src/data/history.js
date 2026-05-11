import { defineStore } from "pinia";

export const useHistoryStore = defineStore("history", {
  state: () => ({
    history: [] // هنا هيتخزن كل الحجوزات
  }),
  actions: {
    addHistoryItem(item) {
      this.history.push({
        ...item,
        id: Date.now(), // id فريد لكل حجز
        confirmedAt: new Date().toLocaleString()
      });
    },
    clearHistory() {
      this.history = [];
    }
  }
});