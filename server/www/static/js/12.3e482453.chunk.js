(this.webpackJsonptomc404=this.webpackJsonptomc404||[]).push([[12],{108:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n(10),c=n(11),s=n(16),l=n(14),r=n(15),i=n(0),o=n.n(i),u=n(140),p=(n(109),function(e){function t(){return Object(a.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(r.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"appscroll",ref:"scroll"},o.a.createElement("div",{className:"scollmain"},this.props.children))}},{key:"componentDidMount",value:function(){var e=new u.a(this.refs.scroll,{tap:!0,click:!0});e.on("beforeScrollStart",(function(){e.refresh()}))}}]),t}(i.Component))},109:function(e,t,n){},614:function(e,t,n){},627:function(e,t,n){"use strict";n.r(t);var a=n(10),c=n(11),s=n(16),l=n(14),r=n(15),i=n(0),o=n.n(i),u=(n(614),n(19)),p=n(108),h=n(20),f=function(e){function t(){var e;return Object(a.a)(this,t),(e=Object(s.a)(this,Object(l.a)(t).call(this))).state={pending:null,new:null,finished:null,close:null},e}return Object(r.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"page subpage"},o.a.createElement(p.a,null,o.a.createElement("div",{className:"ss_t"},o.a.createElement("div",{className:"ss_main"},o.a.createElement(h.b,{to:"/pro/project/pending"},o.a.createElement("span",null,this.state.pending),o.a.createElement("span",null,"\u8fdb\u884c\u4e2d\u7684\u9879\u76ee")),o.a.createElement(h.b,{to:"/message"},o.a.createElement("span",null,this.state.new),o.a.createElement("span",null,"\u65b0\u9879\u76ee")),o.a.createElement(h.b,{to:"/pro/project/close"},o.a.createElement("span",null,this.state.finished),o.a.createElement("span",null,"\u9879\u76ee\u5b8c\u6210")),o.a.createElement(h.b,{to:"/pro/project/close"},o.a.createElement("span",null,this.state.close),o.a.createElement("span",null,"\u9879\u76ee\u5173\u95ed")))),o.a.createElement("div",{className:"ss_content"},o.a.createElement("h1",null,"\u4ee5\u4e0b\u7a7a\u767d\u672c\u662f\u60f3\u505a\u6570\u636e\u53ef\u89c6\u5316\u7684,\u4f46....."))))}},{key:"componentDidMount",value:function(){this.props.changeHasbackAction(),this.props.changeTitle()}}],[{key:"getDerivedStateFromProps",value:function(e,t){return{pending:e.proList.filter((function(e){return"pending"===e.status})).length,new:e.proList.filter((function(e){return"todo"===e.status})).length,finished:e.proList.filter((function(e){return"finished"===e.status})).length,close:e.proList.filter((function(e){return"close"===e.status})).length}}}]),t}(i.Component);t.default=Object(u.b)((function(e){return{hasBack:e.header.hasBack,title:e.header.title,proList:e.pro.proList}}),(function(e){return{changeHasbackAction:function(){e({type:"changeHasBack",hasBack:!0})},changeTitle:function(){e({type:"changeTitle",title:"\u9879\u76ee\u7edf\u8ba1"})}}}))(f)}}]);
//# sourceMappingURL=12.3e482453.chunk.js.map