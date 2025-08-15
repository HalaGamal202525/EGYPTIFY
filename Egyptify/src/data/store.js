import { defineStore } from 'pinia'

export const useBookingStore = defineStore('booking', {
  state: () => ({
    hotel: null,
    roomType: null,
    dates: { checkIn: null, checkOut: null },
    userData: null,
    card: {
      image: null,
      title: null,
      rate: null,
      price: null,

  
    },

 // بيانات وسيلة المواصلات
    transportation: null


  }),
  actions: {
    setHotel(hotel) {
      this.hotel = hotel;
      if (hotel.checkin && hotel.checkout) {
        this.dates.checkIn = hotel.checkin;
        this.dates.checkOut = hotel.checkout;
      }

      
    },
    setRoomDetails(roomType, guests, price, image) {
      this.roomType = roomType;
      this.guests = guests;
      this.price = price;
      this.image = image;
    },
    setDates(checkIn, checkOut) {
      this.dates = { checkIn, checkOut };
    },
    setUserData(data) {
      this.userData = data;
    },
    setCardData({ image, title, rate, price }) {
      this.card.image = image;
      this.card.title = title;
      this.card.rate = rate;
      this.card.price = price;
    },
    resetBooking() {
      this.hotel = null;
      this.roomType = null;
      this.dates = { checkIn: null, checkOut: null };
      this.userData = null;
      this.card = {
        image: null,
        title: null,
        rate: null,
        price: null
      };

      this.transportation = null;
      },
     

       setTransportation(transportData) {
        this.transportation = transportData;
      }


  }
})
