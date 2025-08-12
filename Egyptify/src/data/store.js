import { defineStore } from 'pinia'

export const useBookingStore = defineStore('booking', {
  state: () => ({
    hotel: null,       // تخزن بيانات الفندق كاملة
    roomType: null,    // تخزن بيانات نوع الغرفة
    dates: { checkIn: null, checkOut: null }, // مواعيد الدخول والخروج
    userData: null
  }),
  actions: {
    setHotel(hotel) {
      this.hotel = hotel;
      // لو بيانات مواعيد الدخول والخروج موجودة داخل الفندق، ممكن تخزنها هنا كمان
      if(hotel.checkin && hotel.checkout){
        this.dates.checkIn = hotel.checkin;
        this.dates.checkOut = hotel.checkout;
      }
    },
     setRoomDetails(roomType, guests, price,image) {
      this.roomType = roomType;
      this.guests = guests;
      this.price = price;
      this.image=image
    },
    setDates(checkIn, checkOut) {
      this.dates = { checkIn, checkOut };
    },
    setUserData(data) {
      this.userData = data;
    },
    resetBooking() {
      this.hotel = null;
      this.roomType = null;
      this.dates = { checkIn: null, checkOut: null };
      this.userData = null;
    }
  }
})
