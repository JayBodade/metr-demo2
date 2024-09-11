import { createVuetify } from 'vuetify';
import '@mdi/font/css/materialdesignicons.css'
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import 'vuetify/styles'; // Ensure you are importing the styles

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,
    directives,
    icons:{
      defaultSet:'mdi',
    }
  });

  nuxtApp.vueApp.use(vuetify);
});
