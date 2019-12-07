import Http from '../../util/Http'
import api from '../../util/api'
// 项目状态：todo pending finished close
const initialState = {
  messageList:[

  ]
};

// 同步action 
export const setMessageList = (val)=>({
  type: 'setMessageList',
  value: val
})

//异步action
export const requestMessageList = () =>async (dispatch)=>{
  let {messages} = await Http.get(api.GET_MESSAGE_LIST);
  // console.log(messages)
  let action = setMessageList(messages);
  dispatch(action);
}

export default (state = initialState, action)=>{
  // console.log(action)
  switch (action.type) {
    case 'setMessageList':
      return {
        messageList:[...action.value]
      }
    default:
      return state;
  }
}