import Alpine from 'alpinejs'

export const init = () => {
  console.log('review called')
  Alpine.data('review', () => ({
    title: 'Hello, review'
  }))
}
