import axios from "axios";

export const fetchLoggedInUser = async () => {
  try {
    const data = await axios.get(`http://localhost:3000/users/2`, {
      // withCredentials: true,
    });
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

// ======================================================================

// this is function to  fetch all orders particular user

// export const fetchLoggedInUserOrders = () => {
//   return new Promise(async (resolve) => {
//     const response = await fetch(`${process.env.REACT_APP_API_URL}/orders`, {
//       credentials: "include",
//     });
//     const data = response.json();
//     resolve({ data });
//   });
// };

// ======================================================================

// this is function for Updating  user information

export const UpdateUser = async (update) => {
  console.log(update);
  console.log(update.id);
  try {
    const data = await axios.patch(
      `http://localhost:3000/users/${update.id}`,
      update,
      {
        // withCredentials: true,
      }
    );
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

// ===========================================================================
