import axios from "axios";
const backendUrl = import.meta.env.VITE_BACKEND_URL;
// ---------------------------------

export const FetchProductsById = async (id) => {
  try {
    const data = await axios.get(`${backendUrl}/clothes/${id}`, {
      // withCredentials: true,
    });
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

// ---------------------------------

export const FetchProducts = async (page) => {
  console.log(page);
  try {
    const data = await axios.get(`${backendUrl}/clothes?_page=${page}`, {
      // withCredentials: true,
    });
    return data.data;
  } catch (error) {
    console.log(error);
  }
};
