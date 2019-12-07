import React, { Component } from 'react'
import BScroll from 'better-scroll'
import './style.scss'

export default class AppScroll extends Component {
  render() {
    return (
      <div className="appscroll" ref="scroll">
        <div className="scollmain">
          {
            this.props.children
          }
        </div>
      </div>
    )
  }
  componentDidMount(){
   let scroll = new BScroll(this.refs.scroll, {
      tap: true,
      click: true
    });
    // 如果需要滚动，先刷新滚动视图，就可以在可滚动范围内滚动
    scroll.on('beforeScrollStart', ()=>{
      scroll.refresh();
    });
  }
}
