const initialState = {
   review : [''],
  };
  
  const reviewReducer = (state = initialState, action) => {
    switch(action.type) {
      case 'review/add':
        return {
          ...state,
          review: [...state.review, action.payload]
        }
      default:
        return state;
    }
  }
  
  export default reviewReducer;