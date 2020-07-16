export default class InfiniteScroll {
  container
  elClientHeight
  immediate = true
  callback = () => null
  loadDistance = 0
  enableLazyLoad = true
  imgs
  imgNum = 0
  imgCount = 0
  placeholder

  constructor(options) {
    Object.assign(this, options)
    this.init()
    if (this.immediate) {
      const observer = new MutationObserver(this.handleScroll.bind(this))
      observer.observe(this.container, { childList: true, subtree: true })
      this.handleScroll()
    }
  }

  init() {
    const {container} = this
    if (!container) return
    this.elClientHeight = container.clientHeight
    this.imgs = container.querySelectorAll('img')
    this.imgNum = this.imgs.length

    if (this.enableLazyLoad) {
      this.imgs.forEach(img => {
        const imgUrl= img.getAttribute('src')
        img.setAttribute('data-src', imgUrl)
        img.src = 'https://lh3.googleusercontent.com/ogw/ADGmqu-WeMgLWJ9CyfxbeKu2QWW2T7Lmt7Kqre9e0qPL=s128-b16-cc-rp-mo'
        // img.src = require('../../asset/placeholder.jpg')
      })
    }
    container.addEventListener('scroll', this.handleScroll.bind(this))
  }

  handleScroll() {
    const {
      container: cEl,
      elClientHeight,
      loadDistance,
      enableLazyLoad,
      imgs
    } = this

    if (cEl.scrollHeight - cEl.scrollTop - loadDistance <= elClientHeight) {
      console.log('enter here')

      if (enableLazyLoad) {
        for (let i = this.imgCount; i < this.imgNum; i++) {
          if (imgs[i].offsetTop < elClientHeight + cEl.scrollTop) {
            imgs[i].src = imgs[i].getAttribute('data-src')
            imgs[i].removeAttribute('data-src')
            this.imgNum = i + 1
          }
        }
      }
      this.callback()
    }
  }

}
