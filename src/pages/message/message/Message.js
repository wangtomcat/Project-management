import React, { Component } from 'react'
import './style.scss'
import {connect} from 'react-redux'
import {requestProList} from '../../../store/reducers/pro' 
import ShowMessage from '../children/showMessage/ShowMessage'
import AppScroll from '../../common/AppScroll/AppScroll'

const navs=[
  {id:1,title:'待办事项'},
  {id:2,title:'已办事项'},
  {id:3,title:'通知'},
]

class Message extends Component {
  constructor(props){
    super(props)
    // console.log(props)
    this.state={
      selectId:props.location.state || 1,
      showMessage:props.messageList
    }

  }
  render() {
    return (
      <div className="page">
      <div className="x_top">
        <nav className="x_tabs">
          {
            navs.map(item=>(
              <span key={item.id} onClick={this.btnActin.bind(this,item.id)} style={{backgroundColor: this.state.selectId === item.id ? 'blue' : '',color: this.state.selectId === item.id ? '#fff' : '' }}>{item.title}</span>
            ))
          }
        </nav>
      </div>


      <div className="x_showList">
      <AppScroll>
        <ShowMessage showMessage={this.state.showMessage} showList={this.props.proList} selectId={this.state.selectId}/>
      </AppScroll>
      </div>
        
      </div>
    )
  }
  btnActin(flag){
    this.setState(()=>({
      selectId:flag
    }))
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


const mapStateToProps = (state)=>{
  return {
    hasBack:state.header.hasBack,
    title:state.header.title,
    proList:state.pro.proList,
    messageList:state.home.messageList
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
    getProList(){
      let action = requestProList();
      dispatch(action);
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
        title:'消息'
      })
    }
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Message)
