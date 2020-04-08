import Tabs from './Tabs'
import Collapse from './Collapse'
import Pager from './Pager'
import Carousel from './Carousel'

// const pager = new Pager(document.querySelector('.pager'))
// console.log(pager.$container)

new Tabs({
  element: document.querySelector('.tabs'),
  animated: true,
  callback: ($tab, key) => {
    console.log($tab, key)
  }
})

new Collapse({
  element: document.querySelector('.collapse'),
  accordion: false,
  callback: ($item, key, keys) => {
    console.log($item, key, keys)
  }
})

new Pager({
  element: document.querySelector('.pager'),
  total: 200,
  size: 20,
  current: 1,
  callback: number => {
    console.log(number)
  }
})

new Carousel({
  element: document.querySelector('.carousel'),
  height: '200px',
  index: 1,
  interval: 2000,
  autoplay: true
})
