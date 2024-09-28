import axios from "axios";
const backendUrl = import.meta.env.VITE_BACKEND_URL;

// -----------------------------------------------

export const CreateUser = async (UserData) => {
  try {
    const data = await axios.post(`${backendUrl}/auth/signup`, UserData, {
      withCredentials: true,
    });
    return data.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};
// ============================================================

export const loginUser = async (loginInfo) => {
  try {
    const data = await axios.post(`${backendUrl}/auth/login`, loginInfo, {
      withCredentials: true,
    });
    return data.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};

//   return new Promise(async (resolve, reject) => {
//     try {
//       const response = await fetch(
//         `${process.env.REACT_APP_API_URL}/auth/login`,

//         {
//           method: "POST",
//           credentials: "include",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(loginInfo),
//         }
//       );

//       if (response.ok) {
//         const data = await response.json();
//         resolve({ data });
//       } else {
//         const error = await response.text();
//         reject(error);
//       }
//     } catch (error) {
//       reject(error);
//     }
//   });
// };

// ===========================================================================

// this is function for getting user information to check use to login our E-commerce App

// export const CheckAuth = () => {
//   return new Promise(async (resolve, reject) => {
//     try {
//       const response = await fetch(
//         `${process.env.REACT_APP_API_URL}/auth/check`,

//         {
//           credentials: "include",
//         }
//       );

//       if (response.ok) {
//         const data = await response.json();
//         resolve({ data });
//       } else {
//         const error = await response.text();
//         reject(error);
//       }
//     } catch (error) {
//       reject(error);
//     }
//   });
// };

// ============================================================

export const CheckAuth = async () => {
  try {
    const data = await axios.get(`${backendUrl}/auth/check`, {
      withCredentials: true,
    });
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

// ============================================================

export const ResetPasswordRequest = (email) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/auth/reset_Password_Request`,

        {
          method: "POST",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        }
      );
      if (response.ok) {
        const data = await response.json();
        resolve({ data });
      } else {
        const error = await response.json();
        reject(error);
      }
    } catch (error) {
      reject(error);
    }
  });
};

// =============================================================

export const ResetPassword = (UserInfo) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/auth/reset_Password`,

        {
          method: "POST",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(UserInfo),
        }
      );

      if (response.ok) {
        const data = await response.json();
        resolve({ data });
      } else {
        const error = await response.json();
        reject(error);
      }
    } catch (error) {
      reject(error);
    }
  });
};

// ==============================================================

export const UserSignOut = async () => {
  try {
    const data = await axios.get(`${backendUrl}/auth/logout`, {
      withCredentials: true,
    });
    return data.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};
