const baseUrl = "https://movieapp-team-b-2021.herokuapp.com/api/rMovie/";

export const getReview = async () => {
  try {
    const response = await fetch(`${baseUrl}allreviews`, {
      method: "GET",

    });
    return response.json();
  } catch (error) { 
    console.log(error);
    throw error;
  }
};
export const getAllUsers = async () => {
  try {
    const response = await fetch("https://movieapp-team-b-2021.herokuapp.com/api/rMovie/profile", {
      method: "GET",

    });
    return response.json();
  } catch (error) { 
    console.log(error);
    throw error;
  }
};

