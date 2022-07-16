import Alpine from 'alpinejs'
import { themeClass, appStyle, headerStyle, footerStyle, flexCenter } from './style.css'

window.Alpine = Alpine

console.log(themeClass)

Alpine.store('theme', themeClass)
Alpine.store('appStyle', appStyle)
Alpine.store('headerStyle', headerStyle)
Alpine.store('footerStyle', footerStyle)
Alpine.store('flexCenter', flexCenter)

Alpine.store('showIcon', true)

Alpine.start()
