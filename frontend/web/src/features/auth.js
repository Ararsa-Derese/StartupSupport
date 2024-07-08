import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isAuthenticated: false,
    user : null,
    loading: false,
    registerd: false,

 }

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    resetRegister: (state) => {
      state.registerd = false;
    }
  },
})

export const { resetRegister} = userSlice.actions
export default userSlice.reducer;