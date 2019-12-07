import React, { Component } from 'react'
import {connect} from 'react-redux'
import './style.scss'
import AppScroll from '../../../common/AppScroll/AppScroll'
import {Link} from 'react-router-dom'

class PendPro extends Component {
  render() {
    // console.log(this.props.match.params.flag)
    const {flag} = this.props.match.params
    // console.log(this.props.proList)
    let proList = this.filterList(flag)
    return (
      <div className="page subpage">
        <AppScroll>
          {
            proList.map(item=>(
              <Link className="penList" to={{pathname:`/pro/project/prodetail/${item.id}`}} key={item.id}>
              <img src={item.proImg} alt=""/>
              <span className="p_task">{item.id} {item.proSimpName}</span>
              <span className="p_time">{(new Date(item.date).getFullYear())+'年'+(new Date(item.date).getMonth()+1)+'月'}</span>
              </Link>
            ))
          }

        </AppScroll>  
      </div>
    )
  }

  filterList(flag){
    if(flag === 'pending'){
      return this.props.proList.filter(item=>(item.status === flag))
    }else{
      return this.props.proList.filter(item=>(item.status === 'finished' || item.status === 'close'))
    }
  }
 
  componentDidMount(){
    this.props.changeHasbackAction();
    if(this.props.match.params.flag === 'pending'){ 
        this.props.changeTitle('进行中的项目');
    }else{
      this.props.changeTitle('完成/关闭项目');
    }
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
  changeTitle(val){
    dispatch({
      type:'changeTitle',
      title:val
    })
  }
})

export default connect(mapStateToProps,mapDispatchToProps)(PendPro)

