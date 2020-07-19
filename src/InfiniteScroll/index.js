import { throttle } from '../../utils/debounce.js'
const path = require('path')

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
    const { container } = this
    if (!container) return
    const cElPosition = window.getComputedStyle(this.container).position
    if (cElPosition === 'static') {
      this.container.style.position = 'relative'
    }
    this.elClientHeight = container.clientHeight
    this.imgs = container.querySelectorAll('img')
    this.imgNum = this.imgs.length
    const onScroll = throttle(this.handleScroll)

    if (this.enableLazyLoad) {
      this.imgs.forEach(img => {
        const imgUrl = img.getAttribute('src')
        img.setAttribute('data-src', imgUrl)
        img.src = this.placeholder
      })
    }
    container.addEventListener('scroll', onScroll.bind(this))
  }

  handleScroll() {
    const {
      container: cEl,
      elClientHeight,
      loadDistance,
      enableLazyLoad,
      imgs
    } = this

    console.log(enableLazyLoad);
    if (cEl.scrollHeight - cEl.scrollTop - loadDistance <= elClientHeight) {
      if (enableLazyLoad) {
        console.log(imgs)
        for (let i = this.imgCount; i < this.imgNum; i++) {
          if (imgs[i].offsetTop < elClientHeight + cEl.scrollTop) {
            console.log(imgs[i].offsetTop)
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
