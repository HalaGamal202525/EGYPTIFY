import { defineStore } from "pinia";
import { useCardStore } from "./store";
import { useHotelStore } from "./storehotel";
import { useReservationStore } from "./Storeresturant";
import { useTransportationStore } from "./storetransport";
import { useeventStore } from "./storeevent";

export const useBookingStore = defineStore("bookingStore", {
  state: () => ({
    history: JSON.parse(localStorage.getItem("bookingHistory")) || [],
  }),

  actions: {
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

        // ✅ ناخد نسخة ثابتة مش مرتبطة بالـ stores
        trip: JSON.parse(JSON.stringify(cardStore.card)),
        activities: JSON.parse(JSON.stringify(cardStore.card.activities || [])),
        restaurant: {
          ...JSON.parse(JSON.stringify(reservationStore.restaurant)),
          reservation: JSON.parse(JSON.stringify(reservationStore.reservation)),
          orders: JSON.parse(JSON.stringify(reservationStore.bookings)),
          totalPrice: reservationStore.totalPrice,
        },
        transportation: JSON.parse(
          JSON.stringify(transportationStore.transportation)
        ),
        hotel: {
          ...JSON.parse(JSON.stringify(hotelStore.hotel)),
          bookingDetails: JSON.parse(JSON.stringify(hotelStore.bookingDetails)),
          totalNights: hotelStore.totalNights,
          totalPrice: hotelStore.totalPrice,
        },
        event: JSON.parse(JSON.stringify(eventdata.booking)),
      };

      this.history.push(newBooking);

      // نحفظ التحديث الجديد في localStorage
      localStorage.setItem("bookingHistory", JSON.stringify(this.history));
    },

    clearHistory() {
      this.history = [];
      localStorage.removeItem("bookingHistory");
    },
  },
});
