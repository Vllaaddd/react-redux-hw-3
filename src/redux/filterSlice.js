import { createSlice } from "@reduxjs/toolkit"

const filterSlice = createSlice({
    name: 'slice',
    initialState: '',
    reducers: {
      filterUpdate(state, action){
        return state = action.payload
      }
    },
})

export const filterReducer = filterSlice.reducer;
export const { filterUpdate } = filterSlice.actions