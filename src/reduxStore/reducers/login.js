const store = window.localStorage;
const temp = JSON.parse(store.getItem('user'))

const initialState = {
    
        email: '',
        fullName: '',
        token: '',
    
}

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'login/user':
            return {
                ...state,
                email: action.payload.email,
                fullName: action.payload.fullName,
                token: action.payload.token
                // login: (state, action) => {
                //   state.user = action.state.login;
                // },
              };
            default:
              return { ...state };
          }
}

export default userReducer;