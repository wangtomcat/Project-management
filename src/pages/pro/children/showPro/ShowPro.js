import React, { Component } from 'react'
import './style.scss'
import {connect} from 'react-redux'
import AppScroll from '../../../common/AppScroll/AppScroll'
import {Link} from 'react-router-dom'

class ShowPro extends Component {
  constructor(){
    super();
    this.state={
      pending : null,
      new : null,
      finished : null,
      close :null
    }
  }
  render() {
    return (
      <div className="page subpage">
        <AppScroll>
          <div className="ss_t">
            <div className="ss_main">
              <Link to="/pro/project/pending"><span>{this.state.pending}</span><span>进行中的项目</span></Link>
              <Link to="/message"><span>{this.state.new}</span><span>新项目</span></Link>
              <Link to="/pro/project/close"><span>{this.state.finished}</span><span>项目完成</span></Link>
              <Link to="/pro/project/close"><span>{this.state.close}</span><span>项目关闭</span></Link>
            </div>
          </div>
          <div className="ss_content">
            <h1>以下空白本是想做数据可视化的,但.....</h1>
          </div>


        </AppScroll>
      </div>
    )
  }
  static getDerivedStateFromProps(props,state){
    return{
      pending : props.proList.filter(item=>(item.status === 'pending')).length,
      new : props.proList.filter(item=>(item.status === 'todo')).length,
      finished : props.proList.filter(item=>(item.status === 'finished')).length,
      close : props.proList.filter(item=>(item.status === 'close')).length
    }
  }
  componentDidMount(){
    this.props.changeHasbackAction();
    this.props.changeTitle();
  }
}


const mapStateToProps = (state)=>({
  hasBack:state.header.hasBack,
  title:state.header.title,
  proList:state.pro.proList
})

const mapDispatchToProps = (dispatch)=>({
  changeHasbackAction(){
    dispatch({
      type:'changeHasBack',
      hasBack:true,
    })
  },
  changeTitle(){
    dispatch({
      type:'changeTitle',
      title:'项目统计'
    })
  }
})

export default connect(mapStateToProps,mapDispatchToProps)(ShowPro)
