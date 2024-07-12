import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    valor: 5,
    token: null,
    user: null,
    isLogged: false,
};

const loginSlice = createSlice({
    name: 'login',
    initialState: initialState,
    reducers: {
        increment: (state) => {
          state.valor += 1
        },
        decrement: (state) => {
          state.valor -= 1
        },
        incrementByAmount: (state, action) => {
          state.valor += action.payload
        },
      },
    // extraReducers: (builder) => {},
})
export const { increment, decrement, incrementByAmount } = loginSlice.actions
export default loginSlice.reducer;