import axios from "axios";

// ---------------------------------

export const FetchProductsById = async (id) => {
  try {
    const data = await axios.get(`http://localhost:3000/clothes/${id}`, {
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
    const data = await axios.get(
      `http://localhost:3000/clothes?_page=${page}`,
      {
        // withCredentials: true,
      }
    );
    return data.data;
  } catch (error) {
    console.log(error);
  }
};
