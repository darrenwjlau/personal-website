import { defineStore } from 'pinia'
export const useTechItems = defineStore('TechItemsStore', {
    state: () => ({
      item: [
        { name: 'Waner', type: 'Wired Earbuds 🎧', maker: 'Tangzu', img: 'tangzu_waner.png' },
        { name: 'Redmi 13C', type: 'Phone 📱', maker: 'Xiaomi', img: 'xiaomi_redmi_13c.png' }
      ]
     }),
    getters: {
      items: (state) => {
          let prefix = " /src/assets/tech_images/"
          if(import.meta.env.PROD) {
            prefix = "/assets/tech_images/"
          }
          let items = JSON.parse(JSON.stringify(state.item));
          for(let item in items) {
                  let real_item = items[item]
                  real_item["img"] = prefix + real_item["img"]
          }
          return items
          
      },
    }
  })
