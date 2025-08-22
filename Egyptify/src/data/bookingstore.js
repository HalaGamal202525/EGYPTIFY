import { defineStore } from "pinia";

export const useBookingStore = defineStore("bookingStore", {
  state: () => ({
    history: [], // هنا هيتخزن كل الحجوزات
  }),
  actions: {
    addBooking(booking) {
      this.history.push({
        ...booking,
        id: Date.now(), // id فريد
        status: "Confirmed",
      });
    },
  },
});
