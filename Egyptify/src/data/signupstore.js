import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    name: "",
    email: "",
    avatar: localStorage.getItem("avatar") || '/about-us/girl-3.png',
    password: "",
  }),
  actions: {
    setUserData({ name, email, password, avatar }) {
      this.name = name;
      this.email = email;
      this.password = password;

      localStorage.setItem("userData", JSON.stringify({ name, email, password }));
    },
    loadUserData() {
      const saved = localStorage.getItem("userData");
      if (saved) {
        const { name, email, password } = JSON.parse(saved);
        this.name = name;
        this.email = email;
        this.password = password;
      }
      const savedAvatar = localStorage.getItem("avatar");
      if (savedAvatar) {
        this.avatar = savedAvatar;
      }
    },
    clearUserData() {
      this.name = "";
      this.email = "";
      this.password = "";

      localStorage.removeItem("userData");
    },

  },
});
