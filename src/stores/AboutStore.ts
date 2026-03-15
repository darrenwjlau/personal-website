import { defineStore } from 'pinia'
export const useAboutStore = defineStore('AboutStore', {
    state: () => ({
      about: "I am a 18 year old from Malaysia that likes to create interesting projects."
     }),
     getters: {
        about_message: (state) => state.about
      }
  })
