// 参考: https://github.com/melnikaite/alpine-router

import { init as page1Init } from './pages/home/home'
import { init as page2Init } from './pages/navi/navi'
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
      page2Init()
      appElement.innerHTML = await fetch('./pages/navi/navi.html').then(template => template.text())
      break
    case '#review':
      reviewInit()
      appElement.innerHTML = await fetch('./pages/review/review.html').then(template => template.text())
      break
    case '#home':
    default:
      page1Init()
      appElement.innerHTML = await fetch('./pages/home/home.html').then(template => template.text())
      break
  }
}

export {}
