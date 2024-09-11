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
  ssr: true,
  routeRules: {
    '/': { isr: true },
    '/contact': { ssr: false },
    '/projects': { isr: true },
  },
 
  // hooks: {
  //   async 'prerender:routes'(ctx) {
  //     try {
  //       const response = await fetch('https://nuxt-project-sandy.vercel.app/api/getAllProjects');
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }
  //       const projects = await response.json();
  //       ctx.routes.add('/about');
  //       projects.forEach((project: { _id: string }) => {
  //         ctx.routes.add(`/project/${project._id}`);
  //       });
  //     } catch (error) {
  //       console.error('Error fetching projects:', error);
  //     }
  //   },
  // },
});


