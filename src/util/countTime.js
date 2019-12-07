const countTime = (date)=>{
  let d = new Date();
  let OneDay = 24*60*60*1000
  let TwoDay = 24*60*60*1000*2
  let M = (new Date(date).getMinutes()<10 ? '0'+new Date(date).getMinutes() :new Date(date).getMinutes())
  if((d-date)<OneDay){
    return '今天' + new Date(date).getHours()+':'+M
  }
  if((d-date)>OneDay && (d-date)<TwoDay){
    return '昨天' + new Date(date).getHours()+':'+M
  }
  if((d-date)>TwoDay){
    return (new Date(date).getMonth()+1) +'月'+new Date(date).getDate()+'日'
  }
}

export default countTime