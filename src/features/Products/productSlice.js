import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { FetchProductsByFilter, FetchProductsById } from "./productApi";

const initialState = {
  products: [],
  productsById: [],
  //   categories: [],
  //   brands: [],
  totalPages: 0,
  status: true,
  error: null,
};

// ================================================================

export const FetchProductsByFilterAsync = createAsyncThunk(
  "Products/FetchProductsByFilter",
  async ({ pagination }) => {
    const response = await FetchProductsByFilter(pagination);
    return response;
  }
);

// =================================================================

export const FetchProductsByIdAsync = createAsyncThunk(
  "ProductsById/FetchProductsById",
  async (id) => {
    const response = await FetchProductsById(id);
    return response;
  }
);

// =================================================================

export const ProductsSlice = createSlice({
  name: "products",
  initialState,

  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },

  extraReducers: (builder) => {
    builder

      .addCase(FetchProductsByFilterAsync.pending, (state, action) => {
        state.status = true;
      })
      .addCase(FetchProductsByFilterAsync.fulfilled, (state, action) => {
        state.products = action.payload.products;
        state.totalPages = action.payload.totalPages;
        state.status = false;
      })
      .addCase(FetchProductsByFilterAsync.rejected, (state, action) => {
        state.error = action.error;
        state.status = false;
      })

      // ======================================================

      .addCase(FetchProductsByIdAsync.pending, (state, action) => {
        state.status = true;
      })
      .addCase(FetchProductsByIdAsync.fulfilled, (state, action) => {
        state.productsById = action.payload;
        state.status = false;
      })
      .addCase(FetchProductsByIdAsync.rejected, (state, action) => {
        state.error = action.error;
        state.status = false;
      });
  },
});

// =================================================================

// export const {} = ProductsSlice.actions;+

export const selectProducts = (state) => state.product.products;
export const selectTotalProductsLength = (state) => state.product.totalPages;
// export const selectCategories = (state) => state.product.categories;
// export const selectBrands = (state) => state.product.brands;
export const selectProductsById = (state) => state.product.productsById;
export const selectStatus = (state) => state.product.status;

export default ProductsSlice.reducer;
