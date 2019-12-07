const initialState = {
  hasBack: false,
  title:'tomc404'
};

export default (state = initialState, action)=>{
  switch (action.type) {
    case 'changeTitle':
      return {
        ...state, 
        title: action.title
      }
    case 'changeHasBack':
      return {
        ...state,
        hasBack: action.hasBack
      }
    default:
      return state;
  }
}