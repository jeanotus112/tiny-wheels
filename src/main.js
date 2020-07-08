import Tabs from './Tabs'
import Collapse from './Collapse'
import Pager from './Pager'
import Carousel from './Carousel'

import Tree from './Tree'
import treeDatas from './data'
import InfiniteScroll from './InfiniteScroll'

import '../asset/iconfont/iconfont.css'

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
  interval: 3000,
  autoplay: true
})

new Tree({
  element: document.querySelector('.tree'),
  data: treeDatas,
  multiple: true,
  toggle: node => {
    console.log(node)
  },
  select: (nodes, node) => {
    console.log(nodes, node)
  }
})

const scrollCt = document.querySelector('.lazy-load-container')
let originData = [1, 2, 3, 4, 5, 6, 7]

new InfiniteScroll({
  container: scrollCt,
  enableLazyLoad: false,
  callback: () => {
    new Promise((resolve, reject) => {
      setTimeout(() => {
        let res = originData.map(num => num + 7)
        resolve(res)
      }, 400)
    }).then(res => {
        const fragment = document.createDocumentFragment()
        res.forEach((num, i) => {
          originData[i] = num

          const li = document.createElement('li')
          const h2 = document.createElement('h2')
          h2.innerText = `${num}`
          li.append(h2)
          fragment.appendChild(li)
        })
        scrollCt.appendChild(fragment)
      }
    )
  }
})


