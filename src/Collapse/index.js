import '../../style/collapse.scss'

class Collapse {
  constructor (options) {
    const defaultOptions = {
      element: '',
      callback: () => {},
      accordion: false
    }
    this.options = Object.assign({}, defaultOptions, options)
    this.$container = this.options.element
    this.initCollapse()
    this.setCollapse()
    this.bindCollapse()
  }

  initCollapse () {
    this.$container.classList.add('tiny-collapse')
    this.initCollapsePanels()
    this.initCollapseItems()
  }

  initCollapsePanels () {
    const $$collapsePanels = this.$container.children
    this.$$collapsePanels = [...$$collapsePanels]
    this.$$collapsePanels.forEach($panel => $panel.setAttribute('class', 'collapse-panel'))
  }

  initCollapseItems () {
    this.$$collapsePanels.forEach($panel => {
      const $collapseItem = document.createElement('div')
      $collapseItem.setAttribute('class', 'collapse-item')
      const $collapseHeader = this.initCollapseHeader($panel)
      $collapseItem.appendChild($collapseHeader)
      $collapseItem.appendChild($panel)
      this.$container.appendChild($collapseItem)
    })
  }

  initCollapseHeader ($panel) {
    const $collapseHeader = document.createElement('div')
    $collapseHeader.setAttribute('class', 'collapse-header')
    $collapseHeader.innerText = $panel.dataset.collapseName
    return $collapseHeader
  }

  setCollapse () {
    this.$$collapseItems = this.$container.querySelectorAll('.collapse-item')
    this.setCollapseItem()
  }

  setCollapseItem () {
    let collapseKeys = this.$container.dataset.collapseActive
    this.panelsHeight = []
    if (collapseKeys) {
      collapseKeys = collapseKeys.split(',')
      this.$$collapsePanels.forEach(($panel, index) => {
        this.panelsHeight.push($panel.offsetHeight)
        if (collapseKeys.indexOf($panel.dataset.collapseKey) !== -1) {
          this.$$collapseItems[index].classList.add('active')
          $panel.style.height = `${$panel.offsetHeight}px`
        } else {
          $panel.style.height = '0px'
        }
      })
    }
  }

  bindCollapse () {
    this.bindCollapseItems()
    this.bindCollapsePanels()
  }

  bindCollapseItems () {
    this.$$collapseItems.forEach(($item, index) => {
      $item.addEventListener('click', () => {
        if (this.options.accordion) {
          this.clearCollapse($item)
        }
        this.toggleCollapse($item, index)
        const collapseKey = this.$$collapsePanels[index].dataset.collapseKey
        const collapseActiveKeys = this.getCollapseActiveKeys()
        this.options.callback.call(null, $item, collapseKey, collapseActiveKeys)
      })
    })
  }

  bindCollapsePanels () {
    this.$$collapsePanels.forEach($panel => {
      $panel.addEventListener('click', (e) => {
        e.stopPropagation()
      })
    })
  }

  clearCollapse ($bindItem) {
    this.$$collapseItems.forEach(($item, index) => {
      if ($item !== $bindItem) {
        $item.classList.remove('active')
        this.$$collapsePanels[index].style.height = '0px'
      }
    })
  }

  toggleCollapse ($bindItem, index) {
    if ($bindItem.classList.contains('active')) {
      $bindItem.classList.remove('active')
      this.$$collapsePanels[index].style.height = '0px'
    } else {
      $bindItem.classList.add('active')
      this.$$collapsePanels[index].style.height = `${this.panelsHeight[index]}px`
    }
  }

  getCollapseActiveKeys () {
    const collapseActiveKeys = []
    this.$$collapseItems.forEach(($item, index) => {
      if ($item.classList.contains('active')) {
        collapseActiveKeys.push(this.$$collapsePanels[index].dataset.collapseKey)
      }
    })
    return collapseActiveKeys
  }
}

export default Collapse
