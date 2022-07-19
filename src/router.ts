/* eslint-disable indent */
// 参考: https://github.com/melnikaite/alpine-router

import { init as homeInit } from './pages/home/home'
import { init as naviInit } from './pages/navi/navi'
import { init as reviewInit } from './pages/review/review'

window.addEventListener('hashchange', onRouteChange)
onRouteChange()

async function onRouteChange() {
  const appElement = document.querySelector('#app') as HTMLElement
  await loadRoute(appElement)
  window.Alpine?.initTree(appElement)
}

async function loadRoute(appElement: HTMLElement) {
  switch (window.location.hash) {
    case '#navi':
      appElement.innerHTML = await fetch(new URL('./pages/navi/navi.html', import.meta.url).href)
                                    .then(template => template.text())
      naviInit()
      break
    case '#review':
      appElement.innerHTML = await fetch(new URL('./pages/review/review.html', import.meta.url).href)
                                    .then(template => template.text())
      reviewInit()
      break
    case '#home':
    default:
      appElement.innerHTML = await fetch(new URL('./pages/home/home.html', import.meta.url).href)
                                    .then(template => template.text())
      homeInit()
      break
  }
}

export {}
