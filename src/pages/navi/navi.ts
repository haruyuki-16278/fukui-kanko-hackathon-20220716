import Alpine from 'alpinejs'
import L, { MapOptions } from 'leaflet'
import { naviStyle } from './navi.css'

export const init = () => {
  console.log('navi called')
  Alpine.data('navi', () => ({
    title: 'Hello, navi',
    style: naviStyle
  }))

  const mapElem = document.getElementById('map') as HTMLElement
  const mapOptions: MapOptions = {
    center: L.latLng(35.943363, 136.200576),
    zoom: 12
  }
  L.map(mapElem, mapOptions)
}