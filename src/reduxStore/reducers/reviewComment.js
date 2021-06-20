const initialState = {
    comment: []
  };
  
  const commentReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
      case "GET_REVIEW":
        return {
          ...state,
          comment: payload
        };
      case "ADD_REVIEW":
        return {
          ...state,
          comment: [payload, ...state.comment]
        };
      case "GET_BEFORE":
        return {
          ...state,
          comment: payload
        };
      default:
        return {
          ...state
        };
    }
  };
  
  export default commentReducer;