import axios from "axios";

// ---------------------------------

export const FetchProductsById = async (id) => {
  try {
    const data = await axios.get("", {
      withCredentials: true,
    });

    return data.data;
  } catch (error) {
    console.log(error);
  }
};

// ---------------------------------

export const FetchProducts = async () => {
  try {
    const data = await axios.get("", {
      withCredentials: true,
    });

    return data.data;
  } catch (error) {
    console.log(error);
  }
};
