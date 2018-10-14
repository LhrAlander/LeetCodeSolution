const pruneTree = function(root) {
  if (!root) return null
  root.left = pruneTree(root.left)
  root.right = pruneTree(root.right)
  const isLeaf = !root.left && !root.right
  if (isLeaf && root.val !== 1) return null
  return root
};