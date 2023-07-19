import { configureStore, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { iLoginResponse } from './api/interfaces';

// MODULE 5
// CREATE REDUX TO SHARE THE USER IN ALL COMPONENTS
export interface iUserLoginState {
  name: string;
  lastName: string;
}

const initialState: iUserLoginState = {
    name: "",
    lastName: "",
}
  

export const userLoginSlice = createSlice({
  name: 'userLogin',
  initialState,
  reducers: {
        setUserState: (state, action: PayloadAction<iUserLoginState>) => {
            state.name = action.payload.name
            state.lastName = action.payload.lastName
        }
    }
});


export interface iTotalValue {
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

export interface iAllItems {
  id: string;
  quantity: number;
}

const initialAllItemsState: iAllItems[] = []

export const allItemsSlice = createSlice({
  name: 'allItems',
  initialState: initialAllItemsState,
  reducers: {
        setAllItems: (state, action: PayloadAction<iAllItems>) => {
          const { id, quantity } = action.payload;
          const existingItem = state.find((item) => item.id === id);

          if (existingItem) {
            // If the item already exists, increase its quantity
            existingItem.quantity += quantity;
          } else {
            // If the item does not exist, add it to the state array
            state.push(action.payload);
          }
        },
        resetAllItems: (state,  action: PayloadAction<null>) => {
          state = [];
          return state;
        },
    }
});

// Action creators are generated for each case reducer function
export const { setUserState } = userLoginSlice.actions
export const userLoginReducer = userLoginSlice.reducer

export const { setTotalValue } = totalValueSlice.actions
export const totalValueReducer = totalValueSlice.reducer

export const { setAllItems , resetAllItems} = allItemsSlice.actions
export const allItemsReducer = allItemsSlice.reducer

export const store = configureStore({
  reducer: {
    userLogin: userLoginReducer,
    totalValue: totalValueReducer,
    allItems: allItemsReducer,
  },
})
