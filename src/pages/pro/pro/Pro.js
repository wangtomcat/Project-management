import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './style.scss'
import {connect} from 'react-redux'
import {requestProList} from '../../../store/reducers/pro' 

class Pro extends Component {
  constructor(){
    super()
    this.state={
      src:''
    }
  }
  render() {
    // console.log(1);
    return (
      <div className="page">
        <div className="p_project">
          <div className="p_title">
          <span className="iconfont icon-project_info"></span>
          <p className="pp_title">项目库</p>
          </div>
          <Link to="/pro/project/pending" className="p_pending"> <span className="iconfont icon-contract_pending_line"></span> 进行中 <span className="p_arrow">></span></Link>
          <Link to="/pro/project/close" className="p_pending p_succed"> <span className="iconfont icon-contract_filed_line"></span> 已完成/已关闭 <span className="p_arrow">></span></Link>
        </div>
        <Link to="/pro/newpro" className="p_newpro"><span className="iconfont icon-add"></span> 新建项目 <span className="p_arrow">></span></Link>
        <Link to="/pro/showpro" className="p_newpro"><span className="iconfont icon-count3"></span> 项目统计 <span className="p_arrow">></span></Link>

      </div>
    )
  }
  fetchList(){
    if(this.props.proList.length > 0){
      return
    }else{
      this.props.getProList();
    }
  }
  
  componentDidMount(){
    this.props.changeHasbackAction();
    this.props.changeTitle();
    this.fetchList()
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
      hasBack:false,
    })
  },
  getProList(){
    let action = requestProList();
    dispatch(action);
  },
  changeTitle(){
    dispatch({
      type:'changeTitle',
      title:'项目'
    })
  }
})


export default connect(mapStateToProps,mapDispatchToProps)(Pro)