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
      rate: 0,
      description: "",
    },

    // ✅ تفاصيل الحجز الخاصة بالفندق
    bookingDetails: {
      roomType: null,
      guests: 1,
      checkIn: null,
      checkOut: null,
      price: 0,
      roomImage: "", // ✅ جديد: صورة الغرفة
    },
  }),

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
      this.bookingDetails.roomImage = roomImage; // ✅ نخزن الصورة
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
        rate: 0,
        description: "",
      };

      this.bookingDetails = {
        roomType: null,
        guests: 1,
        checkIn: null,
        checkOut: null,
        price: 0,
        roomImage: "", // ✅ reset كمان
      };
    },
  },
});
