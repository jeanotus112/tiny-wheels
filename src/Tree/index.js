import '../../style/tree.scss'

class Tree {
  constructor (options) {
    const defaultOptions = {
      element: null,
      data: [],
      toggle: () => {}
    }
    this.options = Object.assign({}, defaultOptions, options)
    this.$container = this.options.element
    this.$container.classList.add('tiny-tree')
    this.tree = this.options.data
    for (let index = 0; index < this.tree.length; index++) {
      this.initTree(this.tree[index])
    }
    // this.travelTree(this.tree[0], (node) => {
    //   console.log(node)
    // })
  }

  initTree (node) {
    const { $node, $arrow } = this.getTreeNode(node)
    if (!node.children) {
      return $node
    }
    const $children = this.getNodeChildren(node)
    $node.appendChild($children)
    this.$container.appendChild($node)
    this.setNode($arrow, $children, node)
    return $node
  }

  getTreeNode (node) {
    const $node = document.createElement('div')
    $node.setAttribute('class', 'tree-node')
    const $nodeContent = document.createElement('div')
    $nodeContent.setAttribute('class', 'node-content')
    const $arrow = this.getNodeArrow(node)
    const $title = this.getNodeTitle(node.title)
    $nodeContent.appendChild($arrow)
    $nodeContent.appendChild($title)
    $node.appendChild($nodeContent)
    return { $node, $arrow }
  }

  getNodeChildren (node) {
    const $children = document.createElement('div')
    $children.setAttribute('class', 'node-children')
    for (let i = 0; i < node.children.length; i++) {
      const $node = this.initTree(node.children[i])
      $children.appendChild($node)
    }
    return $children
  }

  getNodeArrow (node) {
    const $arrow = document.createElement('i')
    if (node.children) {
      const arrowClass = node.expand ? 'open' : ''
      $arrow.setAttribute(
        'class',
        `node-arrow iconfont iconios-arrow-forward ${arrowClass}`
      )
    } else {
      $arrow.setAttribute('class', 'node-arrow hide')
    }
    return $arrow
  }

  getNodeTitle (title) {
    const $title = document.createElement('span')
    $title.setAttribute('class', 'node-title')
    $title.innerText = title
    return $title
  }
  
  setNode ($arrow, $children, node) {
    let height = $children.offsetHeight
    if (!node.expand) {
      $children.style.height = '0'
    }
    $arrow.addEventListener('click', () => {
      height = $children.offsetHeight ? $children.offsetHeight : height
      $children.style.height = `${height}px`
      $arrow.classList.toggle('open')
      if (node.expand) {
        setTimeout(() => {
          $children.style.height = '0'
        })
      } else {
        setTimeout(() => {
          $children.style = ''
        }, 200);
      }
      node.expand = !node.expand
      this.options.toggle.call(null, node)
    })
  }

  travelTree (node, fn) {
    fn(node)
    if (!node.children) {
      return
    }
    for (let i = 0; i < node.children.length; i++) {
      this.travelTree(node.children[i], fn)
    }
  }
}

export default Tree
