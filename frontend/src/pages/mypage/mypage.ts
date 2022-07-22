import Alpine from 'alpinejs'

export const init = () => {
  console.log('mypage called')
  Alpine.store('currentPage', 'mypage')
  Alpine.data('mypage', () => ({
    title: 'Hello, mypage'
  }))
}
