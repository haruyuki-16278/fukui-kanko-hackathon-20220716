/* eslint-disable indent */
// 参考: https://github.com/melnikaite/alpine-router

import { init as timelineInit } from './pages/timeline/timeline'
import { init as mapInit } from './pages/map/map'
import { init as mypageInit } from './pages/mypage/mypage'

window.addEventListener('hashchange', onRouteChange)
onRouteChange()

async function onRouteChange() {
  const appElement = document.querySelector('#app') as HTMLElement
  await loadRoute(appElement)
  window.Alpine?.initTree(appElement)
}

async function loadRoute(appElement: HTMLElement) {
  switch (window.location.hash) {
    case '#map':
      appElement.innerHTML = await fetch(new URL('./pages/map/map.html', import.meta.url).href)
                                    .then(template => template.text())
      mapInit()
      break
    case '#mypage':
      appElement.innerHTML = await fetch(new URL('./pages/mypage/mypage.html', import.meta.url).href)
                                    .then(template => template.text())
      mypageInit()
      break
    case '#timeline':
    default:
      appElement.innerHTML = await fetch(new URL('./pages/timeline/timeline.html', import.meta.url).href)
                                    .then(template => template.text())
      timelineInit()
      break
  }
}

export {}
