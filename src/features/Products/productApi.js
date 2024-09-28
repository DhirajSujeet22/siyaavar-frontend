import axios from "axios";
const backendUrl = import.meta.env.VITE_BACKEND_URL;

// ---------------------------------

export const FetchProductsById = async (id) => {
  try {
    const data = await axios.get(`${backendUrl}/product/${id}`, {
      withCredentials: true,
    });
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

// ---------------------------------

export const FetchProductsByFilter = async (pagination) => {
  let queryString = "";

  // // Building query string for filters
  // for (let key in filter) {
  //   const CategoriesValues = filter[key];
  //   if (CategoriesValues.length) {
  //     queryString += `${key}=${CategoriesValues}&`;
  //   }
  // }

  // // Building query string for sorting
  // for (let key in sort) {
  //   queryString += `${key}=${sort[key]}&`;
  // }

  // // Building query string for search
  // for (let key in search) {
  //   queryString += `${key}=${search[key]}&`;
  // }

  // Building query string for pagination
  for (let key in pagination) {
    queryString += `${key}=${pagination[key]}&`;
  }

  try {
    const response = await axios.get(`${backendUrl}/product?${queryString}`, {
      withCredentials: true,
    });

    const totalPages = response.headers.get("X-Total-Count");
    return { products: response.data, totalPages: +totalPages };
  } catch (error) {
    console.log(error);
  }
};

// =========================================================
