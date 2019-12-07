import React, { Component } from 'react'
import './style.scss'
import {connect} from 'react-redux'
import Task from '../../../../components/Task/Task'

const ipts = [
  {id:1,tips:'手机号码'},
  {id:2,tips:'请输入旧密码'},
  {id:3,tips:'请输入新密码'},
  {id:4,tips:'请输入确认密码'},
]

class ChangePwd extends Component {
  constructor(props){
    super(props);
    this.state = {
      infoList:props.infoList,
      task:false,
      tips:''
    }
  }
  render() {
    return (
      <div className="page subpage">
        <div className="inps">
        {
          ipts.map(item=>(
            <input key={item.id} type={item.id === 1 ? 'text' : 'password'} placeholder={item.tips} onChange={this.iptValAction.bind(this,item.id)}/>
          ))
        }
        </div>
        <div className="c_btn">
          <p onClick={this.yesPwdAction.bind(this)}>确认修改</p>
        </div>

        {this.state.task && <Task tips={this.state.tips}/>}
        
      </div>
    )
  }
  iptValAction(id,ev){
    ev.persist();
    switch (id) {
      case 1:
        return  (
          this.setState(()=>({
            infoList:{
              ...this.state.infoList,
              phone:ev.target.value
            }
          }))
        )
      case 2:
        return  (
          this.setState(()=>({
            infoList:{
              ...this.state.infoList,
              pwd:ev.target.value
            }
          }))
        )
      case 3:
        return  (
          this.setState(()=>({
            infoList:{
              ...this.state.infoList,
              newPwd:ev.target.value
            }
          }))
        )
      case 4:
        return  (
          this.setState(()=>({
            infoList:{
              ...this.state.infoList,
              repPwd:ev.target.value
            }
          }))
        )
    
      default:
        break;
    }
  }
  yesPwdAction(){
    let pInfo = this.props.infoList
    let sInfo = this.state.infoList
    if(pInfo.phone !== sInfo.phone){
     this.hideAction('手机号码错误')
      return
    }
    if(pInfo.pwd !== sInfo.pwd){
      this.hideAction('密码错误')
      return
    }
    if(!(sInfo.newPwd && sInfo.repPwd) || (sInfo.newPwd !== sInfo.repPwd) ){ 
      this.hideAction('两次密码不一致')
      return
    }
    this.hideAction('修改成功')
    setTimeout(() => {
      this.props.changePwdAction(sInfo.newPwd)
      this.props.history.push('/mine')
    }, 1000);
  }
  hideAction(tips){
    this.setState(()=>({
      task:true,
      tips
    }))
    setTimeout(() => {
      this.setState(()=>({
        task:false,
      }))
    }, 1000);
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
  changePwdAction(val){
    dispatch({
      type:'changePwd',
      value:val
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
      title:'修改密码'
    })
  }
})

export default connect(mapStateToProps,mapDispatchToProps)(ChangePwd)
