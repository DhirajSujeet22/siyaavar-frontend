import axios from "axios";

// =======================================

export const AddToCart = async (CartInfo) => {
  try {
    const data = await axios.post(`http://localhost:3000/carts`, CartInfo, {
      // withCredentials: true,
    });
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

// ============================================================================

// this is  function  fetching cart products for particular user

export const fetchCartByUserId = async (id) => {
  console.log(id);
  try {
    const data = await axios.get(`http://localhost:3000/carts`, {
      // withCredentials: true,
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
    const data = await axios.patch(
      `http://localhost:3000/carts/${update.id}`,
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

// ============================================================================

// this is function to Delete items in Carts as user wish

export const DeleteCartItem = async (itemId) => {
  try {
    const data = await axios.delete(`http://localhost:3000/carts/${itemId}`, {
      // withCredentials: true,
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
