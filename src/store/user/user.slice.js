import { createSlice } from "@reduxjs/toolkit";

const initialState ={
  email:"",
  id:"",
  token:"",
}

export const userSlice = createSlice({
  name:"user",
  initialState,
  reducers: {
    setUser: (state,action) =>{
      state.email=action.payload.email;
      state.id=action.payload.id;
      state.token=action.payload.token;
    },
    removeUser:(state,action) =>{
      state.email="";
      state.id="";
      state.token="";
  }

}})

export const {setUser, removeUser} = userSlice.actions;
export default userSlice.reducers;
