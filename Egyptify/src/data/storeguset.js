import { defineStore } from "pinia";

export const useGuestStore = defineStore("guest", {
  state: () => ({
    guest: {
      name: "",
      address: "",
      nationality: "",
      gender: "",
      idType: "",
      idNumber: "",
      phone: "",
      email: "",
      date: "",
      passengerCount: 1,
    },
  }),
  actions: {
    setGuest(data) {
      this.guest = { ...data };
    },
    resetGuest() {
      this.guest = {
        name: "",
        address: "",
        nationality: "",
        gender: "",
        idType: "",
        idNumber: "",
        phone: "",
        email: "",
        date: "",
        passengerCount: 1,
      };
    },
  },
});
