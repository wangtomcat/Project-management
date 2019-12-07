const initialState = {
  infoList:{
    name:'Tomc404',
    job:'设计部 设计工程师',
    headerImg:'/img/header.png',
    email:"tomc404@163.com",
    phone:'18879098571',
    tel:'0796-7096111',
    pwd:'123456'
  }
};

export default (state = initialState, action)=>{
  switch (action.type) {
    case 'changeInfo':
      return {
        ...state,
        infoList:{
          ...state.infoList,
          ...action.infoList
        }
      }
    case 'changePwd':
      return {
        ...state,
        infoList:{
          ...state.infoList,
          pwd:action.value
        }
      }
    default:
      return state;
  }
}