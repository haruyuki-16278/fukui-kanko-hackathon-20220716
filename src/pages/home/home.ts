import Alpine from 'alpinejs'

export const init = () => {
  console.log('page1 called')
  Alpine.data('page1', () => ({
    title: 'Hello, page1'
  }))
}
