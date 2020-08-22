import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#f09',
        secondary: '#6c757d',
        third: '#343a40'
      }
    }
  }
})
