## 汤姆猫项目管理平台
    [github地址](https://github.com/wangtomcat/Project-management)
    [项目展示地址](http://134.175.16.225:3030)
    账号: 18879098571
    密码: 123456

### 描述
    一款管理项目的APP,node创建的服务
    使用 [react](https://zh-hans.reactjs.org/) 框架构建, react-redux 仓库管理数据,项目总的依赖
    react-router-dom
    redux
    redux-thunk
    swiper
    lib-flexible
    postcss-pxtorem
    node-sass
    react-redux
     

### 结构和功能
+ src
  + components
    + Header 头部组件
    + Loading 页面还未加载之前显示的加载组件
    + Tabs 底部的tab组件
    + Task 弹出提示组件
  + pages
    + common 公共部分组件
      + AppScroll 封装的滚动组件
      + NotFound 404页面组件
    + home 首页 (展示部分，消息部分是数据请求过来的，展示最新四条数据，要查看更多信息点击更多按钮跳转消息页面的通知部分) 
    + login 登录 (登录账户：18879098571,密码：123456,因为是管理类型的APP所以没有注册的功能)
    + message 消息, (三个部分、待办事项：展示的是从Pro页面新建的项目;已办事项：处理完成后展示的项目;通知:为所有的消息的展示)
      + showMessage 展示pro新建的项目
      + dealPro 处理项目 (处理新建的项目,启动项目,改变项目的状态为pending)
    + pro 项目,(分为新建项目; 查看进行中的项目;查看关闭/完成的项目;项目统计)
      + newPro 新建项目页面,填写相关信息新建项目
      + proDetail 处理项目页面,在此页面处理项目, 改变项目的状态为finished/close,处理完成后项目会到各自的模块中去
      + project 为进行中和完成/关闭的项目展示页面,
      + showpro 统计项目的页面
    + mine 我的页面 
      + changepwd 更改登录密码页面
      + infomation 查看并修改个人信息页面
  + store
    + reducers 仓库模块 
      + header.js 存储头部该显示的文字,以及是否需要返回键
      + home.js 目前只存储请求到的消息数据及action操作
      + mine.js 存储个人信息数据及action操作
      + pro.js 存储项目的数据及action操作
    + index.js 仓库主文件
  + style 样式 (reset样式及全局样式)
  + util
    + api.js (管理数据请求的api)
    + countTime.js (处理时间的工具函数)
    + Http.js (封装的fetch请求)
  + App.js
  + index.js 程序入口文件 

### 流程

    登录 --> 输入账号/密码登录成功
    登录 --> 忘记密码？ --> 修改密码登录

    首页 --> 展示页面
    首页 --> 最新消息 --> 点击更多 --> 跳转消息页面的通知选项页


    消息页面 --> 待办(展示新建的项目)  --> 已完成 (展示完成的项目) --> 通知(展示所有消息)


    项目页面 -->  新建项目  -->  消息页面(待办页面为新建的项目) --> 待办选项子页面,启动项目  -->  项目页面中, 进行中的项目能看到启动的项目   -->   进行中的项目页面子页面, 可以完成或关闭项目 --> 关闭/完成的页面中可以查看到关闭和完成的全部的项目 --> 消息页面的已完成选项, 只能查看到完成的项目


    我的页面  --> 个人资料 --> 查看或修改个人信息
    我的页面 --> 修改密码  
      
### 问题

    头部问题:
    因为头部是在APP页面一次引入的，头部的返回键及文字，我是通过redux来控制的，进入每个页面，各自处理header仓库中的数据，每个单独的页面这个都是没有问题的，但是如果页面有子页面的话，那当从子页面点击头部的返回键退回到上一次路由时，头部的的状态还是子页面的状态。
      


