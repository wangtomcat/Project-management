import React from 'react'
import {Link} from 'react-router-dom'
import './style.scss'
import countTime from '../../../../util/countTime';

const filterList = (showMessage,showList,selectId)=>{
  if(selectId === 1){
    return showList.filter(item=>(item.status === 'todo'))
  }
  if(selectId === 2){
    return showList.filter(item=>(item.status === 'finished'))
  }
  if(selectId === 3){
    return showMessage
    
  }
}
// const countTime = (date)=>{
//   let d = new Date();
//   let OneDay = 24*60*60*1000
//   let TwoDay = 24*60*60*1000*2
//   if((d-date)<OneDay){
//     return '今天' + new Date(date).getHours()+':'+new Date(date).getMinutes()
//   }
//   if((d-date)>OneDay && (d-date)<TwoDay){
//     return '昨天' + new Date(date).getHours()+':'+new Date(date).getMinutes()
//   }
//   if((d-date)>TwoDay){
//     return '今天' + (new Date(date).getMonth()+1) +':'+new Date(date).getDate()
//   }
// }


export default (props)=> {
  let {showList,selectId,showMessage} = props
  let list = filterList(showMessage,showList,selectId)
  
  // console.log(list)
    return (
        <>
          { selectId !== 3 ?
            list.map(item=>(
              <Link className="s_link" to={{pathname:`/message/DealPro/${item.id}`}} key={item.id}>
                <p className="s_time">{item.proSimpName} <span>{countTime(item.date)}</span></p>
                <p className="s_main">{item.proSimpName}{item.status === 'todo' ?'已创建，请前往处理' : '已完成' }</p>
              </Link>
            ))
            :
            list.map(item=>(
              <li className="h_newMess" key={item.id}>
              <span className={item.status === 'todo'? 'h_red' : 'h_org'}>{item.status === 'todo' ? '待办' : '通知'}</span>
              <p>{item.message} {item.message} {item.message}</p>
              <span className="h_time">{item.date}</span>
            </li>
            ))
          }
        </>
    )

    // "id":2,
    //   "message":"清远项目,xxx文件已发布",
    //   "date":"13:21",
    //   "status":"pending"

}


