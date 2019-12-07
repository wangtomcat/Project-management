import React, { Component } from 'react'
import {connect} from 'react-redux'
import './style.scss'
import AppScroll from '../../../common/AppScroll/AppScroll'
import { Object } from 'core-js';
import Task from '../../../../components/Task/Task'
   

class Newpro extends Component {
  constructor(props){
    super(props)
    // console.log(props)
    this.state = {
      proInfo:{
        id:props.proList.length+1
      },
      task:false,
      tips:''
    }
  }
  render() {
    // console.log(this.props.proList)
    return (
      <div className="page subpage">
      <AppScroll>
        <div className="proname">
          <p className="p_name">项目信息</p>
          <div className="nameMain">
            <p>项目编号 <input disabled type="text" value={this.props.proList.length+1} onChange={this.changeInptAction.bind(this)}/></p>
            <p>项目全称 <input id="2" type="text" onChange={this.changeInptAction.bind(this)}/></p>
            <p>项目简称 <input id="3" type="text" onChange={this.changeInptAction.bind(this)}/></p>
            <p>项目地址 <input id="4" type="text" onChange={this.changeInptAction.bind(this)}/></p>
            <div className="p_img">
              <span>项目图片</span>
              <img src={this.state.proInfo.proImg} alt=""/>
              <input type="file" id="5" onChange={this.changeInptAction.bind(this)}/>
              <i>+</i>
            </div>
          </div>
        </div>

        <div className="kehu">
          <p>客户信息</p>
          <div className="kehuInfo">
            <p>客户名称 <input type="text" id="6" onChange={this.changeInptAction.bind(this)}/></p>
            <p>联系人 <input type="text" id="7" onChange={this.changeInptAction.bind(this)}/></p>
            <p>联系电话 <input type="text" id="8" onChange={this.changeInptAction.bind(this)}/></p>
          </div>
        </div>

        <div className="fuze">
          <p>人员架构</p>
          <div className="fuzeInfo">
            <p>负责人 <input type="text" id="9" onChange={this.changeInptAction.bind(this)}/></p>
            <p>成员 <input type="text" id="10" onChange={this.changeInptAction.bind(this)}/></p>
          </div>
        </div>

        

      </AppScroll>

      <div className="n_save">
        <p className="n_exit" onClick={this.exitAction.bind(this)}>取消</p>
        <p className="n_push" onClick={this.saveAction.bind(this)}>提交</p>
      </div>
      
      {this.state.task && <Task tips={this.state.tips}/>}
      </div>
    )
  }
  changeInptAction(ev){
    ev.persist();
    let id = ev.target.getAttribute('id');
    // console.log(ev.target.getAttribute('id'))
    switch (id) {
      case '2':
        return  this.setState(()=>({
          proInfo:{
            ...this.state.proInfo,
            proFullName:ev.target.value
          }
        }))
      case '3':
        return  this.setState(()=>({
          proInfo:{
            ...this.state.proInfo,
            proSimpName:ev.target.value
          }
        }))
      case '4':
        return  this.setState(()=>({
          proInfo:{
            ...this.state.proInfo,
            proAddress:ev.target.value
          }
        }))
      case '5':          
          let baseImg;
          let red = new FileReader();
          red.readAsDataURL(ev.target.files[0])
          red.onload= (ev)=>{
          baseImg = ev.target.result;
          this.setState(()=>({
                proInfo:{
                  ...this.state.proInfo,
                  proImg:baseImg
                }
              }))
            }
        return
      case '6':
        return  this.setState(()=>({
          proInfo:{
            ...this.state.proInfo,
            proKehu:ev.target.value
          }
        }))
      case '7':
        return  this.setState(()=>({
          proInfo:{
            ...this.state.proInfo,
            proKehuName:ev.target.value
          }
        }))
      case '8':
        return  this.setState(()=>({
          proInfo:{
            ...this.state.proInfo,
            proKehuTel:ev.target.value
          }
        }))
      case '9':
        return  this.setState(()=>({
          proInfo:{
            ...this.state.proInfo,
            proFuxze:ev.target.value
          }
        }))
      case '10':
        return  this.setState(()=>({
          proInfo:{
            ...this.state.proInfo,
            proTeam:ev.target.value
          }
        }))
      default:
        break;
    }
  }
  exitAction(){
    this.props.history.goBack()
  }
  saveAction(){
    console.log(this.props.proInfo)
    let list = this.state.proInfo
    let arr = Object.keys(list)
    if(arr.length < 9){
      this.taskAction('请输入完整')
    }else{
      this.taskAction('添加成功')
      this.props.changeProList(this.state.proInfo)
      this.setState(()=>({
        proInfo:{}
      }))
      setTimeout(() => {
        this.props.history.goBack();
      }, 1000);
      //
    }
  }
  taskAction(val){
    this.setState(()=>({
      task:true,
      tips:val
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
  proList:state.pro.proList
})

const mapDispatchToProps = (dispatch)=>({
  changeProList(list){
    dispatch({
      type:'changeProList',
      list
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
      title:'新建项目'
    })
  }
})

export default connect(mapStateToProps,mapDispatchToProps)(Newpro)
