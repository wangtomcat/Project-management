import Http from '../../util/Http'
import api from '../../util/api'
// 项目状态：todo pending finished close
const initialState = {
  proList:[

  ]
};

// 同步action 
export const setProList = (val)=>({
  type: 'setProList',
  value: val
})

//异步action
export const requestProList = () =>async (dispatch)=>{
  // console.log('真正请求数据的异步事件.....');
  let {proList} = await Http.get(api.GET_PRO_LIST);
  let action = setProList(proList);
  dispatch(action);
}

export default (state = initialState, action)=>{
  // console.log(action)
  switch (action.type) {
    case 'changeProList':
      return {
        proList:[
          ...state.proList,
          {
            ...action.list,
            id:state.proList.length+1,
            date:Number(new Date()),
            status:'todo',
            progress:{}
          }
        ]
      }
    case 'changeStatus':
      return {
        proList:state.proList.map(item=>(item.id === action.value.id ? {
          ...item,
          status: action.value.status
        } : item))
      }
    case 'setProList':
      return {
        proList:[...action.value]
      }
    default:
      return state;
  }
}