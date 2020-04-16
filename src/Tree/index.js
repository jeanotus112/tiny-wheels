import '../../style/tree.scss'

class Tree {
  constructor ($container, data) {
    this.$container = $container
    this.tree = data
  }

  travelTree (node, fn) {
    if (!node.children) {
      return
    }
    fn(node)
    for (let i = 0; i < node.children.length; i++) {
      this.travelTree(node.children[i], fn)
    }
  }
}

export default Tree
