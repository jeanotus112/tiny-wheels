import '../../style/pager.scss'

class Pager {
  constructor (options) {
    let defaultOptions = {
      element: null,
      total: 0,
      size: 10,
      current: 1,
      callback: () => {}
    }
    this.options = Object.assign({}, defaultOptions, options)
    this.pagerCurrent = this.options.current
    this.pagerTotal = this.getPagerTotal()
    this.initPager()
    this.setPager()
  }

  getPagerTotal () {
    const totalCount = this.options.total
    const perCount = this.options.size
    let pagerCount = 0
    if (totalCount % perCount === 0) {
      pagerCount = totalCount / perCount
    } else {
      pagerCount = (totalCount - totalCount % perCount) / perCount + 1
    }
    return pagerCount
  }

  initPager () {
    const $container = document.createElement('ul')
    $container.setAttribute('class', 'tiny-pager')
    this.options.element.appendChild($container)
    this.$container = $container
  }

  setPager () {
    this.getPager()
    this.removePager()
    this.renderPager()
    this.bindPager()
  }

  getPager () {
    let pages = [
      1,
      this.pagerTotal,
      this.pagerCurrent,
      this.pagerCurrent - 1,
      this.pagerCurrent - 2,
      this.pagerCurrent + 1,
      this.pagerCurrent + 2
    ]
    let u = unique(
      pages.filter(n => n >= 1 && n <= this.pagerTotal).sort((a, b) => a - b)
    )
    this.pagerDatas = u.reduce((prev, current, index, array) => {
      prev.push(current)
      if (
        array[index + 1] !== undefined &&
        array[index + 1] - array[index] > 1
      ) {
        prev.push('···')
      }
      return prev
    }, [])
  }

  renderPager () {
    console.log(this.pagerDatas)
    this.renderPagerPrev()
    this.pagerDatas.forEach(pagerData => {
      this.renderPagerItem(pagerData)
    })
    this.renderPagerNext()
  }

  removePager () {
    while (this.$container.firstChild) {
      this.$container.removeChild(this.$container.firstChild)
    }
  }

  renderPagerPrev () {
    const $pagerPrev = document.createElement('li')
    $pagerPrev.setAttribute('class', 'pager-prev')
    if (this.pagerCurrent === 1) {
      $pagerPrev.classList.add('disabled')
    }
    $pagerPrev.innerText = '<'
    this.$container.appendChild($pagerPrev)
  }

  renderPagerNext () {
    const $pagerNext = document.createElement('li')
    $pagerNext.setAttribute('class', 'pager-next')
    if (this.pagerCurrent === this.pagerTotal) {
      $pagerNext.classList.add('disabled')
    }
    $pagerNext.innerText = '>'
    this.$container.appendChild($pagerNext)
  }

  renderPagerItem (pagerData) {
    const $pagerItem = document.createElement('li')
    if (pagerData === this.pagerCurrent) {
      $pagerItem.setAttribute('class', 'pager-item')
      $pagerItem.classList.add('active')
    } else if (pagerData === '···') {
      $pagerItem.setAttribute('class', 'pager-more')
    } else {
      $pagerItem.setAttribute('class', 'pager-item')
    }
    $pagerItem.innerText = pagerData
    this.$container.appendChild($pagerItem)
  }

  bindPager () {
    this.bindPagerNav()
    this.bindPagerItem()
  }

  bindPagerNav () {
    const $pagerPrev = document.querySelector('.pager-prev')
    const $pagerNext = document.querySelector('.pager-next')
    $pagerPrev.addEventListener('click', () => {
      if (!$pagerPrev.classList.contains('disabled')) {
        this.pagerCurrent -= 1
        this.setPager()
      }
    })
    $pagerNext.addEventListener('click', () => {
      if (!$pagerNext.classList.contains('disabled')) {
        this.pagerCurrent += 1
        this.setPager()
      }
    })
  }

  bindPagerItem () {
    const $$pageItems = document.querySelectorAll('.pager-item')
    $$pageItems.forEach($item => {
      $item.addEventListener('click', () => {
        if (!$item.classList.contains('active')) {
          this.pagerCurrent = parseInt($item.innerText)
          this.setPager()
        }
      })
    })
  }
}

function unique (array) {
  // return [...new Set(array)]
  const object = []
  array.map(number => {
    object[number] = true
  })
  return Object.keys(object).map(s => parseInt(s, 10))
}

export default Pager
