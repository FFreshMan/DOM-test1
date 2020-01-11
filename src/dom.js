window.dom = {
  find(selector, scope) {
    return (scope || document).querySelectorAll(selector);
  }, //scope用来指定在哪个标签里找

  style(node, name, value) {
    if (arguments.length === 3) {
      // dom.style(div,"color","red")
      node.style[name] = value;
    } else if (arguments.length === 2) {
      if (typeof name === "string") {
        // dom.style(div,"color")想知道color的值
        return node.style[name];
      } else if (name instanceof Object) {
        //想写入一个属性,注意这里Object大写
        const object = name;
        for (let key in object) {
          node.style[key] = object[key];
        }
      }
    }
  },
  each(nodeList, fn) {
    for (let i = 0; i < nodeList.length; i++) {
      fn.call(null, nodeList[i]);
    }
  }, //遍历

  on(node, eventName, fn) {
    node.addEventListener(eventName, fn);
  } //事件监听
};
