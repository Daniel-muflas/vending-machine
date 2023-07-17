import { configureStore, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { iLoginResponse } from './api/interfaces';

// MODULE 5
// CREATE REDUX TO SHARE THE USER IN ALL COMPONENTS

const initialState: iLoginResponse = {
    name: "",
    lastName: "",
    sessionId: "",
}
  

export const userLoginSlice = createSlice({
  name: 'userLogin',
  initialState,
  reducers: {
        setUserState: (state, action: PayloadAction<iLoginResponse>) => {
            state.name = action.payload.name
            state.lastName = action.payload.lastName
            state.sessionId = action.payload.sessionId
        }
    }
});


interface iTotalValue {
  value: number;
}

const initialTotalValueState: iTotalValue = {value: 0.0}

export const totalValueSlice = createSlice({
  name: 'totalValue',
  initialState: initialTotalValueState,
  reducers: {
        setTotalValue: (state, action: PayloadAction<iTotalValue>) => {
            state.value = action.payload.value
        }
    }
});

// Action creators are generated for each case reducer function
export const { setUserState } = userLoginSlice.actions
export const userLoginReducer = userLoginSlice.reducer
export const { setTotalValue } = totalValueSlice.actions
export const totalValueReducer = totalValueSlice.reducer

export const store = configureStore({
  reducer: {
    userLogin: userLoginReducer,
    totalValue: totalValueReducer,
  },
})
