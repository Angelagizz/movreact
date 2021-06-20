export const register = async (userId, ) => {
    const url = "https://movieapp-team-b-2021.herokuapp.com/api/rMovie/post/review";
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