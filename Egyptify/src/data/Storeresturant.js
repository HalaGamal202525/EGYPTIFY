// stores/reservation.js
import { defineStore } from "pinia";

export const useReservationStore = defineStore("reservation", {
  state: () => ({
    reservation: {
      name: "",
      phone: "",
      guests: "",
      date: "",
      time: "",
      comment: "",
    },
    restaurant: null, // ✅ بيانات المطعم اللي المستخدم اختاره
    bookings: [],
    totalPrice: 0,
  }),

  actions: {
    setReservation(data) {
      this.reservation = { ...data };
    },

    setRestaurant(restaurant) {
      this.restaurant = restaurant; // ✅ حفظ بيانات المطعم
    },

    addBooking(booking) {
      this.bookings.push({
        ...booking,
        restaurant: this.restaurant, // ✅ ربط الحجز بالمطعم
      });
      this.totalPrice += booking.price;
    },

    setTotal(total) {
      this.totalPrice = total;
    },

    resetReservation() {
      this.reservation = { name: "", phone: "", guests: "", date: "", time: "", comment: "" };
  this.restaurant = {};// ✅ نرجع المطعم فاضي
      this.bookings = [];
      this.totalPrice = 0;
    },
  },
});
