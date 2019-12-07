import React, { Component } from 'react'
import './style.scss'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'




class Mine extends Component {
  render() {
    let {infoList} = this.props
    let Mtabs=[
      {id:1,title:'我的项目',num:9,path:'/pro'},
      {id:2,title:'我的采购',num:31,path:'/mine'},
      {id:3,title:'我的报账',num:17,path:'/mine'},
      {id:4,title:'我的工资',num:8,path:'/mine'},
    ]
    return (
      <div className="page">
      <div className="m_header">
        <img src={infoList.headerImg} alt=""/>
        <p className="m_name">{infoList.name}</p>
        <p className="m_job">{infoList.job}</p>
      </div>
      <div className="m_mine">
      {
        Mtabs.map(item=>(
          <Link key={item.id} to={item.path}>
          <span className="m_num">{item.num}</span>
          <span>{item.title}</span>
          </Link>
        ))
      }
      </div>

      <Link className="m_a" to="/mine/info">
      <span className="iconfont icon-gerenziliao"></span>
      个人资料
      <span className="m_arrow">></span>
      </Link>
      
      <div className="m_midl">
        <Link to="/mine">
        <span className="iconfont icon-Setting"></span>
        <span>设置</span>
        <span className="m_arrow">></span>
        </Link>
        <Link to="/mine/cpwd">
        <span className="iconfont icon-icons-"></span>
        <span className="m_text">修改密码</span>
        <span className="m_arrow">></span>
        </Link>
      </div>


      <Link className="m_a" to="/mine">
      <span className="iconfont icon-yijianfankui"></span>
      意见反馈
      <span className="m_arrow">></span>
      </Link>
      <Link className="m_a" to="/mine">
      <span className="iconfont icon-guanyuwomen"></span>
      关于
      <span className="m_arrow">></span>
      </Link>
      
      </div>
    )
  }
  componentDidMount(){
    this.props.changeHasbackAction();
    this.props.changeTitle();
  }
}

const mapStateToProps = (state)=>({
  hasBack:state.header.hasBack,
  title:state.header.title,
  infoList:state.mine.infoList
})

const mapDispatchToProps = (dispatch)=>({
  changeHasbackAction(){
    dispatch({
      type:'changeHasBack',
      hasBack:false,
    })
  },
  changeTitle(){
    dispatch({
      type:'changeTitle',
      title:'我的'
    })
  }
})


export default connect(mapStateToProps,mapDispatchToProps)(Mine)