function checkArray(key) {
  let arr = [1, 2, 3, 4]
  return arr.indexOf(key) > -1 ? true : false
}
const permission = {
  // 被绑定元素插入父节点时调用，保证父节点存在
  inserted: function (el, binding) {
    let permission = binding.value
    if (permission) {
      let hasPermission = checkArray(permission)
      // console.log(hasPermission, el.parentNode);
      if (!hasPermission) {
        el.parentNode && el.parentNode.removeChild(el)
      }
    }
  }
}

export default permission
