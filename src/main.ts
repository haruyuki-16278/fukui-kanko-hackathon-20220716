import Alpine from 'alpinejs'
import { themeClass, appStyle, headerStyle, footerStyle, flexCenter, headerItem, footerItem, activeStyle, disabledStyle, footerIcon } from './style.css'

window.Alpine = Alpine

console.log(themeClass)

Alpine.store('theme', themeClass)
Alpine.store('appStyle', appStyle)
Alpine.store('headerStyle', headerStyle)
Alpine.store('headerItem', headerItem)
Alpine.store('footerStyle', footerStyle)
Alpine.store('footerItem', footerItem)
Alpine.store('footerIcon', footerIcon)
Alpine.store('flexCenter', flexCenter)
Alpine.store('activeStyle', activeStyle)
Alpine.store('disabledStyle', disabledStyle)

Alpine.store('showIcon', true)
Alpine.store('currentPage', 'mypage')

Alpine.start()
