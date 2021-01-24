// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

// Import global styles
require("~/main.css");

import DefaultLayout from '~/layouts/Default.vue'

import {
  faCompass,
  faDirections,
  faHome,
  faInfo,
  faSign,
  faStreetView,
  faTrafficLight,
} from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  library.add(faDirections, faTrafficLight, faStreetView, faSign, faCompass, faHome, faInfo)

    Vue.component('Layout', DefaultLayout)
    Vue.component('AppIcon', FontAwesomeIcon)
}
