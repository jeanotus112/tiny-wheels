import Tabs from './Tabs'
import Collapse from './Collapse'

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