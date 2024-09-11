// https://nuxt.com/docs/api/configuration/nuxt-config

  

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  plugins: ['~/plugins/vuetify.js'],
  build: {
    transpile: ['vuetify'],
  },
  runtimeConfig:{
    dbUrl : process.env.DB_URL,
  },
  css: [
    'vuetify/styles',
    '@mdi/font/css/materialdesignicons.css', // Import MDI CSS here
  ],

  

  routeRules:{
    '/':{isr:true},
    '/contact':{ssr:false},
    '/projects':{isr:true},
    '/project/**':{isr:true},
    '/about':{isr:true}
  },

  hooks:{
    async "prerender:routes" (ctx){

      try {
        let projects = await fetch('https://nuxt-project-sandy.vercel.app/api/getAllProjects');
        const result = await projects.json();
       
         result.map((project:any)=>{
         ctx.routes.add(`/project/${project._id}`);
        })
      } catch (error) {
        console.error('Error fetching projects:', error);
        
      }

    }
  }
 
  
  

})



