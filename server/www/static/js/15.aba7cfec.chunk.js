(this.webpackJsonptomc404=this.webpackJsonptomc404||[]).push([[15],{245:function(e,t,n){},620:function(e,t,n){"use strict";n.r(t);var a=n(6),i=n(10),s=n(11),c=n(16),l=n(14),o=n(15),r=n(0),u=n.n(r),h=n(19),f=(n(245),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(c.a)(this,Object(l.a)(t).call(this,e))).state={infoList:e.infoList},n}return Object(o.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state.infoList;return u.a.createElement("div",{className:"page subpage"},u.a.createElement("div",{className:"I_header"},u.a.createElement("div",{className:"img"},u.a.createElement("img",{src:e.headerImg,alt:""}),u.a.createElement("span",null,"+"),u.a.createElement("input",{ref:"inp",type:"file",onChange:this.inptAction.bind(this)})),u.a.createElement("p",null,e.name),u.a.createElement("p",null,e.job)),u.a.createElement("div",{className:"otherInfo"},u.a.createElement("p",null,u.a.createElement("span",null,"\u7535\u5b50\u90ae\u7bb1"),u.a.createElement("input",{type:"email",value:e.email,onChange:this.changeEmail.bind(this)})),u.a.createElement("p",null,u.a.createElement("span",null,"\u5ea7\u673a"),u.a.createElement("input",{type:"tel",value:e.tel,onChange:this.changeTel.bind(this)})),u.a.createElement("p",null,u.a.createElement("span",null,"\u624b\u673a"),u.a.createElement("input",{type:"number",value:e.phone,onChange:this.changePhone.bind(this)}))),u.a.createElement("div",{className:"btn"},u.a.createElement("p",{onClick:this.saveInfolist.bind(this)},"\u4fdd\u5b58")))}},{key:"saveInfolist",value:function(){this.props.changeInfo(this.state.infoList),this.props.history.goBack()}},{key:"changeEmail",value:function(e){var t=this;e.persist(),this.setState((function(){return{infoList:Object(a.a)({},t.state.infoList,{email:e.target.value})}}))}},{key:"changeTel",value:function(e){var t=this;e.persist(),this.setState((function(){return{infoList:Object(a.a)({},t.state.infoList,{tel:e.target.value})}}))}},{key:"changePhone",value:function(e){var t=this;e.persist(),this.setState((function(){return{infoList:Object(a.a)({},t.state.infoList,{phone:e.target.value})}}))}},{key:"inptAction",value:function(e){var t,n=this,i=new FileReader;i.readAsDataURL(e.target.files[0]),i.onload=function(e){t=e.target.result,n.setState((function(){return{infoList:Object(a.a)({},n.state.infoList,{headerImg:t})}}))}}},{key:"componentDidMount",value:function(){this.props.changeHasbackAction(),this.props.changeTitle()}}]),t}(r.Component));t.default=Object(h.b)((function(e){return{hasBack:e.header.hasBack,title:e.header.title,infoList:e.mine.infoList}}),(function(e){return{changeInfo:function(t){e({type:"changeInfo",infoList:t})},changeHasbackAction:function(){e({type:"changeHasBack",hasBack:!0})},changeTitle:function(){e({type:"changeTitle",title:"\u4e2a\u4eba\u8d44\u6599"})}}}))(f)}}]);
//# sourceMappingURL=15.aba7cfec.chunk.js.map