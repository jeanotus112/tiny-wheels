import '../../style/tab.scss'

class Tabs {
  constructor ($container, callback = () => {}) {
    this.$container = $container
    this.initTabs()
    this.setTabs()
    this.bindTabs(callback)
  }

  initTabs () {
    this.$container.classList.add('tiny-tabs')
    const $tabPanels = this.initTabPanels()
    const $tabHeader = this.initTabHeader()
    this.$container.insertBefore($tabHeader, $tabPanels)
  }

  initTabPanels () {
    const $tabPanels = document.createElement('div')
    const $$tabPanels = this.$container.children
    this.$$tabPanels = [...$$tabPanels]
    $tabPanels.setAttribute('class', 'tab-panels')
    this.$$tabPanels.forEach($panel => {
      $panel.setAttribute('class', 'tab-panel')
      $tabPanels.appendChild($panel)
    })
    this.$container.appendChild($tabPanels)
    return $tabPanels
  }

  initTabHeader () {
    const $tabHeader = document.createElement('div')
    $tabHeader.setAttribute('class', 'tab-header')
    this.$$tabPanels.forEach($panel => {
      const $tabItem = this.initTabItem($panel)
      $tabHeader.appendChild($tabItem)
    })
    const $tabLine = this.initTabLine()
    $tabHeader.appendChild($tabLine)
    return $tabHeader
  }

  initTabItem ($panel) {
    const $tabItem = document.createElement('span')
    $tabItem.setAttribute('class', 'tab-item')
    $tabItem.innerText = $panel.dataset.tabName
    return $tabItem
  }

  initTabLine () {
    const $tabLine = document.createElement('span')
    $tabLine.setAttribute('class', 'tab-line')
    return $tabLine
  }

  setTabs () {
    this.$$tabItems = this.$container.querySelectorAll('.tab-item')
    this.$tabLine = this.$container.querySelector('.tab-line')
    this.setTabStatus()
    const tabIndex = this.getTabIndex()
    if (this.$$tabItems[tabIndex]) {
      const { offsetWidth, offsetLeft } = this.$$tabItems[tabIndex]
      this.setTabItem(this.$$tabItems[tabIndex])
      this.setTabLine(offsetWidth, offsetLeft)
      this.setTabPanel(this.$$tabPanels[tabIndex])
    }
  }

  getTabIndex () {
    const tabKey = this.$container.dataset.tabActive
    let tabIndex = 0
    if (tabKey) {
      this.$$tabPanels.forEach(($panel, index) => {
        if ($panel.dataset.tabKey === tabKey) {
          tabIndex = index
        }
      })
    }
    return tabIndex
  }

  bindTabs (callback) {
    this.$$tabItems.forEach($tab => {
      $tab.addEventListener('click', () => {
        if (!$tab.classList.contains('disabled')) {
          const index = [...this.$$tabItems].indexOf($tab)
          this.setTabItem($tab)
          this.setTabLine($tab.offsetWidth, $tab.offsetLeft)
          this.setTabPanel(this.$$tabPanels[index])
          callback.call(null, $tab, index)
        }
      })
    })
  }

  setTabStatus () {
    const tabKey = this.$container.dataset.tabDisabled
    if (tabKey) {
      this.$$tabPanels.forEach(($panel, index) => {
        if ($panel.dataset.tabKey === tabKey) {
          this.$$tabItems[index].classList.add('disabled')
        }
      })
    }
  }

  setTabItem ($tab) {
    this.$$tabItems.forEach($tab => $tab.classList.remove('active'))
    $tab.classList.add('active')
  }

  setTabPanel ($panel) {
    this.$$tabPanels.forEach($panel => $panel.classList.remove('active'))
    $panel.classList.add('active')
  }

  setTabLine (width, left) {
    this.$tabLine.style.width = `${width}px`
    this.$tabLine.style.transform = `translateX(${left}px)`
  }
}

export default Tabs
