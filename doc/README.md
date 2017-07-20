# Vue.js高仿饿了么外卖App课程总结


历时一个多月终于学完了黄轶老师的这门Vue课程，期间考试什么的耽误了不少，总的来说肯定是受益匪浅，感受到了Vue实战的魅力。以前总是看文档，敲小demo，不仅感受不到文档的重点，怎么去运用，还容易学了忘，忘了学。借着昨天刚刚学完的契机，趁热打铁，写一点自己的收获，做个总结，方便以后的查阅。

---
## 目录
[toc]

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

### mock数据
前后端分离，前端自己模拟数据进行，前后端同时开发，不需要等待接口。只需要事先与后台共同拟定好接口文档即可。

利用webpack，express的router来编写请求。
 ```
var app = express();
// 先拿到自己模拟的数据data.json
// 将data.json引入到dev-server.js中
var appData = require('../data.json');
// 拿到appData数据对象中的某几个数据对象
var goods = appData.goods;
var seller = appData.seller;
var ratings = appData.ratings;
//定义一个路由
var apiRoutes = express.Router();
//编写接口
apiRoutes.get('/seller', function (req, res) {
    res.json({
        errNo: 0,
        data: seller
    });
});
//使用这个接口 express.use([path]，[路由])
app.use('/api', apiRoutes);

 ```

 ### 移动端viewport设置
 定义视口宽度，限定用户不能缩放页面
 ```
 <meta name="viewport"
        content="width=device-width, // 视口宽度为设备宽度
        initial-scale=1.0, // 初始化缩放
        maximum-scale=1.0, // 最大缩放
        minimum-scale=1.0, // 最小缩放
        user-scalable=no"  // 禁止用户缩放
        >
 ```

 ### 自定义eslint代码风格
 根据自己或者公司的编码风格自定义调整eslint的配置

 ```
 /*************
 *.eslintrc.js*
 **************/
 // 在rules中添加自己的eslint配置，否则默认使用上面extend来的standard配置的模版
 'rules': {
    'semi': ['error', 'always'],  //总是要写分号，不写会报错
    'indent': 0, //忽略掉缩进检查，使用webstorm自动格式化来格式化缩进ctrl+alt+L
  }
 ```
 也可以使用/* eslint-disable */不进行eslint检测
 也可以/* eslint-disable no-new */ 对某段代码更改规则

 ### vue-router
 1. npm安装 在package.json中添加依赖  "vue-router": "^2.1.0"
 2. 在main.js入口文件中引入vue-router
 ```
  /*************
 *main.js******
 **************/

 import Vue from 'vue';
 import VueRouter from 'vue-router';
 //需要显示的使用Vue.use()安装路由模块
 Vue.use(VueRouter);
 //路由需要一个跟组件
 let app = Vue.extend(App);

// 创建一个路由实例，可以在参数中进行配置
let router = new VueRouter({
//当路由是active状态是默认给他配置一个类名
  linkActiveClass: 'active'
});

//定义路由规则，每个路由规则应该映射到一个组件
router.map({
  '/goods': {
    component: goods
  },
  '/ratings': {
    component: ratings
  },
  '/seller': {
    component: seller
  }
});
// 路由会创建一个挂在点，并且挂载到#app上
router.start(app, '#app');
// 默认路由到/goods
router.go('/goods');

  /*************
 *app.vue******
 **************/

<div class="tab">
    <div class="tab-item border-1px">
        <a v-link="{path:'/goods'}">商品</a>
    </div>
    <div class="tab-item">
        <a v-link="{path:'/ratings'}">评论</a>
    </div>
    <div class="tab-item">
        <a v-link="{path:'/seller'}">商家</a>
    </div>
</div>
<router-view :seller="seller" keep-alive></router-view>
 ```

 ### 移动端一像素border问题
 1px的东西在pc端浏览没有任何问题就是1px，但是在移动端有一个dpi的概念。
 因为不同手机像素密度不同，例如在iphone6手机里看可能就是比较粗的一根线。在不同设备像素比的情况下，不是真正的1px，有可能是1.5px，2px，2.5px...

 做成一个公共函数来解决这个问题
 ```
 border-1px($color)
  position relative
  &:after
    display block
    position absolute
    bottom 0
    left 0
    width 100%
    border-top 1px solid $color
    content ' '

@media (-webkit-min-device-pixel-ratio: 1.5),(min-device-pixel-ratio: 1.5)
  .border-1px
    &::after
      -webkit-transform: scaleY(0.7)
      transform: scaleY(0.7)

@media (-webkit-min-device-pixel-ratio: 2),(min-device-pixel-ratio: 2)
  .border-1px
    &::after
      -webkit-transform: scaleY(0.5)
      transform: scaleY(0.5)
     // 然后就可以通过给需要加一像素border的元素添加一个border-1px（rgba(x,x,x,x)）css样式，以及给这个元素加一个border-1px的类名即可。
 ```
  想了解更多有关dpi、设备像素密度、设备像素比的同学参考下面链接。

 >devicePixelRatio的官方的定义为：设备物理像素和设备独立像素的比例，也就是 devicePixelRatio = 物理像素 / 独立像素。

 [张鑫旭老师的设备像素比devicePixelRatio简单介绍](http://www.zhangxinxu.com/wordpress/2012/08/window-devicepixelratio/)

 [7种方法解决移动端Retina屏幕1px边框问题](http://www.jianshu.com/p/7e63f5a32636)

 ### Vue-resource
 1. 通过package.json npm安装依赖 "vue-resource": "^1.0.1"
 2. 在main中通过Vue.use(VueResource)，全局注册。
 3. 在created钩子中写请求，将请求到的数据传递给data中。
 ```
 this.$http.get('/api/seller?id=' + this.seller.id).then((response) => {
        response = response.body;
        if (response.errNo === ERR_OK) {
          // this.seller = Object.assign({}, this.seller, response.data);
           this.seller = response.data;
        }
      });
 ```

 ### 组件通信
 #### 父组件给子组件传递消息
 1. 在父组件中通过v-bind将数据传递至子组件。
 2. 在子组件中通过props接收到父组件传递过来的数据。
 3. 在接收的时候应该设置type，期望收到的类型。
 4. 如果有默认值也可以设置default。
 ```
 <shopcart  :select-foods="selectFoods"></shopcart>

  props: {
      selectFoods: {
        type: Array,
        default () {
          return [];
        }
      }
    }
 ```
 0. 还有一种父子组件通信方法
 1. 父组件可以拿到组件节点然后直接调用子组件中的函数，数据通过参数传递进去。
 ```
 <shopcart ref="shopcart"></shopcart>

  _drop(target) {
        this.$nextTick(() => {
          this.$refs.shopcart.drop(target);
        });
      },
 ```
 #### 子组件向父组件通信
 1. 在子组件中通过$emit('事件名'，传递的参数)派发事件
 2. 在父组件中通过on：事件名 ，监听到事件
 3. 调用函数拿到子组件中传递的参数
 ```
  this.$emit('add', event.target);
//在父组件监听到这个事件
 <cartcontrol @add="addFood" :food="food"></cartcontrol>
//父组件拿到这个dom元素的信息
addFood(target) {
    this._drop(target);
}
 ```

 ### Sticky footer

 **描述**：如果页面内容不够长的时候，页脚块粘贴在视窗底部；如果内容足够长时，页脚块会被内容向下顺移。

 1. 兼容性较好的方案
 - 这个方法虽然代码量稍稍大了一点但是优点就是兼容性比较好。
 - 最开始写三个层，一个固定在底部的层，与他平级有一个内容的包裹层（需要清除浮动），在他里面有一个实际装东西的内容层。
 ```
  <div class="wrapper clearfix">
    <div class="main"></div>
  </div>
  <div class="footer"></div>

  .wrapper
    min-height: 100%
    .main
      padding-bottom: footer需要的高度
  .close
    position: relative
    margin-top:负值比自己提上来
    height: xxx
    clear: both
 ```

 2. 更简单的通过flex实现。
 - 给整个页面设置一个最小高度，让他无论何时都铺满整个屏幕。
 - 包裹层添加display：flex 让他的排列方向变成垂直flex-direction：column
 - 把底部高度写死，自动撑开的部分设置flex：1即可。
 - 因为简单就不贴代码了。

参考链接：

[用flex实现Sticky footer布局](https://codepen.io/devatrox/pen/wztlx)

[三种Sticky footer的方法](http://www.cnblogs.com/shicongbuct/p/6487122.html)

### better-scroll
**简介：** 黄轶老师的一个滚动库由iScroll进行重写和扩展的，可以实现各种滚动轮播效果。废话不说上[github地址https://github.com/ustbhuangyi/better-scroll](https://github.com/ustbhuangyi/better-scroll)。

#### 使用方法：
- 这个库要求外层必须要有一个wrapper层来包裹住需要滚动的元素。
- BScroll 在实例化的时候要接收一个dom对象和一个选项对象
- 因为Vue数据驱动视图是异步的，而better-scrool有需要计算dom的高度，所以注意初始化better-scroll的时候必须在dom更新完成后。

```
<div id="wrapper" v-el:ul-wrapper>
    <ul>
	   <li>...</li>
	   <li>...</li>
	   ...
    </ul>
  </div>
```
```
import BScroll from 'better-scroll';
this.$nextTick(() => {
    this.ulScroll = new BScroll(this.$els.ulWrapper, {});
})
```
1. 和其他一样第一步先添加依赖。
2. 引入better-scroll，并且在dom更新后，初始化better-scroll。
3. 在初始化的时候传入dom对象，以及需要选择的参数。
- 例如：
    - click：true 是否派发click事件；
    - startY: 0 开始的Y轴位置；
    - probeType: 3;
        - 1 会截流,只有在滚动结束的时候派发一个 scroll 事件。
        - 2 在手指 move 的时候也会实时派发 scroll 事件，不会截流。
        - 3 除了手指 move 的时候派发scroll事件，在 swipe（手指迅速滑动一小段距离）的情况下，列表会有一个长距离的滚动动画，这个滚动的动画过程中也会实时派发滚动事件
    - 更详细的去[github文档](https://github.com/ustbhuangyi/better-scroll)里寻找。

#### 事件(event):

- beforeScrollStart - 滚动开始之前触发
- scrollStart - 滚动开始时触发
- scroll - 滚动时触发
- scrollCancel - 取消滚动时触发
- scrollEnd - 滚动结束时触发
- touchend - 手指移开屏幕时触发
- flick - 轻拂时触发
- refresh - 当 better-scroll 刷新时触发
- destroy - 销毁 better-scroll 实例时触发

栗子：
```
//实例化BScroll的时候在选项对象中传入参数的时候传入了probeType：3
//意味着会实时的派发scroll事件
    this.ulScroll = new BScroll(this.$els.ulWrapper, {
        probeType：3
    });
    //给这个滚动实例设置监听
    this.ulScroll.on('scroll',(pos) => {
        //可以拿到当前滚动的位置值,让他四舍五入得整数，取绝对值得到正值
        this.xxx = Math.abs(Math.round(pos.x));
        this.yyy = Math.abs(Math.round(pos.y));
    })
```
#### 方法
- crollTo(x, y, time, easing)
滚动到某个位置，x,y 代表坐标，time 表示动画时间，easing 表示缓动函数

    - Example:
```
let scroll = new BScroll(document.getElementById('wrapper'))
scroll.scrollTo(0, 500)
```
- scrollToElement(el, time, offsetX, offsetY, easing)
滚动到某个元素，el（必填）表示 dom 元素，time 表示动画时间，offsetX 和 offsetY 表示坐标偏移量，easing 表示缓动函数

- refresh() 强制 scroll 重新计算，当 better-scroll 中的元素发生变化的时候调用此方法。

### 购物车小球动画
#### 目标
我们要在添加购物车的时候做一个小球飞入购物车的动画.
#### 效果
![效果图](https://github.com/lihaonanGY/small_demo/blob/master/img_repositories/smallBall.png?raw=true)

1. 小球水平方向上有一个移动动画。
2. 小球在垂直方向上的动画类似于一个抛物线，不是单纯平移过去的。
3. 每一次触发动画的位置不同，需要计算。
4. 添加购物车、购物车以及他们的父组件都不同。
5. 抛物线使用贝塞尔曲线完成。
```
<div class="ball-container">
    <div v-for="ball in balls">
        <transition name="drop" @before-enter="beforeDrop" @enter="dropping" @after-enter="afterDrop">
            <div class="ball" v-show="ball.show">
              <div class="inner inner-hook"></div>
            </div>
        </transition>
    </div>
</div>
```
>在一个容器中装入几个小球（之所以要几个小球是因为可能会快速添加购物车会出现多个小球同时出现在屏幕上的情况）。给小球添加transition过渡效果，并且添加事件钩子触发一些函数。小球我们套了内外两层，因为过度的时候我们在两个方向上做不同的运动。小球默认v-show都是false只有发生动画的时候才会变成true。
```
//在这个过程中涉及到三个组件，一个父组件中包含了添加购物车这个组件以及购物车组件，这里涉及了他们互相通信的过程。
// 在添加购物车子组件点击增加的时候派发事件，将这个dom节点传递至父组件
 this.$emit('add', event.target);
//在父组件监听到这个事件
 <cartcontrol @add="addFood" :food="food"></cartcontrol>
//父组件拿到这个dom元素的信息
addFood(target) {
    this._drop(target);
}
//在父组件中调用购物车子组件的方法
_drop(target) {
    // 体验优化,异步执行下落动画
    this.$nextTick(() => {
        this.$refs.shopcart.drop(target);
    });
}
//现在才在购物车组件中拿到点击时的dom元素的信息
addFood(target) {
    this.drop(target);
}
//遍历一个非活跃状态的小球出来，让他显示出来，并且让它带上刚刚收到的dom元素的信息
drop(el) {
        for (let i = 0; i < this.balls.length; i++) {
          let ball = this.balls[i];
          if (!ball.show) {
            ball.show = true;
            ball.el = el;
            this.dropBalls.push(ball);
            return;
          }
        }
      }
      //设置进入前的位置
 beforeDrop(el) {
        let count = this.balls.length;
        while (count--) {
          let ball = this.balls[count];
          if (ball.show) {
            let rect = ball.el.getBoundingClientRect();
            let x = rect.left - 32;
            let y = -(window.innerHeight - rect.top - 22);
            el.style.display = '';
            el.style.webkitTransform = `translate3d(0,${y}px,0)`;
            el.style.transform = `translate3d(0,${y}px,0)`;
            let inner = el.getElementsByClassName('inner-hook')[0];
            inner.style.webkitTransform = `translate3d(${x}px,0,0)`;
            inner.style.transform = `translate3d(${x}px,0,0)`;
          }
        }
      },
      // 设置进入后的位置
      dropping(el, done) {
        /* eslint-disable no-unused-vars */
        let rf = el.offsetHeight;
        this.$nextTick(() => {
          el.style.webkitTransform = 'translate3d(0,0,0)';
          el.style.transform = 'translate3d(0,0,0)';
          let inner = el.getElementsByClassName('inner-hook')[0];
          inner.style.webkitTransform = 'translate3d(0,0,0)';
          inner.style.transform = 'translate3d(0,0,0)';
          el.addEventListener('transitionend', done);
        });
      },
      // 动画结束后将小球变回未激活状态
      afterDrop(el) {
        let ball = this.dropBalls.shift();
        if (ball) {
          ball.show = false;
          el.style.display = 'none';
        }
      }
    }

    //给内外层分别添加动画transition
    //借用贝塞尔曲线完成抛物线的制作
    transition: all 0.4s cubic-bezier(0.49, -0.29, 0.75, 0.41)
    transition: all 0.4s linear

```
[贝塞尔曲线制作](http://cubic-bezier.com)
## 个人感悟
完成这个项目收获真的非常大，感谢老师，花两天的时间好好的消化了一遍这个项目，写了这篇博客，又把一些很细节的，很容易忘记的东西回忆起来，不清楚的地方立即查文档看博客，非常充实的几天，进步很大。再一次感谢老师。

刚刚升入大四（哦不，是九月开学才大四呢），迫不及待想投身于互联网行业里，春招失利的我现在有大把的时间在这安静的准备秋招，春招自己就是太浮躁，半瓶水响叮当。好了继续学习去咯，但愿秋招自己能有个好结果。

## 联系方式

- **欢迎打扰**

- 邮箱：haonanl@outlook.com
- github: github.com/lihaonanGY
- QQ: 732209536
- 电话： 17785417686

