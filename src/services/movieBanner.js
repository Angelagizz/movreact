const baseUrl = "https://movieapp-team-b-2021.herokuapp.com/api/rMovie/title/1";

export const getAbout = async () => {
  try {
    const response = await fetch(baseUrl, {
      method: "GET",

    });
    return response.json();
  } catch (error) { 
    console.log(error);
    throw error;
  }
};