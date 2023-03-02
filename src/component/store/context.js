import { configureStore,createSlice } from "@reduxjs/toolkit";
const initialAuthState={isAuthenticated:false}


const authSlice=createSlice({
  name:'authentication',
  initialState:initialAuthState,
  reducers:{
    login(state,action){
      localStorage.setItem('token',action.payload)
      state.isAuthenticated=true
      
    },
    logout(state){
      state.isAuthenticated=false
      localStorage.removeItem('token');
      localStorage.removeItem('email')
    }
  }
})
const initialFormState={isForm:true}
const formSlice=createSlice({
  name:'form',
  initialState:initialFormState,
  reducers:{
    close(state,action){
     state.isForm=false
    }
  }
})


const store = configureStore({
  reducer:{auth:authSlice.reducer,for:formSlice.reducer}
});
export const AuthAction=authSlice.actions;
export const formAction=formSlice.actions;

export default store;
