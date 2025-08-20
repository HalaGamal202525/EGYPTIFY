// stores/hotel.js
import { defineStore } from "pinia";

export const useHotelStore = defineStore("hotel", {
  state: () => ({
    // ✅ بيانات الفندق نفسه
    hotel: {
      id: null,
      name: "",
      image: "",
      address: "",
      stars: 0,
      description: "",
    },

    // ✅ تفاصيل الحجز الخاصة بالفندق
    bookingDetails: {
      roomType: null,
      guests: 1,
      checkIn: null,
      checkOut: null,
      price: 0,     // سعر الليلة الواحدة للغرفة
      roomImage: "", 
    },
  }),

  getters: {
    // ✅ حساب المدة
    totalNights: (state) => {
      if (!state.bookingDetails.checkIn || !state.bookingDetails.checkOut) return 0;
      const checkInDate = new Date(state.bookingDetails.checkIn);
      const checkOutDate = new Date(state.bookingDetails.checkOut);
      const diffTime = checkOutDate - checkInDate;
      const nights = diffTime / (1000 * 60 * 60 * 24);
      return nights > 0 ? nights : 0; // ماينفعش يكون بالسالب
    },

    // ✅ المجموع الكلي = عدد الليالي × سعر الغرفة
    totalPrice: (state) => {
      return state.bookingDetails.price * (state.bookingDetails.checkOut && state.bookingDetails.checkIn
        ? (new Date(state.bookingDetails.checkOut) - new Date(state.bookingDetails.checkIn)) / (1000 * 60 * 60 * 24)
        : 0);
    },
  },

  actions: {
    // حفظ بيانات الفندق
    setHotel(hotel) {
      this.hotel = { ...hotel };
    },

    // حفظ تفاصيل الحجز (غرفة - ضيوف - سعر - صورة الغرفة)
    setRoomDetails(roomType, guests, price, roomImage) {
      this.bookingDetails.roomType = roomType;
      this.bookingDetails.guests = guests;
      this.bookingDetails.price = price;
      this.bookingDetails.roomImage = roomImage;
    },

    // تحديد مواعيد الوصول والمغادرة
    setDates(checkIn, checkOut) {
      this.bookingDetails.checkIn = checkIn;
      this.bookingDetails.checkOut = checkOut;
    },

    // تحديث عدد الضيوف
    setGuests(guests) {
      this.bookingDetails.guests = guests;
    },

    // عمل reset لكل البيانات
    resetHotel() {
      this.hotel = {
        id: null,
        name: "",
        image: "",
        address: "",
        stars: 0,
        description: "",
      };

      this.bookingDetails = {
        roomType: null,
        guests: 1,
        checkIn: null,
        checkOut: null,
        price: 0,
        roomImage: "",
      };
    },
  },
});
