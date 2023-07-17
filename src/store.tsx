import { configureStore, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

// MODULE 5
// CREATE REDUX TO SHARE THE USER IN ALL COMPONENTS

export interface UserState {
  name: string;
  lastName: string;
  balance: number;
}

const initialState: UserState = {
    name: "",
    lastName: "",
    balance: 0.0,
}
  
export const userLoginSlice = createSlice({
  name: 'userLogin',
  initialState,
  reducers: {
        setUserState: (state, action: PayloadAction<UserState>) => {
            state.name = action.payload.name
            state.lastName = action.payload.lastName
            state.balance = action.payload.balance
        }
    }
});

// Action creators are generated for each case reducer function
export const { setUserState } = userLoginSlice.actions
export const userLoginReducer = userLoginSlice.reducer
export const totalValueReducer = userLoginSlice.reducer

export const store = configureStore({
  reducer: {
    userLogin: userLoginReducer,
    totalValue: totalValueReducer,
  },
})
