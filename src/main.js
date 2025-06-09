// src/main.js
import { createApp } from 'vue'
import App from './App.vue'

// Import the improved i18n module
import i18n from './i18n'

// FontAwesome imports
import { library } from '@fortawesome/fontawesome-svg-core'
import { faInstagram, faWhatsapp, faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Add icons to the library
library.add(faInstagram, faWhatsapp, faFacebookF)

// Create the Vue app
const app = createApp(App)

// Use plugins and mount
app.use(i18n)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')

// Import CSS
import './main.css'