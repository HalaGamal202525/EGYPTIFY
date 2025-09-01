import { defineStore } from "pinia";
import { useCardStore } from "./store";
import { useHotelStore } from "./storehotel";
import { useReservationStore } from "./Storeresturant";
import { useTransportationStore } from "./storetransport";
import { useeventStore } from "./storeevent";

export const useBookingStore = defineStore("bookingStore", {
 state: () => ({
  // لو في مستخدم حالي
  userEmail: localStorage.getItem("currentUserEmail") || null,
  history: [],
}),

actions: {
  loadHistory() {
    if (!this.userEmail) return;
    const allHistory = JSON.parse(localStorage.getItem("bookingHistory")) || {};
    this.history = allHistory[this.userEmail] || [];
  },

  addBooking(baseBooking) {
    const cardStore = useCardStore();
    const hotelStore = useHotelStore();
    const reservationStore = useReservationStore();
    const transportationStore = useTransportationStore();
    const eventdata = useeventStore();

    const newBooking = {
      ...baseBooking,
      id: Date.now(),
      status: "Confirmed",
      trip: JSON.parse(JSON.stringify(cardStore.card)),
      activities: JSON.parse(JSON.stringify(cardStore.card.activities || [])),
      restaurant: {
        ...JSON.parse(JSON.stringify(reservationStore.restaurant)),
        reservation: JSON.parse(JSON.stringify(reservationStore.reservation)),
        orders: JSON.parse(JSON.stringify(reservationStore.bookings)),
        totalPrice: reservationStore.totalPrice,
      },
      transportation: JSON.parse(JSON.stringify(transportationStore.transportation)),
      hotel: {
        ...JSON.parse(JSON.stringify(hotelStore.hotel)),
        bookingDetails: JSON.parse(JSON.stringify(hotelStore.bookingDetails)),
        totalNights: hotelStore.totalNights,
        totalPrice: hotelStore.totalPrice,
      },
      event: JSON.parse(JSON.stringify(eventdata.booking)),
    };

    this.history.push(newBooking);

    // نحفظ لكل مستخدم بشكل منفصل
    const allHistory = JSON.parse(localStorage.getItem("bookingHistory")) || {};
    allHistory[this.userEmail] = this.history;
    localStorage.setItem("bookingHistory", JSON.stringify(allHistory));
  },

  clearHistory() {
    this.history = [];
    if (!this.userEmail) return;
    const allHistory = JSON.parse(localStorage.getItem("bookingHistory")) || {};
    delete allHistory[this.userEmail];
    localStorage.setItem("bookingHistory", JSON.stringify(allHistory));
  }
}

});
