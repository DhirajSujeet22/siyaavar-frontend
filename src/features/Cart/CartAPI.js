import axios from "axios";

export const AddToCart = async (CartInfo) => {
  console.log(CartInfo);
  try {
    const data = await axios.post(`http://localhost:3000/carts`, CartInfo, {
      // withCredentials: true,
    });
    console.log(data);
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

// export const UpdateCart = (update) => {
//   return new Promise(async (resolve) => {
//     const response = await fetch(
//       `${process.env.REACT_APP_API_URL}/carts/${update.id}`,
//       {
//         method: "PATCH",
//         credentials: "include",
//         headers: { "content-type": "application/json" },
//         body: JSON.stringify(update),
//       }
//     );
//     const data = response.json();
//     resolve({ data });
//   });
// };

// ============================================================================

// this is function to Delete items in Carts as user wish

// export const DeleteCartItem = (itemId) => {
//   return new Promise(async (resolve) => {
//     const response = await fetch(
//       `${process.env.REACT_APP_API_URL}/carts/${itemId}`,
//       {
//         method: "DELETE",
//         credentials: "include",
//         headers: { "content-type": "application/json" },
//       }
//     );
//     await response.json();
//     resolve({ data: { id: itemId } });
//   });
// };

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
