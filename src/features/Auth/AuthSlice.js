import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  CreateUser,
  loginUser,
  CheckAuth,
  ResetPasswordRequest,
  ResetPassword,
  UserSignOut,
} from "./AuthAPI";
import toast from "react-hot-toast";
const initialState = {
  loggedInUserToken: null,
  loginUserInfo: null,
  status: false,
  LoginStatus: false,
  error: null,
  userCheck: false,
  mailSend: false,
  passwordReset: false,
};

// ======================================================================

export const CreateUserAsync = createAsyncThunk(
  "users/CreateUser",
  async (UserData, { rejectWithValue }) => {
    try {
      const response = await CreateUser(UserData);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// ======================================================================

export const loginUserAsync = createAsyncThunk(
  "users/CheckUser",
  async (loginInfo, { rejectWithValue }) => {
    try {
      const response = await loginUser(loginInfo);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// ======================================================================

export const CheckAuthAsync = createAsyncThunk("users/CheckAuth", async () => {
  const response = await CheckAuth();
  return response;
});

// ======================================================================

export const ResetPasswordRequestAsync = createAsyncThunk(
  "users/ResetPasswordRequest",
  async (email) => {
    const response = await ResetPasswordRequest(email);
    return response;
  }
);

// ======================================================================

export const ResetPasswordAsync = createAsyncThunk(
  "users/ResetPassword",
  async (UserInfo) => {
    const response = await ResetPassword(UserInfo);
    return response;
  }
);

// ======================================================================

export const UserSignOutAsync = createAsyncThunk(
  "users/UserSignOut",
  async (_, { rejectWithValue }) => {
    try {
      const response = await UserSignOut();
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// ======================================================================

export const AuthSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(CreateUserAsync.pending, (state) => {
        state.status = true;
      })
      .addCase(CreateUserAsync.fulfilled, (state, action) => {
        state.status = false;
        state.loggedInUserToken = action.payload.token;
        toast.success(action.payload.message);
      })
      .addCase(CreateUserAsync.rejected, (state, action) => {
        state.status = false;
        toast.error(action.payload.message);
      })

      // ======================================================================

      .addCase(loginUserAsync.pending, (state) => {
        state.status = true;
        state.LoginStatus = false;
      })
      .addCase(loginUserAsync.fulfilled, (state, action) => {
        state.status = false;
        state.LoginStatus = false;
        state.loggedInUserToken = action.payload.token;
        toast.success(action.payload.message);
      })
      .addCase(loginUserAsync.rejected, (state, action) => {
        state.status = false;
        state.LoginStatus = true;
        toast.error(action.payload.message);
      })

      // ======================================================================

      .addCase(UserSignOutAsync.pending, (state) => {
        state.status = true;
      })
      .addCase(UserSignOutAsync.fulfilled, (state, action) => {
        state.status = false;
        state.loggedInUserToken = null;
        state.loginUserInfo = null;
        toast.success(action.payload.message);
      })
      .addCase(UserSignOutAsync.rejected, (state, action) => {
        state.status = false;
        toast.error(action.payload.message);
      })

      // ======================================================================

      .addCase(CheckAuthAsync.pending, (state) => {
        state.status = false;
      })
      .addCase(CheckAuthAsync.fulfilled, (state, action) => {
        state.status = false;
        state.userCheck = true;
        state.loginUserInfo = action.payload;
      })
      .addCase(CheckAuthAsync.rejected, (state, action) => {
        state.status = false;
        state.userCheck = false;
        state.error = action.error;
      })

      // ======================================================================

      .addCase(ResetPasswordRequestAsync.pending, (state) => {
        state.status = true;
        state.mailSend = false;
      })
      .addCase(ResetPasswordRequestAsync.fulfilled, (state, action) => {
        state.status = false;
        state.mailSend = true;
      })
      .addCase(ResetPasswordRequestAsync.rejected, (state, action) => {
        state.status = false;
        state.mailSend = false;
        state.error = action.error;
      })

      // ======================================================================

      .addCase(ResetPasswordAsync.pending, (state) => {
        state.status = true;
        state.passwordReset = false;
      })
      .addCase(ResetPasswordAsync.fulfilled, (state, action) => {
        state.status = false;
        state.passwordReset = true;
      })
      .addCase(ResetPasswordAsync.rejected, (state, action) => {
        state.status = false;
        state.passwordReset = true;
        state.error = action.error;
      });
  },
});

export const selectLoggedInUserToken = (state) => state.auth.loggedInUserToken;
export const selectLoginUserInfo = (state) => state.auth.loginUserInfo;
export const selectUserCheck = (state) => state.auth.userCheck;
export const selectError = (state) => state.auth.error;
// export const selectMailStatus = (state) => state.auth.mailSend;
export const selectStatus = (state) => state.auth.status;
export const selectLoginStatus = (state) => state.auth.LoginStatus;
// export const selectPasswordReset = (state) => state.auth.passwordReset;

export default AuthSlice.reducer;
