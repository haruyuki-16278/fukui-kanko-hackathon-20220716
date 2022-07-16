import Alpine from 'alpinejs'

export const init = () => {
  console.log('navi called')
  Alpine.data('navi', () => ({
    title: 'Hello, navi'
  }))
}