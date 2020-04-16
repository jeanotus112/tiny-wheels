import '../../style/tree.scss'

class Tree {
  constructor ($container, data) {
    this.$container = $container
    this.tree = data
    this.travelTree(this.tree[0], (node) => {
      console.log(node)
    })
  }

  travelTree (node, fn) {
    fn(node)
    if (node.children) {
      for (let i = 0; i < node.children.length; i++) {
        this.travelTree(node.children[i], fn)
      }
    }
  }
}

export default Tree
