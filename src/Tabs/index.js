import '../../style/tab.scss'

class Tabs {
  constructor ($container) {
    this.$container = $container
    this.$$tabPanels = $container.querySelectorAll('.tab-panel')
    this.initTabs()
    this.setTabs()
    this.bindTabs()
  }

  initTabs () {
    const $tabHeader = document.createElement('div')
    $tabHeader.setAttribute('class', 'tab-header')
    this.$$tabPanels.forEach($panel => {
      const $tabItem = document.createElement('span')
      $tabItem.setAttribute('class', 'tab-item')
      $tabItem.innerText = $panel.dataset.name
      $tabHeader.appendChild($tabItem)
    })
    const $tabLine = document.createElement('span')
    $tabLine.setAttribute('class', 'tab-line')
    $tabHeader.appendChild($tabLine)
    this.$container.insertBefore($tabHeader, document.querySelector('.tab-content'))
  }

  setTabs () {
    this.$$tabItems = this.$container.querySelectorAll('.tab-item')
    this.$tabLine = this.$container.querySelector('.tab-line')
    const { offsetWidth, offsetLeft } = this.$$tabItems[0]
    this.setTabItem(this.$$tabItems[0])
    this.setTabLine(offsetWidth, offsetLeft)
    this.setTabPanel(this.$$tabItems[0])
  }

  bindTabs () {
    this.$$tabItems.forEach($tab => {
      $tab.addEventListener('click', () => {
        this.setTabItem($tab)
        this.setTabLine($tab.offsetWidth, $tab.offsetLeft)
        this.setTabPanel($tab)
      })
    })
  }

  setTabItem ($tab) {
    this.$$tabItems.forEach($tab => $tab.classList.remove('active'))
    $tab.classList.add('active')
  }

  setTabPanel ($tab) {
    const index = [...this.$$tabItems].indexOf($tab)
    this.$$tabPanels.forEach($panel => $panel.classList.remove('active'))
    this.$$tabPanels[index].classList.add('active')
  }

  setTabLine (width, left) {
    this.$tabLine.style.width = `${width}px`
    this.$tabLine.style.transform = `translateX(${left}px)`
  }
}

export default Tabs

// tab key
// callback event
// set tab header dom
