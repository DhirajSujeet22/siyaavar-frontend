import axios from "axios";

// ---------------------------------

export const FetchProductsById = async (id) => {
  console.log(id);
  try {
    const data = await axios.get(`http://localhost:3000/clothes/${id}`, {
      withCredentials: true,
    });

    console.log(data.data);

    return data.data;
  } catch (error) {
    console.log(error);
  }
};

// ---------------------------------

export const FetchProducts = async () => {
  try {
    const data = await axios.get("http://localhost:3000/clothes", {
      withCredentials: true,
    });

    return data.data;
  } catch (error) {
    console.log(error);
  }
};
