import React, { Component } from 'react'
import './style.scss'
import { connect } from 'react-redux'


class Header extends Component {
  render() {
    return (
      <header className="app-header">
        { this.props.hasBack &&<span onClick={this.backAction.bind(this)} className="back iconfont icon-back"></span>}
        <h1 className="app-title">{this.props.title}</h1>
      </header>
    )
  }
  backAction(){
    this.props.history.goBack();
  }
}

const mapStateToProps = (state)=>{
  return {
    title: state.header.title,
    hasBack:state.header.hasBack
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header)