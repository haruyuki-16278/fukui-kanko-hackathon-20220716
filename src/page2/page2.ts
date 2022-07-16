import Alpine from 'alpinejs'

export const init = () => {
  console.log('page2 called')
  Alpine.data('page2', () => ({
    title: 'Hello, page2'
  }))
}