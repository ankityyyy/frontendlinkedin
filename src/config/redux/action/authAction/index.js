// import { clientServer } from "@/config";
// import { createAsyncThunk } from "@reduxjs/toolkit";

// export const loginUser = createAsyncThunk(
//   "user/login",
//   async (user, thunkAPI) => {
//     try {
//       const response = await clientServer.post("/login", {
//         email: user.email,
//         password: user.password,
//       });

//       if (response.data.token) {
//         localStorage.setItem("token", response.data.token);
//         // You can return any additional user data here if necessary
//       } else {
//         return thunkAPI.rejectWithValue({
//           message: "Token not provided",
//         });
//       }
//       return thunkAPI.fulfillWithValue(response.data.token);
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.response.data);
//     }
//   }
// );

// export const registerUser = createAsyncThunk(
//   "user/register",
//   async (user, thunkAPI) => {}
// );