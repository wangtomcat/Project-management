import React, { Component } from 'react'
import './style.scss'
import {connect} from 'react-redux'
import Task from '../../../../components/Task/Task'

class ProDetail extends Component {
  constructor(){
    super()
    this.state={
      task:false,
      tips:'',
      list:{}
    }
  }



  render() {
    const {list} = this.state
    // console.log(list)
    return (
      <div className="page subpage">
       <div className="pp_img">
         <img src={list.proImg} alt=""/>
         <div className="pp_title">
         <span>{list.id}</span>
         <span>{list.proSimpName}</span>
         </div>
       </div>
        <div className="pp_top">
          <p>项目全称<span>{list.proFullName}</span></p>
          <p>项目所在地<span>{list.proAddress}</span></p>
          <p>客户名称<span>{list.proKehu}</span></p>
        </div>
        <div className="pp_top">
        <p>项目状态<span>{(()=>{
            if(list.status==='pending'){
              return '进行中'
            }
            if(list.status==='finished'){
              return '已完成'
            }
            if(list.status==='close'){
              return '已关闭'
            }
          })()}</span></p>
          <p>项目负责人<span>{list.proFuxze}</span></p>
          <p>项目成员<span>{list.proTeam}</span></p>
        </div>

        {list.status === 'pending' && <div className="pp_bottom">
          <span id="1" onClick={this.changeList.bind(this)}>关闭项目</span>
          <span id="2" onClick={this.changeList.bind(this)}>完成项目</span>
        </div>}
        {this.state.task && <Task tips={this.state.tips}/>}
      </div>
    )
  }
  taskAction(val){
    this.setState(()=>({
      task:true,
      tips:val
    }))
    setTimeout(() => {
      this.setState(()=>({
        task:false,
        tips:''
      }))
    }, 1000);
  }
  changeList(ev){
    // console.log(ev.target.id)
    let aId = Number(this.props.match.params.id)
    let id = Number(ev.target.id)
    let value = {}
    if(id === 1){
      value.id = aId;
      value.status = 'close'
      this.props.changeStatus(value);
      this.taskAction('关闭成功')
      setTimeout(() => {
        this.props.history.push('/pro')
      }, 1000);
    }
    if(id === 2){
      value.id = aId;
      value.status = 'finished'
      this.props.changeStatus(value);
      this.taskAction('完成成功')
      setTimeout(() => {
        this.props.history.push('/pro')
      }, 1000);
    }
  }
  componentDidMount(){
    // console.log(this.props.match.params.id)
    let id = Number(this.props.match.params.id)
    let list = this.props.proList.filter(item=>(item.id === id))[0]
    this.setState(()=>({
      list
    }))
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
  changeStatus(value){
    dispatch({
      type:'changeStatus',
      value,
    })
  },
  changeHasbackAction(){
    dispatch({
      type:'changeHasBack',
      hasBack:true,
    })
  },
  changeTitle(){
    dispatch({
      type:'changeTitle',
      title:'项目详情'
    })
  }
})

export default connect(mapStateToProps,mapDispatchToProps)(ProDetail)
