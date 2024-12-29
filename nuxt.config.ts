// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxt/icon', '@nuxtjs/color-mode','@nuxtjs/i18n'],
  i18n: {
    locales: [
      { code: 'en', name: 'English', iso: 'en-US', file: 'en.json' },
      { code: 'es', name: 'Español', iso: 'es-ES', file: 'es.json' }
    ],
    defaultLocale: 'es', // Idioma por defecto
    lazy: true, // Carga los archivos de traducción de manera diferida
    langDir: 'locales/', // Carpeta donde estarán los archivos de traducción
    detectBrowserLanguage: {
      // Configuración de detección automática
      useCookie: true, // Almacena el idioma seleccionado en una cookie
      cookieKey: 'i18n_redirected', // Nombre de la cookie
      alwaysRedirect: true, // Siempre redirige si detecta un idioma diferente
      fallbackLocale: 'es', // Idioma de respaldo si no puede detectarlo
    },
  },
})