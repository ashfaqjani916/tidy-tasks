import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  loading: false,
  User: {},
  userToken: null,
  error: null,
  success: false,
}


const  authSlice  = createSlice({
  name: 'auth',
  initialState,
  reducers:{},
  // extraReducers:{},
})

export default authSlice.reducer;
