import '../../style/tab.scss'

class Tabs {
  constructor ($container) {
    this.$container = $container
    this.$$tabItems = $container.querySelectorAll('.tab-item')
    this.$$tabPanels = $container.querySelectorAll('.tab-panel')
    this.$tabLine = $container.querySelector('.tab-line')
    this.init()
    this.bind()
  }
  init () {
    this.$tabLine.style.width = `${this.$$tabItems[0].offsetWidth}px`
  }
  bind () {
    this.$$tabItems.forEach($tab => {
      $tab.onclick = () => {
        const index = [...this.$$tabItems].indexOf($tab)
        this.$$tabItems.forEach($tab => $tab.classList.remove('active'))
        $tab.classList.add('active')
        this.$tabLine.style.width = `${$tab.offsetWidth}px`
        this.$tabLine.style.transform = `translateX(${$tab.offsetLeft}px)`
        this.$$tabPanels.forEach($panel => $panel.classList.remove('active'))
        this.$$tabPanels[index].classList.add('active')
      }
    })
  }
}

export default Tabs
