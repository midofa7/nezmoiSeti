import i18n from "./config/i18n";
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "mehdi_halfya",
    htmlAttrs: {
      lang: "fr",
    },
    meta: [
      { rel: "preconnect", href: "https://fonts.gstatic.com" },
      {
        href: "lib/owlcarousel/assets/owl.carousel.min.css",
        rel: "stylesheet",
      },
      {
        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.0/css/all.min.css",
        rel: "stylesheet",
      },
      {
        href: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css",
        rel: "stylesheet",
      },
      {
        href: "https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&family=Roboto:wght@400;700&display=swap",
        rel: "stylesheet",
      },
      {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.0/css/all.min.css",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&family=Roboto:wght@400;700&display=swap",
      },
      {
        charset: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        hid: "description",
        name: "description",
        content: "",
      },
      {
        name: "format-detection",
        content: "telephone=no",
      },
    ],
    script: [
      {
        src: "https://code.jquery.com/jquery-3.4.1.min.js",
      },
      {
        src: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js",
      },
      {
        src: "@/assets/a/lib/easing/easing.min.js",
      },
      {
        src: "@/assets/a/lib/waypoints/waypoints.min.js",
      },
      {
        src: "@/assets/a/lib/owlcarousel/owl.carousel.min.js",
      },
      {
        src: "@/assets/a/lib/tempusdominus/js/moment.min.js",
      },
      {
        src: "@/assets/a/lib/tempusdominus/js/moment-timezone.min.js",
      },
      {
        src: "@/assets/a/lib/tempusdominus/js/tempusdominus-bootstrap-4.min.js",
      },
      {
        src: "/js/popper.min.js",
      },
      {
        src: "/js/jquery.min.js",
      },
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/icon.ico",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "@/assets/css/index.css",
    "@/assets/a/css/bootstrap.min.css",
    "@/assets/a/css/style.css",
    "@/assets/a/lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/proxy", "@nuxtjs/axios"],

  axios: {
    proxy: true,
  },

  modules: [
    [
      "@nuxtjs/i18n",
      {
        locales: ["fr", "ar"],
        defaultLocale: "fr",
        locales: [
          {
            code: "fr",
            name: "Français",
          },
          {
            code: "ar",
            name: "العربية",
          },
          {
            code: "en",
            name: "English",
          },
        ],

        vueI18nLoader: true,

        vueI18n: i18n,
        detectBrowserLanguage: {
          useCookie: true,
          cookieKey: "i18n_redirected",
          onlyOnRoot: true, // recommended
        },
      },
    ],
    ,
    "@nuxtjs/axios",
  ],
  proxy: {},
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
