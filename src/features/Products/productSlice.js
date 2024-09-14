import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { FetchProducts, FetchProductsById } from "./ProductsAPI";

const initialState = {
  products: [],
  //   productsById: [],
  //   categories: [],
  //   brands: [],
  totalPages: 0,
  status: true,
  error: null,
};

// ================================================================

export const FetchProductsdAsync = createAsyncThunk(
  "Products/FetchProducts",
  async (id) => {
    const response = await FetchProducts();
    return response.data;
  }
);

// =================================================================

export const FetchProductsByIdAsync = createAsyncThunk(
  "ProductsById/FetchProductsById",
  async (id) => {
    const response = await FetchProductsById(id);
    return response.data;
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

      .addCase(FetchCategoriesAsync.pending, (state, action) => {
        state.status = true;
      })
      .addCase(FetchCategoriesAsync.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.status = false;
      })
      .addCase(FetchCategoriesAsync.rejected, (state, action) => {
        state.error = action.error;
        state.status = false;
      })

      // ======================================================

      .addCase(FetchBrandsAsync.pending, (state, action) => {
        state.status = true;
      })
      .addCase(FetchBrandsAsync.fulfilled, (state, action) => {
        state.brands = action.payload;
        state.status = false;
      })
      .addCase(FetchBrandsAsync.rejected, (state, action) => {
        state.error = action.error;
        state.status = false;
      });
  },
});

// =================================================================

// export const {} = ProductsSlice.actions;+

export const selectProducts = (state) => state.product;
// export const selectTotalProductsPage = (state) => state.product.totalPages;
// export const selectCategories = (state) => state.product.categories;
// export const selectBrands = (state) => state.product.brands;
// export const selectProductsById = (state) => state.product.productsById;
// export const selectStatus = (state) => state.product.status;

export default ProductsSlice.reducer;
