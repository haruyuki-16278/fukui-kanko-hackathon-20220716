import Alpine from 'alpinejs'

export const init = () => {
  console.log('timeline called')
  Alpine.store('currentPage', 'timeline')
  Alpine.data('timeline', () => ({
    title: 'Hello, timeline'
  }))
}
