require('es6-promise').polyfill()
require('isomorphic-fetch')

import {teszt} from './fetch_hints.js'
import {initialize} from './switch.js'

teszt()
initialize()
