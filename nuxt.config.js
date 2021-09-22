export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'RSA',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'author', content: 'TechyDevs' },
    
      
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/assets/images/favicon.png' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'assets/css/bootstrap.min.css',
    'assets/css/line-awesome.min.css',
    'assets/css/owl.carousel.min.css',
    'assets/css/owl.theme.default.min.css',
    'assets/css/animated-headline.css',
    'assets/css/jquery-ui.css',
    'assets/css/jquery.fancybox.css',
    'assets/css/chosen.min.css',
    'assets/css/style.css',


  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
