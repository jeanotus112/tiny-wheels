// import Pager from './Pager/pager'
import Tabs from './Tabs'

// const pager = new Pager(document.querySelector('.pager'))
// console.log(pager.$container)

new Tabs(document.querySelector('.tabs'), ($tab, index) => {
    console.log($tab, index)
})