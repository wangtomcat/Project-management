import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink,Link } from 'react-router-dom'
import './style.scss'
import Swiper from 'swiper';
import {requestMessageList} from '../../../store/reducers/home'

const h_tabs = [
  {id:1,title:'设计管理',icon:'iconfont icon-icon-',path:'/home', color:'#4A73FF'},
  {id:2,title:'采购管理',icon:'iconfont icon-caigou-',path:'/home', color:'#F8BE39'},
  {id:3,title:'报账管理',icon:'iconfont icon-gongzi-copy',path:'/home', color:'#F03958'},
  {id:4,title:'工资管理',icon:'iconfont icon-money',path:'/home', color:'#30D288'},
  {id:5,title:'通讯录',icon:'iconfont icon-icons-',path:'/home', color:'#F03958'},
  {id:6,title:'供应商目录',icon:'iconfont icon-gongyingshangguanli',path:'/home', color:'#30D288'},
  {id:7,title:'现场图库',icon:'iconfont icon-tongxunlu',path:'/home', color:'#4A73FF'},
  {id:8,title:'发送通知',icon:'iconfont icon-xiaoxi',path:'/home', color:'#F8BE39'},
]

class Home extends Component {
  render() {
    // console.log(this.props.messageList);
    let newMessage = this.props.messageList.slice(0,4);
    // console.log(newMessage)
    return (
      <div className="page">
      <div className="swiper-container" ref="container">
        <div className="swiper-wrapper">
            <div className="swiper-slide">
              <img src="/img/1.jpeg" alt=""/>
            </div>
            <div className="swiper-slide">
              <img src="/img/2.jpg" alt=""/>
            </div>
            <div className="swiper-slide">
              <img src="/img/3.jpg" alt=""/>
            </div>
        </div>
        <div className="swiper-pagination"></div>
      </div>
      <div className="h_news">
      <p className="h_message">最新消息<Link to={{pathname:'/message',state:3}} className="h_more" >更多</Link></p>
        {
          newMessage.map(item=>(
            <li className="h_newMess" key={item.id}>
              <span className={item.status === 'todo'? 'h_red' : 'h_org'}>{item.status === 'todo' ? '待办' : '通知'}</span>
              <p>{item.message} {item.message} {item.message}</p>
              <span className="h_time">{item.date}</span>
            </li>
          ))
        }
      </div>
      <div className="h_tabs">
        {
          h_tabs.map(item=>(
            <NavLink style={{color:item.color}} className="h_tab" key={item.id} to={item.path}><span className={item.icon}></span><span className="h_text">{item.title}</span></NavLink>
          ))
        }
      </div>
      </div>
    )
  }
  componentDidMount(){
    this.fetchList()
    this.props.changeHasbackAction();
    this.props.changeTitle();
    new Swiper (this.refs.container, {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      speed:300,
      autoplay : {
        delay:2000
      },
      pagination: {
        el: '.swiper-pagination',
      },
    })
  }
  fetchList(){
    if(this.props.messageList.length > 0){
      return
    }else{
      this.props.getMessageList();
    }
  }
}

const mapStateToProps = (state)=>{
  return {
    hasBack:state.header.hasBack,
    title:state.header.title,
    messageList:state.home.messageList
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
    getMessageList(){
      let action = requestMessageList();
      dispatch(action);
    },
    changeHasbackAction(){
      dispatch({
        type:'changeHasBack',
        hasBack:false,
      })
    },
    changeTitle(){
      dispatch({
        type:'changeTitle',
        title:'首页'
      })
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)
