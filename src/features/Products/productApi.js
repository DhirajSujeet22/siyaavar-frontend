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

export const FetchProductsByFilter = async (pagination, category) => {
  let queryString = "";

  console.log(pagination);
  console.log(category);
  // Building query string for filters
  // for (let key in filter) {
  //   const CategoriesValues = filter[key];
  //   if (CategoriesValues.length) {
  //     queryString += `${key}=${CategoriesValues}&`;
  //   }
  // }

  // Building query string for filters
  // for (let key in category) {
  //   console.log(category);
  //   const CategoriesValues = filter[key];
  //   console.log(CategoriesValues);
  //   queryString += `${key}=${CategoriesValues}&`;
  //   console.log(queryString);
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

  for (let key in category) {
    queryString += `${key}=${category[key]}&`;
  }

  console.log(queryString);

  console.log(pagination);
  console.log(category);

  try {
    const response = await axios.get(`${backendUrl}/product?${queryString}`, {
      withCredentials: true,
    });
    console.log(response.data);

    const totalPages = response.headers.get("X-Total-Count");
    return { products: response.data, totalPages: +totalPages };
  } catch (error) {
    console.log(error);
  }
};

// =========================================================
