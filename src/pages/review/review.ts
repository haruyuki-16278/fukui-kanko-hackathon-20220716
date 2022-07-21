import Alpine from 'alpinejs'

export const init = () => {
  console.log('review called')
  Alpine.store('currentPage', 'mypage')
  Alpine.data('review', () => ({
    title: 'Hello, review'
  }))
}
