import axios from "axios";
const backendUrl = import.meta.env.VITE_BACKEND_URL;
// =======================================

export const AddToCart = async (CartInfo) => {
  try {
    const data = await axios.post(`${backendUrl}/cart`, CartInfo, {
      withCredentials: true,
    });
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

// ============================================================================

// this is  function  fetching cart products for particular user

export const fetchCartByUserId = async (id) => {
  try {
    const data = await axios.get(`${backendUrl}/cart`, {
      withCredentials: true,
    });

    return data.data;
  } catch (error) {
    console.log(error);
  }
};

// ============================================================================

// this is function to Update Quantity of Cart product in Carts

export const UpdateCart = async (update) => {
  try {
    const data = await axios.patch(`${backendUrl}/cart/${update.id}`, update, {
      withCredentials: true,
    });
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

// ============================================================================

// this is function to Delete items in Carts as user wish

export const DeleteCartItem = async (itemId) => {
  try {
    const data = await axios.delete(`${backendUrl}/cart/${itemId}`, {
      withCredentials: true,
    });
    return { id: itemId };
  } catch (error) {
    console.log(error);
  }
};

// ============================================================================

// this is function to remove all  items in Carts when user finish their shopping

// export const ResetCart = () => {
//   // get all the items of user's cart - and then remove each
//   return new Promise(async (resolve) => {
//     const response = await fetchCartByUserId();
//     const items = await response.data;

//     for (let key of items) {
//       DeleteCartItem(key.id);
//     }

//     resolve({ msg: " Carts have  Empty Now" });
//   });
// };
