import React from 'react'
import {NavLink} from 'react-router-dom'
import './style.scss'

const navs=[
  {id:'1',title:'首页',icon:'iconfont icon-home',path:'/home'},
  {id:'2',title:'消息',icon:'iconfont icon-i-message',path:'/message'},
  {id:'3',title:'项目',icon:'iconfont icon-project',path:'/pro'},
  {id:'4',title:'我的',icon:'iconfont icon-mine',path:'/mine'},
]
export default ()=>{
  return(
    <nav className="tabs">
      {
        navs.map(item=>(
          <NavLink className="tab" to={item.path} key={item.id}>
          <span className={item.icon}></span>
          <span className="text">{item.title}</span>
          </NavLink>
        ))
      }
    </nav>
  )
}
