export const register = async (fullName, username, email, password) => {
    const url = "https://movieapp-team-b-2021.herokuapp.com/api/rMovie/signUp";
    const data = {
      fullName: fullName,
      userName: username,
      email: email,
      password: password,
    };
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      return response.json();
    } catch (error) {
      throw error;
    }
  };
  
  export const login = async (email, password) => {
    const url = "https://movieapp-team-b-2021.herokuapp.com/api/rMovie/login";
    const data = {
      email: email,
      password: password,
    };
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      return response.json();
    } catch (error) {
      throw error;
    }
  };
  
  export const fetchAllUser = async token => {
    const url = "https://movieapp-team-b-2021.herokuapp.com/api/rMovie/admin/profiles";
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Bearer $(token)`,
        },
      });
      return response.json();
    } catch (error) {
      throw error;
    }
  };  
  
