import '../../style/carousel.scss'

class Carousel {
  constructor (options) {
    const defaultOptions = {
      element: null,
      height: 0,
      index: 0,
      autoplay: true,
      interval: 3000
    }
    this.options = Object.assign({}, defaultOptions, options)
    this.initCarousel()
    this.bindCarousel()
    this.playCarousel()
  }

  initCarousel () {
    this.timer = null
    this.initCarouselContainer()
    this.initCarouselPanels()
    this.initCarouselArrows()
    this.initCarouselDots()
  }

  initCarouselContainer () {
    this.$container = this.options.element
    this.$container.classList.add('tiny-carousel')
    this.$container.style.height = this.options.height
  }

  initCarouselPanels () {
    this.$$panels = this.$container.querySelectorAll('.carousel-panel')
    this.$$panels[this.options.index].classList.add('active')
    const $panelContainer = document.createElement('div')
    $panelContainer.setAttribute('class', 'carousel-panels')
    this.$$panels.forEach($panel => {
      $panelContainer.appendChild($panel)
    })
    this.$container.appendChild($panelContainer)
  }

  initCarouselArrows () {
    const $arrowContainer = document.createElement('div')
    $arrowContainer.setAttribute('class', 'carousel-arrows')
    const $arrowPrev = document.createElement('button')
    $arrowPrev.setAttribute('class', 'carousel-arrow arrow-prev')
    const $arrowNext = document.createElement('button')
    $arrowNext.setAttribute('class', 'carousel-arrow arrow-next')
    $arrowContainer.appendChild($arrowPrev)
    $arrowContainer.appendChild($arrowNext)
    this.$container.appendChild($arrowContainer)
  }

  initCarouselDots () {
    const $dotsContainer = document.createElement('ul')
    $dotsContainer.setAttribute('class', 'carousel-dots')
    this.$$panels.forEach($panel => {
      const $dot = document.createElement('li')
      $dot.setAttribute('class', 'carousel-dot')
      $dotsContainer.appendChild($dot)
    })
    this.$container.appendChild($dotsContainer)
    this.$$dots = this.$container.querySelectorAll('.carousel-dot')
    this.$$dots[this.options.index].classList.add('active')
  }

  bindCarousel () {
    this.bindCarouselArrow()
    this.bindCarouselDots()
    this.bindCarouselContainer()
  }

  bindCarouselArrow () {
    const $arrowPrev = this.$container.querySelector('.arrow-prev')
    const $arrowNext = this.$container.querySelector('.arrow-next')
    $arrowPrev.addEventListener('click', () => {
      this.setCarousel(this.getCurrentIndex(), this.getPrevIndex(), 'right')
    })
    $arrowNext.addEventListener('click', () => {
      this.setCarousel(this.getCurrentIndex(), this.getNextIndex(), 'left')
    })
  }

  bindCarouselDots () {
    this.$$dots.forEach($carouselDot => {
      $carouselDot.addEventListener('click', e => {
        const fromIndex = this.getCurrentIndex()
        const toIndex = [...this.$$dots].indexOf(e.target)
        const direction = fromIndex > toIndex ? 'right' : 'left'
        this.setCarousel(fromIndex, toIndex, direction)
      })
    })
  }

  bindCarouselContainer () {
    if (this.options.autoplay) {
      this.$container.addEventListener('mouseenter', () => {
        this.pauseCarousel()
      })
      this.$container.addEventListener('mouseleave', () => {
        this.playCarousel()
      })
    }
  }

  setCarousel (fromIndex, toIndex, direction) {
    if (!this.isAnimate) {
      this.setCarouselDot(toIndex)
      this.setCarouselPanel(
        this.$$panels[fromIndex],
        this.$$panels[toIndex],
        direction
      )
    }
  }

  getCurrentIndex () {
    return [...this.$$dots].indexOf(
      this.$container.querySelector('.carousel-dot.active')
    )
  }

  getPrevIndex () {
    return (
      (this.getCurrentIndex() - 1 + this.$$dots.length) % this.$$dots.length
    )
  }

  getNextIndex () {
    return (this.getCurrentIndex() + 1) % this.$$dots.length
  }

  setCarouselPanel ($from, $to, direction) {
    this.isAnimate = true
    this.resetCarouselPanel($from, $to, direction)
    setTimeout(() => {
      this.moveCarouselPanel($from, $to, direction)
    })
  }

  resetCarouselPanel ($from, $to, direction) {
    // $from.style = ''
    // $to.style = ''
    Object.assign($from.style, {
      transform: `translateX(0)`,
      zIndex: 1
    })
    Object.assign($to.style, {
      transform: `translateX(${direction === 'right' ? '-' : ''}100%)`,
      zIndex: 1
    })
  }

  moveCarouselPanel ($from, $to, direction) {
    Object.assign($from.style, {
      transform: `translateX(${direction === 'left' ? '-' : ''}100%)`,
      transition: `all .4s`
    })
    Object.assign($to.style, {
      transform: `translateX(0)`,
      transition: `all .4s`
    })
    setTimeout(() => {
      $from.style = ''
      $to.style = ''
      $from.classList.toggle('active')
      $to.classList.toggle('active')
      this.isAnimate = false
    }, 400)
  }

  setCarouselDot (index) {
    this.$$dots.forEach($carouselDot => $carouselDot.classList.remove('active'))
    this.$$dots[index].classList.add('active')
  }

  pauseCarousel () {
    if (this.timer) {
      clearInterval(this.timer)
      this.timer = null
    }
  }

  playCarousel () {
    if (this.options.autoplay && !this.timer) {
      this.timer = setInterval(() => {
        this.setCarousel(this.getCurrentIndex(), this.getNextIndex(), 'left')
      }, this.options.interval)
    }
  }
}

export default Carousel
