export default class InfiniteScroll {
  container
  elClientHeight
  immediate = true
  callback
  loadDistance = 0
  enableLazyLoad = true
  imgs
  imgNum = 0
  imgCount = 0

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
      if (enableLazyLoad) {
        for (let i = this.imgCount; i < this.imgNum; i++) {
          if (imgs[i].offsetTop < elClientHeight + cEl.scrollTop) {
            if (imgs[i].getAttribute('src') === 'default.jpg') {
              imgs[i].src = imgs[i].getAttribute('data-src')
            }
            this.imgNum = i + 1
          }
        }
      }
      this.callback()
    }
  }

}
