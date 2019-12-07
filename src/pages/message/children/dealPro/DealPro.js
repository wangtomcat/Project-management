import React, { Component } from 'react'
import './style.scss'
import {connect} from 'react-redux'
import countTime from '../../../../util/countTime';
import Task from '../../../../components/Task/Task'

class DealPro extends Component {
  constructor(){
    super()
    this.state={
      task:false,
      tips:''
    }
  }
  render() {
    let {id} = this.props.match.params;
    // console.log(id)
    id = Number(id)
    let temp = this.props.proList.filter(item=>(item.id === id))
    const pro = temp[0]
    // console.log(pro)
    return (
      <div className="page subpage">
        <div className="d_main">
          <p className="d_header">
            {pro.proSimpName}
            <span className="d_name">负责人: {pro.proFuxze}</span>
            <img src={pro.proImg} alt=""/>
          </p>
          <p className="d_pro">
            <span>{pro.proFullName}</span>
            <span>{countTime(pro.date)}</span>
          </p>
          <p className="d_content">
            {pro.proFullName}{ pro.status !=='finished' ? '以创建成功' : '项目已完成'},
            { pro.status !=='finished' && <span>请点下下面按钮启动项目</span>}
          </p>
        </div>
      { pro.status !=='finished' && <div className="d_start" onClick={this.changeTodoAction.bind(this,pro.id)}>
          启动
        </div>}
        {this.state.task && <Task tips={this.state.tips}/>}
      </div>
    )
  }
  changeTodoAction(id){
    // console.log(id)
    let value = {
      id,
      status:'pending'
    }
    this.props.changeStatus(value);
    this.setState(()=>({
      task:true,
      tips:'启动成功'
    }))
    setTimeout(() => {
      this.setState(()=>({
        task:false,
        tips:''
      }))
      this.props.history.push('/message')
    }, 1000);
    
  }
  componentDidMount(){
    this.props.changeHasbackAction();
    this.props.changeTitle()
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
      value
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
      title:'启动项目'
    })
  }
})

export default connect(mapStateToProps,mapDispatchToProps)(DealPro)