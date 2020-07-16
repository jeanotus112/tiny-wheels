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

const scrollCt = document.querySelectorAll('.lazy-load-container')
let originData = [1, 2, 3]

const fetchData = () => {
  new Promise((resolve, reject) => {
    setTimeout(() => {
      let res = [...originData]
      resolve(res)
    }, 400)
  }).then(res => {
      const fragment = document.createDocumentFragment()
      res.forEach((num, i) => {
        originData[i] = num + 3

        const li = document.createElement('li')
        const h2 = document.createElement('h2')
        h2.innerText = `${num}`
        li.append(h2)
        fragment.appendChild(li)
      })
      scrollCt[0].appendChild(fragment)
    }
  )
}

new InfiniteScroll({
  container: scrollCt[0],
  enableLazyLoad: false,
  immediate: true,
  callback: fetchData
})

new InfiniteScroll({
  container: scrollCt[1],
  enableLazyLoad: true,
  // placeholder: '../asset/placeholder.jpg'
})


