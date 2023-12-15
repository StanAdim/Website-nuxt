// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
       script: [  
           { tagPosition: 'bodyClose', src: '/assets/js/core.min.js' },
           { tagPosition: 'bodyClose', src: '/assets/js/script.js' },
           { tagPosition: 'bodyClose', src: '/assets/js/flexslider/jquery.flexslider.js' },
           { tagPosition: 'bodyClose', src: '/assets/js/flexslider/setting.js' },
          //  {src: 'https://code.jquery.com/jquery-3.6.0.min.js',defer: true},
          //  { src:"https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js",
          //  integrity:"sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q",
          //  crossorigin:"anonymous", defer: true},
          //  {src:"https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js",
          //  integrity:"sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl",
          //  crossorigin:"anonymous",defer: true},
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
      '~/assets/css/style.css',
      '~/assets/css/flexslider.css']
})
