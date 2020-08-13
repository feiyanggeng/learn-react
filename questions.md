> 软件设计：对象对于扩展是开放的（继承、多态），对于修改是封闭的（保证了对象的稳定）

### react 问题

一、 react 生命周期

react 生命周期分为三部分  
1、mounting（挂载） 阶段  
. construct  
. static getDerivedStateFromProps  
. componentWillMount (将要被废弃)
. render  
. componentDidMount

2、updating（更新）阶段  
. static getDerivedStateFromProps / componentWillReceivedProps（将要被废弃）  
`getDerivedStateFromProps` 这个生命周期函数会有两个参数 nextProps（组件接受到的新的 props） 和 prevState（组件当前的数据） 可以判断这两个变量中的值是否相等就可以判断是否接受到了新的 props 值，该函数必须返回一个对象作为 setState 的 updater 去更新组件 返回 null 将不进行更新，该函数将会在初始化 construct 之后和每次组件更新时最先执行，（new prpos、 setState、 forceUpdate 都是因为造成了组件的更新所以触发了该函数）

`componentWillReceivedProps` 函数只有在接受到新的 props 才会被执行，函数有一个参数 nextProps 利用 nextprops 和 this.props 进行比较可以判断是否获取到了新的 props ，为什么将该函数废弃掉？如果 state 里面的值和 props 有密切的关系，那么再该方法中判断了获取到了新的 props 再将其更新到 state 相应的字段上，那么就违背了 react 唯一数据源

. shouldComponentUpdate  
该函数返回布尔值，当返回 false 时将阻止 render，返回 true 时正常执行。函数有两个参数 nextProps（新的 props）和 nextState（新的 state）
. render  
. getSnapshotBeforeUpdate  
. componentDidUpdate

3、Unmounting（卸载）阶段  
. componentWillUnmount

二、 react 中 key 值得作用  
key 的作用主要是为了高效的更新虚拟 DOM
在 diff 算法中 key 是为了在 diff 算法执行时更快的找到对应的节点，提高 diff 速度，如果 key 值在旧的 dom 节点中存在则保留进一步去比较组件内部的属性做更新，如果 key 值在旧的 dom 中没有就会做新增，对应的旧的 key 在新的 dom 树中没有 就会被删除  
diff 的简单过程，1、会在 sameVnode 函数中对新旧节点的 key 和 sel 进行比较判断两个节点是否有可以比较的需要，换言之如果这两个值有一个不一样就不会对他们的子节点进行比较了直接将旧节点 remove 掉新节点 insert 进去。2、如果新旧节点有可比较的必要，就会在 patchVnode 方法中对接点进行更新，然后判断两个节点是否都有子节点，如果有进行 updateChildren 方法对子节点进行比较更新。3、在 updateChildren 中对 oldCh 和 newCh 进行头尾比较如果一方的 startIndex 大于了 endIndex 就说明一方比较完成了 结束比较，如果设置了 key 还可以利用从 key 生成的 oldKeyToIdx 对象中找到对应的 节点对象进行比较，所以设置了 key 可以更加高效的利用虚拟 dom

当一个组件的 key 发生改变 react 会重新构建这个组件而不是更新

三、 react 组件如何判断获取到了新的 props？  
可以在 shouldComponentUpdate 中去判断 nextprops 和 this.props 如果发生了变化返回 true 执行 render 函数，没有发生变化的话返回 false 不去执行 render 函数，减少 DOM 的更新

react.StrictMode 严格模式会通过两次调用 constructor 和 render 函数来更好的检测不符合预期的生命周期函数，在生产环境下不会有这种情况产生  
下列函数会执行两次

. 类组件的 constructor,render 和 shouldComponentUpdate 方法  
. 类组建的静态方法 getDerivedStateFromProps  
. 函数组件方法体  
. 状态更新函数(setState 的第一个参数)  
. 传入 useState,useMemo 或 useReducer 的函数

四、react-redux 中 connect 是如何将 store 中的 state 映射到组件的 props 中的？  
connect 方法会返回一个方法，这个方法将会创建一个组件包裹我们自己的组件，该方法会获取到 store 中的数据作为 props 传入我们的组件中

五、react 中函数组件和类组件之间有什么区别？

1. hooks 之前 函数组件没法使用 state，以及生命周期函数
2. 捕获渲染时的值。 类组件中的 this 会随着时间的推进不断在进行更新，以确保我们在使用的时候拿到的是最新的 this，当我们在获取了此时的值后过了段时间再去展示，但是在这过程中其他操作改变了这个值，我们在展示的时候的值就会与我们获取到的值不一致，可以利用闭包的特性回避这个问题。而函数组件不会有这个问题。

六、react hook
useState： (第一个参数为 state 属性名, 第二个参数为修改参数的方法名)
useEffect： (第一个参数方法实体，组件 Didmount 和 DidUpdate 都会执行，第二个参数表示只有这个 state 改变的时候才会执行 以 [xxx] 这种形式传入 )

#### 编程网站

https://codesandbox.io/
