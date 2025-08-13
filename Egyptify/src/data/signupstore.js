import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    name: '',
    email: '',
    password: ''
  }),
  actions: {
    setUserData({ name, email, password }) {
      this.name = name
      this.email = email
      this.password = password
    }
  }
})
