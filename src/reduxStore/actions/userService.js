const store = window.localStorage;

const temp = JSON.parse(store.getItem("user"));

const initialState = {
  currentUser: temp || {
    name: "",
    email: "",
    token: "",
  },

  allUser: {
    list: [],
    error: {},
  },
};

const useReducer = (state = initialState, action) => {
  const { type, payload: { fullname, username, email, token } = {} } = action;
  switch (type) {
    case "user/register":
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          fullname,
          username,
          email,
        },
      };
    case "user/login":
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          email,
          token,
        },
      };
    default:
      return state;
  }
};

export default useReducer;
