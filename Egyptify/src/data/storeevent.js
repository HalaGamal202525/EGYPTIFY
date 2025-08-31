import { defineStore } from "pinia";

export const useeventStore = defineStore("booking", {
  state: () => ({
    booking: {
      image: null,
      name: null,
      date: null,
      location: null,
      price: null,      // السعر الأساسي
      totalPrice: null, // السعر النهائي بعد ضربه بعدد الضيوف
      people: null,     // عدد الضيوف
    },
  }),

  actions: {
    setBookingData({ image, name, date, location, price }) {
      this.booking = { ...this.booking, image, name, date, location, price };
    },

    updateDetails({ price }) {
      this.booking.price = price;
    },

    updateGuests({ people, totalPrice, basePrice }) {
      this.booking.people = people;
      this.booking.totalPrice = totalPrice;
      if (basePrice) this.booking.price = basePrice; // السعر الأصلي ثابت
    },

    clearBooking() {
      this.booking = {
        image: null,
        name: null,
        date: null,
        location: null,
        price: null,
        totalPrice: null,
        people: null,
      };
    },
  },
});
