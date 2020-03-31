import '../../style/tab.scss'

class Tabs {
  constructor ($container) {
    this.$container = $container
    this.$$tabItems = $container.querySelectorAll('.tab-item')
    this.$$tabPanels = $container.querySelectorAll('.tab-panel')
    this.$tabLine = $container.querySelector('.tab-line')
    this.initTabs()
    this.bindTabs()
  }
  initTabs () {
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
  setTabItem($tab) {
    this.$$tabItems.forEach($tab => $tab.classList.remove('active'))
    $tab.classList.add('active')
  }
  setTabPanel($tab) {
    const index = [...this.$$tabItems].indexOf($tab)
    this.$$tabPanels.forEach($panel => $panel.classList.remove('active'))
    this.$$tabPanels[index].classList.add('active')
  }
  setTabLine(width, left) {
    this.$tabLine.style.width = `${width}px`
    this.$tabLine.style.transform = `translateX(${left}px)`
  }
}

export default Tabs

// tab key
// callback event
// set tab header dom
