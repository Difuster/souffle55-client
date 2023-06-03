import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    isAuth: false,
    admin: {}
  },
  reducers: {
    setIsAuth: (state, action) => {
      state.isAuth = action.payload;
    },
    setAdmin: (state, action) => {
      state.admin = action.payload;
    }
  }
});

const selectIsAuth = (state) => state.admin.isAuth;
const selectAdmin = (state) => state.admin.admin;

export const {actions} = adminSlice;
export {selectIsAuth, selectAdmin};
export default adminSlice.reducer;
