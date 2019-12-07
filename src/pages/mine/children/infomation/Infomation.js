import React, { Component } from 'react'
import {connect} from 'react-redux'
import './style.scss'

class Infomation extends Component {
  constructor(props){
    super(props)
    this.state={
      infoList:props.infoList
    }
  }
  render() {
    let {infoList} = this.state
    return (
      <div className="page subpage">
        <div className="I_header">
          <div className="img">
          <img src={infoList.headerImg} alt=""/>
          <span>+</span>
          <input ref="inp" type="file" onChange={this.inptAction.bind(this)}/>
          </div>
          <p>{infoList.name}</p>
          <p>{infoList.job}</p>
        </div>

        <div className="otherInfo">
          <p><span>电子邮箱</span><input type="email" value={infoList.email} onChange={this.changeEmail.bind(this)}/></p>
          <p><span>座机</span><input type="tel" value={infoList.tel} onChange={this.changeTel.bind(this)} /></p>
          <p><span>手机</span><input type="number" value={infoList.phone} onChange={this.changePhone.bind(this)} /></p>
        </div>
        <div className="btn">
          <p onClick={this.saveInfolist.bind(this)}>保存</p>
        </div>
      </div>
    )
  }
  saveInfolist(){
    this.props.changeInfo(this.state.infoList)
    this.props.history.goBack();
  }
  changeEmail(ev){
    ev.persist();
    this.setState(()=>({
      infoList:{
        ...this.state.infoList,
        email:ev.target.value
      }
    }))
  }
  changeTel(ev){
    ev.persist();
    this.setState(()=>({
      infoList:{
        ...this.state.infoList,
        tel:ev.target.value
      }
    }))
  }
  changePhone(ev){
    ev.persist();
    this.setState(()=>({
      infoList:{
        ...this.state.infoList,
        phone:ev.target.value
      }
    }))
  }
  inptAction(ev){
    let baseImg;
    let red = new FileReader();
    red.readAsDataURL(ev.target.files[0])
    red.onload= (ev)=>{
      baseImg = ev.target.result;
      this.setState(()=>({
        infoList:{
          ...this.state.infoList,
          headerImg:baseImg
        }
      }))
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
  infoList:state.mine.infoList
})

const mapDispatchToProps = (dispatch)=>({
  changeInfo(val){
    dispatch({
      type:'changeInfo',
      infoList:val
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
      title:'个人资料'
    })
  }
})

export default connect(mapStateToProps,mapDispatchToProps)(Infomation)
