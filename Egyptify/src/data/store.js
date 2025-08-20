// import { defineStore } from "pinia";

// export const useBookingStore = defineStore("booking", {
//   state: () => ({
//     hotel: null,
//     roomType: null,
//     dates: { checkIn: null, checkOut: null },
//     userData: null,
//     card: {
//       image: null,
//       title: null,
//       rate: null,
//       price: null,
//       activities: [],
//     },

//     totalPrice: 0,
//     bookings: [],

//     transportation: null,

//     reservation: {
//       name: "",
//       phone: "",
//       guests: "",
//       date: "",
//       time: "",
//       comment: "",
//     },
//   }),

//   actions: {
//     setHotel(hotel) {
//       this.hotel = hotel;
//       if (hotel.checkin && hotel.checkout) {
//         this.dates.checkIn = hotel.checkin;
//         this.dates.checkOut = hotel.checkout;
//       }
//     },

//     setRoomDetails(roomType, guests, price, image) {
//       this.roomType = roomType;
//       this.guests = guests;
//       this.price = price;
//       this.image = image;
//     },

//     setDates(checkIn, checkOut) {
//       this.dates = { checkIn, checkOut };
//     },

//     setUserData(data) {
//       this.userData = data;
//     },

//     setCardData({ image, title, rate, price }) {
//       this.card.image = image;
//       this.card.title = title;
//       this.card.rate = rate;
//       this.card.price = price;
//       this.card.activities = [];
//     },

//     addActivityToCard(activity) {
//       this.card.activities.push({
//         name: activity.name,
//         image: activity.image,
//         price: activity.price,
//       });
//     },

//     resetBooking() {
//       this.hotel = null;
//       this.roomType = null;
//       this.dates = { checkIn: null, checkOut: null };
//       this.userData = null;
//       this.card = {
//         image: null,
//         title: null,
//         rate: null,
//         price: null,
//         activities: [],
//       };
//       this.transportation = null;
//       this.reservation = {
//         name: "",
//         phone: "",
//         guests: "",
//         date: "",
//         time: "",
//         comment: "",
//       };
//       this.totalPrice = 0;
//       this.bookings = [];
//     },

//     setTransportation(transportData) {
//       this.transportation = transportData;
//     },

//     setReservation(data) {
//       this.reservation = { ...data };
//     },

//     addBooking(booking) {
//       this.bookings.push(booking);
//       this.totalPrice += booking.price;
//     },

//     setTotal(total) {
//       this.totalPrice = total;
//     }
//   }
// })

// stores/card.js











import { defineStore } from "pinia";

export const useCardStore = defineStore("card", {
  state: () => ({
    card: {
      image: null,
      title: null,
      rate: null,
      price: 0,
      description: null,
      activities: [],
    },
    total: 0, // 🟢 المجموع الكلي
  }),

  actions: {
    setCardData({ image, title, rate, price, description }) {
      this.card = { 
        image, 
        title, 
        description, 
        rate, 
        price: price || 0, 
        activities: [] 
      };
      this.calculateTotal();
    },

    addActivityToCard(activity) {
      this.card.activities.push({
        name: activity.name,
        image: activity.image,
        price: activity.price || 0,
        description: activity.description || "",
        duration: activity.duration || "",
      });
      this.calculateTotal();
    },

    resetCard() {
      this.card = {
        image: null,
        title: null,
        rate: null,
        description: null,
        price: 0,
        activities: [],
      };
      this.total = 0;
    },

    calculateTotal() {
      const activitiesTotal = this.card.activities.reduce(
        (sum, activity) => sum + (activity.price || 0),
        0
      );
      this.total = (this.card.price || 0) + activitiesTotal;
    },
  },
});
