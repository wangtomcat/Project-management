import React, { Component,Suspense,lazy } from 'react'
import {BrowserRouter,Route,Redirect,Switch} from 'react-router-dom'

import Tabs from './components/Tabs/Tabs'
import Loading from './components/Loading/Loading'
import Header from './components/Header/Header'


const Home = lazy(()=>import('./pages/home/home/Home'))
const Message = lazy(()=>import('./pages/message/message/Message'))
const Pro = lazy(()=>import('./pages/pro/pro/Pro'))
const Mine = lazy(()=>import('./pages/mine/mine/Mine'))
const NotFound =lazy(()=>import('./pages/common/NotFound/NotFound'))
const Info = lazy(()=>import('./pages/mine/children/infomation/Infomation'))
const Cpwd = lazy(()=>import('./pages/mine/children/changepwd/ChangePwd'))
const Newpro = lazy(()=>import('./pages/pro/children/newPro/Newpro'))
const Project = lazy(()=>import('./pages/pro/children/project/Project'))
const DealPro = lazy(()=>import('./pages/message/children/dealPro/DealPro'))
const Login = lazy(()=>import('./pages/login/Login'))
const ProDetail = lazy(()=>import('./pages/pro/children/proDetail/ProDetail'))
const ShowPro = lazy(()=>import('./pages/pro/children/showPro/ShowPro'))


export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Suspense fallback={<Loading/>}>

          <Route children={(props)=>{
              return <Header {...props}/>
            }}/>
          {/* 根页面 */}
          <Switch>
            <Route path="/" exact render={()=>{
              return <Redirect to="/login"/>
            }}/>
            <Route path="/login" component={Login}/>
            <Route path="/home" component={Home}/>
            <Route path="/message" component={Message}/>
            <Route path="/pro" component={Pro}/>
            <Route path="/mine" component={Mine}/>
            <Route component={NotFound}/>
          </Switch>
            
            {/* 子页面 */}
            <Route path="/mine/info" component={Info}/>
            <Route path="/mine/cpwd" component={Cpwd}/>
            <Route path="/pro/newpro" component={Newpro}/>
            <Route path="/pro/project/:flag" component={Project}/>
            <Route path="/pro/project/prodetail/:id" component={ProDetail}/>
            <Route path="/pro/showpro" component={ShowPro}/>
            <Route path="/message/DealPro/:id" component={DealPro}/>


          <Tabs/>
        </Suspense>
      </BrowserRouter>
    )
  }
}
