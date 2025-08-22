// bookingStore.js
import { defineStore } from "pinia";

export const useBookingStore = defineStore("booking", {
  state: () => ({
    placeType: null, // نوع المكان (Hotel, Restaurant, Transport...)
    placeName: null, // اسم المكان
    dates: { checkIn: null, checkOut: null },
    userData: null,
  }),

  actions: {
    setBookingData({ type, name, dates, userData }) {
      this.placeType = type
      this.placeName = name
      this.dates = dates
      this.userData = userData
    },

    clearBooking() {
      this.placeType = null
      this.placeName = null
      this.dates = { checkIn: null, checkOut: null }
      this.userData = null
    }
  }
})
