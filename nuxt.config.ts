import { defineNuxtConfig } from 'nuxt/config';


export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  plugins: ['~/plugins/vuetify.js'],
  build: {
    transpile: ['vuetify'],
  },
  runtimeConfig: {
    public: {
      dbUrl: process.env.DB_URL,
    }
  },
  css: [
    'vuetify/styles',
    '@mdi/font/css/materialdesignicons.css',
  ],
  nitro: {
    routeRules: {
      '/': { isr: true },  
      '/projects': { isr: true },  
      '/contact': { ssr: false }, 
      '/proj/**':{isr:true}, 
      '/about':{isr:true},
    },
   
  },

 
 

});


