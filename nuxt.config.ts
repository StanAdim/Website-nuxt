// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
       'script': [  
           { tagPosition: 'bodyClose', src: '/assets/js/core.min.js' },
           { tagPosition: 'bodyClose', src: '/assets/js/script.js' },
           { tagPosition: 'bodyClose', src: '/assets/js/app.js' },
           { tagPosition: 'bodyClose', src: '/assets/js/flexslider/jquery.flexslider.js' },
           { tagPosition: 'bodyClose', src: '/assets/js/flexslider/setting.js' },
       ],
       link:[
        { rel:"stylesheet", type:"text/css",
        href:"https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Roboto:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"},
        { rel:"stylesheet", type:"text/css",
        href:"https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/1.4.57/css/materialdesignicons.min.css"},
        {rel:"stylesheet", href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",
        integrity:"sha512-SfTiTlX6kk+qitfevl/7LibUOeJWlt9rbyDn92a1DqWOw9vWG2MFoays0sgObmWazO5BQPiFucnnEAjpAB+/Sw==",
        crossorigin:"anonymous", referrerpolicy:"no-referrer"}
       ]
    }
  },
  css: ['~/assets/css/app.css',
      '~/assets/css/bootstrap.css',
      '~/assets/css/fonts.css',
      '~/assets/css/auth.css',
      '~/assets/css/style.css',
      '~/assets/css/flexslider.css']
})
