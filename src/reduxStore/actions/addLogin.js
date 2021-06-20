export const addRegister = (fullname, email, password, username) => {
    return {
      type: "register/addRegister",
      payload: {
        fullname,
        email,
        password,
        username,
      },
    };
  };
  
  export const addLogin = (email, fullName, token) => {
    return {
      type: "login/user",
      payload: {
        email,
        fullName,
        token
      },
    };
  };
  