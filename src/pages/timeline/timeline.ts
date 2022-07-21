import Alpine from 'alpinejs'

export const init = () => {
  console.log('page1 called')
  Alpine.store('currentPage', 'timeline')
  Alpine.data('page1', () => ({
    title: 'Hello, page1'
  }))
}
