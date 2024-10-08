import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  AddToCart,
  fetchCartByUserId,
  UpdateCart,
  DeleteCartItem,
  //   ResetCart,
} from "./CartAPI";
import toast from "react-hot-toast";

// ============================================================================

const initialState = {
  carts: [],
  status: true,
  error: null,
};

// ============================================================================

export const AddToCartAsync = createAsyncThunk(
  "cart/AddToCart",
  async (CartInfo) => {
    const response = await AddToCart(CartInfo);
    return response;
  }
);

// ============================================================================

export const fetchCartByUserIdAsync = createAsyncThunk(
  "cart/fetchCartByUserId",
  async (id) => {
    const response = await fetchCartByUserId(id);
    return response;
  }
);

// ============================================================================

export const UpdateCartAsync = createAsyncThunk(
  "cart/UpdateCart",
  async (update) => {
    const response = await UpdateCart(update);
    return response;
  }
);

// ============================================================================

export const DeleteCartItemAsync = createAsyncThunk(
  "cart/DeleteCartItem",
  async (itemId) => {
    const response = await DeleteCartItem(itemId);
    return response;
  }
);

// ============================================================================

// export const ResetCartAsync = createAsyncThunk(
//   "cart/ResetCart",
//   async (userId) => {
//     const response = await ResetCart(userId);
//     return response.data;
//   }
// );

// ============================================================================

export const CartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(AddToCartAsync.pending, (state) => {
        state.status = true;
      })
      .addCase(AddToCartAsync.fulfilled, (state, action) => {
        state.status = false;
        state.carts.push(action.payload);
        toast.success(`🛒 item added to cart`);
      })
      .addCase(AddToCartAsync.rejected, (state, action) => {
        state.status = false;
        state.error = action.error;
      })

      // ===================================================

      .addCase(fetchCartByUserIdAsync.pending, (state) => {
        state.status = true;
      })
      .addCase(fetchCartByUserIdAsync.fulfilled, (state, action) => {
        state.status = false;
        state.carts = action.payload;
      })
      .addCase(fetchCartByUserIdAsync.rejected, (state, action) => {
        state.status = false;
        state.error = action.error;
      })

      // ===================================================

      .addCase(UpdateCartAsync.pending, (state) => {
        state.status = true;
      })
      .addCase(UpdateCartAsync.fulfilled, (state, action) => {
        state.status = false;
        const index = state.carts.findIndex(
          (item) => item.id === action.payload.id
        );

        state.carts[index] = action.payload;
      })
      .addCase(UpdateCartAsync.rejected, (state, action) => {
        state.status = false;
        state.error = action.error;
      })

      // ===================================================

      .addCase(DeleteCartItemAsync.pending, (state) => {
        state.status = true;
      })
      .addCase(DeleteCartItemAsync.fulfilled, (state, action) => {
        state.status = false;

        const index = state.carts.findIndex(
          (item) => item.id === action.payload.id
        );

        state.carts.splice(index, 1);
      })
      .addCase(DeleteCartItemAsync.rejected, (state, action) => {
        state.status = false;
        state.error = action.error;
      });

    // ===================================================

    //   .addCase(ResetCartAsync.pending, (state) => {
    //     state.status = true;
    //   })
    //   .addCase(ResetCartAsync.fulfilled, (state, action) => {
    //     state.status = false;
    //     state.carts = [];
    //   })
    //   .addCase(ResetCartAsync.rejected, (state, action) => {
    //     state.status = false;
    //     state.error = action.error;
    //   });
  },
});

// export const { increment } = counterSlice.actions;

export const selectCarts = (state) => state.cart.carts;
export const selectCartsStatus = (state) => state.cart.status;

export default CartSlice.reducer;
