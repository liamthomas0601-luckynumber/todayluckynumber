export default {
  ssr: true,        // SSR enabled
  target: 'server',

  head: {
    title: 'Nuxt 2.15.8 App',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ]
  },

  components: true,

  build: {
    transpile: [],
    babel: {
      plugins: [
        '@babel/plugin-proposal-private-methods',
        '@babel/plugin-proposal-private-property-in-object',
        '@babel/plugin-proposal-class-properties'
      ]
    }
  }
}