(this.webpackJsonptomc404=this.webpackJsonptomc404||[]).push([[14],{239:function(e,t,a){},616:function(e,t,a){"use strict";a.r(t);var n=a(10),i=a(11),c=a(16),s=a(14),o=a(15),l=a(0),r=a.n(l),m=a(19),p=a(20),h=(a(239),a(615)),g=a(34),u=[{id:1,title:"\u8bbe\u8ba1\u7ba1\u7406",icon:"iconfont icon-icon-",path:"/home",color:"#4A73FF"},{id:2,title:"\u91c7\u8d2d\u7ba1\u7406",icon:"iconfont icon-caigou-",path:"/home",color:"#F8BE39"},{id:3,title:"\u62a5\u8d26\u7ba1\u7406",icon:"iconfont icon-gongzi-copy",path:"/home",color:"#F03958"},{id:4,title:"\u5de5\u8d44\u7ba1\u7406",icon:"iconfont icon-money",path:"/home",color:"#30D288"},{id:5,title:"\u901a\u8baf\u5f55",icon:"iconfont icon-icons-",path:"/home",color:"#F03958"},{id:6,title:"\u4f9b\u5e94\u5546\u76ee\u5f55",icon:"iconfont icon-gongyingshangguanli",path:"/home",color:"#30D288"},{id:7,title:"\u73b0\u573a\u56fe\u5e93",icon:"iconfont icon-tongxunlu",path:"/home",color:"#4A73FF"},{id:8,title:"\u53d1\u9001\u901a\u77e5",icon:"iconfont icon-xiaoxi",path:"/home",color:"#F8BE39"}],d=function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.messageList.slice(0,4);return r.a.createElement("div",{className:"page"},r.a.createElement("div",{className:"swiper-container",ref:"container"},r.a.createElement("div",{className:"swiper-wrapper"},r.a.createElement("div",{className:"swiper-slide"},r.a.createElement("img",{src:"/img/1.jpeg",alt:""})),r.a.createElement("div",{className:"swiper-slide"},r.a.createElement("img",{src:"/img/2.jpg",alt:""})),r.a.createElement("div",{className:"swiper-slide"},r.a.createElement("img",{src:"/img/3.jpg",alt:""}))),r.a.createElement("div",{className:"swiper-pagination"})),r.a.createElement("div",{className:"h_news"},r.a.createElement("p",{className:"h_message"},"\u6700\u65b0\u6d88\u606f",r.a.createElement(p.b,{to:{pathname:"/message",state:3},className:"h_more"},"\u66f4\u591a")),e.map((function(e){return r.a.createElement("li",{className:"h_newMess",key:e.id},r.a.createElement("span",{className:"todo"===e.status?"h_red":"h_org"},"todo"===e.status?"\u5f85\u529e":"\u901a\u77e5"),r.a.createElement("p",null,e.message," ",e.message," ",e.message),r.a.createElement("span",{className:"h_time"},e.date))}))),r.a.createElement("div",{className:"h_tabs"},u.map((function(e){return r.a.createElement(p.c,{style:{color:e.color},className:"h_tab",key:e.id,to:e.path},r.a.createElement("span",{className:e.icon}),r.a.createElement("span",{className:"h_text"},e.title))}))))}},{key:"componentDidMount",value:function(){this.fetchList(),this.props.changeHasbackAction(),this.props.changeTitle(),new h.a(this.refs.container,{direction:"horizontal",loop:!0,speed:300,autoplay:{delay:2e3},pagination:{el:".swiper-pagination"}})}},{key:"fetchList",value:function(){this.props.messageList.length>0||this.props.getMessageList()}}]),t}(l.Component);t.default=Object(m.b)((function(e){return{hasBack:e.header.hasBack,title:e.header.title,messageList:e.home.messageList}}),(function(e){return{getMessageList:function(){var t=Object(g.b)();e(t)},changeHasbackAction:function(){e({type:"changeHasBack",hasBack:!1})},changeTitle:function(){e({type:"changeTitle",title:"\u9996\u9875"})}}}))(d)}}]);
//# sourceMappingURL=14.0533f0ec.chunk.js.map