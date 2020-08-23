const tree = [null, 5, 3, 8, 1, 4, 7, 9];

function Node(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}

let root = new Node(5);
let left = new Node(3);
let right = new Node(8);

root.left = left;
root.right = right;

function traversal(node) {
    if (node === null) return;

    console.log("preorder", node.val);
    traversal(node.left);
    console.log("inorder", node.val);
    traversal(node.right);
    console.log('postorder', node.val);
}