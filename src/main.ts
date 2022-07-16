import Alpine from 'alpinejs'
import { themeClass, defaultStyle } from './style.css'

window.Alpine = Alpine

console.log(themeClass)

Alpine.store('theme', themeClass)
Alpine.store('defaultStyle', defaultStyle)

Alpine.start()
