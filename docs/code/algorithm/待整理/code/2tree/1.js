/**
 * @description二叉树结点的构造函数
 * @param {*} val
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

//尝试构造一个二叉树
const tree = new TreeNode("A");
tree.left = new TreeNode("B");
tree.right = new TreeNode("C");
tree.left.left = new TreeNode("D");
tree.left.right = new TreeNode("E");
tree.right.right = new TreeNode("F");
console.log(tree);
// 相当于下面这个结构：
const root = {
  val: "A",
  left: {
    val: "B",
    left: {
      val: "D",
    },
    right: {
      val: "E",
    },
  },
  right: {
    val: "C",
    right: {
      val: "F",
    },
  },
};

/**
 * @deprecated递归遍历
 * @param {*} node
 * @returns
 */
// 先序遍历：
function preorder(node) {
  if (!node) return;
  console.log("current value: ", node.val);
  preorder(node.left);
  preorder(node.right);
}
preorder(tree);
// current value:  A、B、D、E、C、F

// 中序遍历：
function inorder(node) {
    if (!node) return;
    inorder(node.left);
    console.log("current value: ", node.val);
    inorder(node.right);
  }
  inorder(tree);
  // current value:  D、B、E、A、C、F

  // 后序遍历：
function postorder(node) {
    if (!node) return;
    postorder(node.left);
    postorder(node.right);
    console.log("current value: ", node.val);
  }
  postorder(tree);
  // current value: D、E、B、F、C、A


debugger;
