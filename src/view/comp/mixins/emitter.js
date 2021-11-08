function broadcast(componentName, eventName, params) {
  this.$children.forEach(child => {
    const name = child.$options.name;

    if (name === componentName) {
      // this.$emit 触发事件
      child.$emit.apply(child, [eventName].concat(params));
    } else {
      // 递归 child
      broadcast.apply(child, [componentName, eventName].concat([params]));
    }
  });
}
export default {
  methods: {
    dispatch(componentName, eventName, params) {
      let parent = this.$parent || this.$root;
      let name = parent.$options.name;
      // 通过while不断循环, 找到对应的实例
      while (parent && (!name || name !== componentName)) {
        parent = parent.$parent;

        if (parent) {
          name = parent.$options.name;
        }
      }
      // 如果找到就触发
      if (parent) {
        parent.$emit.apply(parent, [eventName].concat(params));
      }
    },
    broadcast(componentName, eventName, params) {
      // 为了递归broadcast，把方法抽出来
      broadcast.call(this, componentName, eventName, params);
    }
  }
};
