# Vue.js高仿饿了么外卖App课程总结


历时一个多月终于学完了黄轶老师的这门Vue课程，期间考试什么的耽误了不少，总的来说肯定是受益匪浅，感受到了Vue实战的魅力。以前总是看文档，敲小demo，不仅感受不到文档的重点，怎么去运用，还容易学了忘，忘了学。借着昨天刚刚学完的契机，趁热打铁，写一点自己的收获，做个总结，方便以后的查阅。

---


## 先上几张自己的成果图
首页展示（商品页） | 商品详情
---|---
![首页](https://github.com/lihaonanGY/small_demo/blob/master/img_repositories/shangpin.png?raw=true) | ![商品详情](https://github.com/lihaonanGY/small_demo/blob/master/img_repositories/shangpinxiangqing.png?raw=true)

商家页 | 商家详情
---|---
![商家页](https://github.com/lihaonanGY/small_demo/blob/master/img_repositories/shangjia.png?raw=true) | ![商家详情](https://github.com/lihaonanGY/small_demo/blob/master/img_repositories/shangjiaxiangqing.png?raw=true)

评论页 | 购物车页
---|---
![评论页](https://github.com/lihaonanGY/small_demo/blob/master/img_repositories/pinglun.png?raw=true) | ![购物车页](https://github.com/lihaonanGY/small_demo/blob/master/img_repositories/gouwuche.png?raw=true)

## 课程笔记

第一次学习是边看着视频边跟着敲，感觉很多点一些小细节，记忆很模糊，于是准备再过一遍视频和文档，看看有没有更多的收获，把知识点记录下来。

走着~

### Vue.js概述

1. 随着旧浏览器的逐渐淘汰（ie8- "不支持es5"），和移动端需求的增加，Vue越来越火。
2. 轻量级MVVM框架。
3. 数据驱动+组件化的前端框架。

#### 什么是MVVM框架
![mvvm](https://github.com/lihaonanGY/small_demo/blob/master/img_repositories/mvvm.png?raw=true)
>ViewModel是连接视图和数据的中间件，视图和数据不能直接通信，通过ViewModel来进行通信，ViewModel实现一个观察者，当数据发生变化ViewModel可以观察到变化，通知视图进行更新，而用户操作视图ViewModel监听到视图的变化，通知数据更新。

#### 对比React和Angular
1. Vue.js更轻量，gzip只有20k的大小。比其他两种框架小了一半还多。
2. Vue.js学习曲线更平稳，更容易上手。
3. Vue借鉴了Angular的指令，和React的指令化，吸收两家之长。

#### Vue的核心思想
1. 数据驱动
- dom是数据的自然映射。
> 在对Vue实例化的时候会对其中的data进行Object.defineProperty处理，全部添加getter和setter。同时Vue会对模版进行编译解析生成一个指令对象，每个指令对象都会关联一个watcher，当对指令对象进行求值的时候就会触发getter，将值收集到watcher中，当值改变的时候就会出发setter，然后通知对应的watcher，watcher会再次进行求值对比新旧值，如果值改变了，watcher会通知到指令，调用指令的update方法，然后更新视图。

![数据响应](https://github.com/lihaonanGY/small_demo/blob/master/img_repositories/shujuxiangying.png?raw=true)

2. 组件化
- 扩展HTML元素，封装可重用代码。
- 一个页面可以拆分成许许多多的组件，组件组合在一起形成一个页面。每一个组件都对应着一个ViewModel。
- 页面不过是组件的容器，组件可以嵌套自由组合形成完整的页面。

### Vue-cli

Vue-cli是Vue的脚手架工具

安装文档要求node版本在4以上（我在安装的时候自己的node版本是4.4.4，就没有管他，结果安装了四五次，都不成功，找了各种原因，最后更新了node，问题解决了）
```
// 简单记录一下安装过程
npm install -g vue-cli
vue init webpack [project-name]
//然后自定义选择是否开启一些功能
//最后进入目录，安装依赖
npm run dev
```

### SVG转换图标字体
将SVG图片制作成字体文件，便于在项目中的使用。

1. 进入[icomoon网站](https://icomoon.io/)。
2. icomoonAPP → import icons  自己导入需要转换成字体的SVG。
3. Generate Font
4. 可以在preference更改一些设置，例如文件名，类名前缀，支持浏览器情况
5. Download
6. 将fonts文件和style.css放在自己的项目中，通过添加类名的形式可以使用字体图标。