import React, { Component } from 'react'
import './style.scss'
import {connect} from 'react-redux'
import Task from '../../components/Task/Task'

class Login extends Component {
  constructor(){
    super()
    this.state={
      taskFlag:false,
      taskTips:'',
      flag:true,
      tips:'获取验证码',
      number:10,
      show:true,
      code:null,
      login:{
        phone:null,
        pwd:null
      },
      re_login:{
        phone:null,
        newPwd:null,
        code:'',
        rePwd:null
      }
    }
  }
  render() {
    return (
      <div className="page subpage login">
        <div className="l_login">
          <img src="/img/login.jpg" alt=""/>
          <p className="l_pupo">欢迎您来到汤姆猫项目管理平台</p>
          {this.state.show ? <div className="l_ipt">
            <input onChange={this.changeVla.bind(this)} id='1' type="text" placeholder="请输入手机号"/>
            <input onChange={this.changeVla.bind(this)} id='2' type="password" placeholder="请输入密码"/>
            <span id="login" onClick={this.loginAction.bind(this)}>登录</span>
            <b onClick={this.changeShow.bind(this)}>忘记密码?</b>
          </div>
          :<div className="l_repwd">
            <input onChange={this.changeVla.bind(this)} id='3' type="text" placeholder="请输入手机号"/>
            <p><input value={this.state.re_login.code} onChange={this.changeVla.bind(this)} id='4' type="text" placeholder="验证码"/> <i className="l_code" onClick={this.getCodeAction.bind(this)}>{this.state.flag? this.state.tips :this.state.number+'s'}</i></p>
            <input onChange={this.changeVla.bind(this)} id='5' type="password" placeholder="请输入新的密码"/>
            <input onChange={this.changeVla.bind(this)} id='6' type="password" placeholder="请确认密码"/>
            <span id="re_login" className="re_login" onClick={this.loginAction.bind(this)} >登录</span>
            <b className="l_remeb" onClick={this.changeShow.bind(this)}  >想起密码了? 去登录！</b>
          </div>}
        </div>
        {this.state.taskFlag && <Task tips={this.state.taskTips}/>}
      </div>
    )
  }
  taskAction(val){
    this.setState(()=>({
      taskFlag:true,
      taskTips:val
    }))
    setTimeout(() => {
      this.setState(()=>({
        taskFlag:false,
        taskTips:''
      }))
    }, 1000);
  }
  getCodeAction(){
    if(this.state.number === 10){
      let code = Math.floor(Math.random()*1000000)
      // console.log(code);
      this.setState(()=>({
        code,
        flag:false
      }))
      this.timer = setInterval(()=>{
        this.setState(()=>({
          number:(this.state.number)-1
        }))
        if(this.state.number === 0){
          clearInterval(this.timer);
          this.setState(()=>({
            flag:true,
            number:10
          }))
        }
      },1000)
      setTimeout(() => {
        this.setState(()=>({
          re_login:{
            ...this.state.re_login,
            code
          }
        }))
      }, 1500);
    }else{
      return
    }



  }
  loginAction(ev){
    ev.persist();
    let login = this.state.login;
    let re_login = this.state.re_login;
    let infoList = this.props.infoList;
    // console.log(ev.target.id)
    // console.log(this.props.infoList)
    // console.log(this.state.login,this.state.re_login)
    if(ev.target.id === 'login'){
      if((login.phone === infoList.phone) && (login.pwd === infoList.pwd)){
        this.taskAction('登录成功');
        setTimeout(() => {
          this.props.history.push('/home')
        }, 1000);
      }
      else{
        this.taskAction('账号或密码错误');
      }
    }else{
      if((re_login.phone === infoList.phone) && (re_login.rePwd === re_login.newPwd) && (re_login.code)){
        this.taskAction('登录成功');
        setTimeout(() => {
          this.props.history.push('/home')
          // console.log(this.props.infoList)
        }, 1000);
        this.props.changePwd(re_login.newPwd)
      }else{
        this.taskAction('账号或密码错误');
      }
    }
  }
  changeVla(ev){
    ev.persist();
    // console.log(ev.target.id)
    switch (ev.target.id) {
      case '1':
        return this.setState(()=>({
          login:{
            ...this.state.login,
            phone:ev.target.value
          }
        }))
      case '2':
        return this.setState(()=>({
          login:{
            ...this.state.login,
            pwd:ev.target.value
          }
        }))
      case '3':
        return this.setState(()=>({
          re_login:{
            ...this.state.re_login,
            phone:ev.target.value
          }
        }))
      case '4':
        return 
      case '5':
        return this.setState(()=>({
          re_login:{
            ...this.state.re_login,
            newPwd:ev.target.value
          }
        }))
      case '6':
        return this.setState(()=>({
          re_login:{
            ...this.state.re_login,
            rePwd:ev.target.value
          }
        }))
    
      default:
        break;
    }
  }
  changeShow(){
    this.setState(()=>({
      show:!this.state.show
    }))
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
  changePwd(val){
    dispatch({
      type:'changePwd',
      value:val
    })
  },
  changeHasbackAction(){
    dispatch({
      type:'changeHasBack',
      hasBack:false,
    })
  },
  changeTitle(){
    dispatch({
      type:'changeTitle',
      title:'登录'
    })
  }
})

export default connect(mapStateToProps,mapDispatchToProps)(Login)