import Alpine from 'alpinejs'
import L from 'leaflet'
import { mapStyle } from './map.css'

export const init = () => {
  console.log('map called')
  Alpine.store('currentPage', 'map')
  Alpine.data('map', () => ({
    title: 'Hello, map',
    style: mapStyle
  }))

  const mapElem = document.getElementById('map') as HTMLElement
  const map = L.map(mapElem)

  L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png', {
    attribution: '<a href="https://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  }).addTo(map)

  map.setView(L.latLng(35.943363, 136.200576), 20)
}