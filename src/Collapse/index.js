import '../../style/collapse.scss'

class Collapse {
  constructor (options) {
    let defaultOptions = {
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
    if (collapseKeys) {
      collapseKeys = collapseKeys.split(',')
      this.$$collapsePanels.forEach(($panel, index) => {
        if (collapseKeys.indexOf($panel.dataset.collapseKey) !== -1) {
          this.$$collapseItems[index].classList.add('active')
        }
      })
    }
  }

  bindCollapse () {
    this.$$collapseItems.forEach(($collapseItem, index) => {
      $collapseItem.addEventListener('click', () => {
        if (this.options.accordion) {
          this.$$collapseItems.forEach($item => {
            if ($item !== $collapseItem) {
              $item.classList.remove('active')
            }
          })
        }
        $collapseItem.classList.toggle('active')
        const collapseKey = this.$$collapsePanels[index].dataset.collapseKey
        const collapseActiveKeys = this.getCollapseActiveKeys()
        this.options.callback.call(null, $collapseItem, collapseKey, collapseActiveKeys)
      })
    })
  }

  getCollapseActiveKeys() {
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