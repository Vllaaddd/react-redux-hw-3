import { createSlice } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContacts } from "./operations";


const contactSlice = createSlice({
    name: 'contactSlice',
    initialState: {
      items: [],
      isLoading: false,
      error: null,
    },
    extraReducers(builder){
      builder
        .addCase(fetchContacts.pending, (state, action) => {
          state.isLoading = true;
        })
        .addCase(fetchContacts.fulfilled, (state, action) => {
          state.isLoading = false;
          state.error = null;
          state.items = action.payload;
        })
        .addCase(fetchContacts.rejected, (state, action) => {
          state.error = action.payload;
        })
        .addCase(addContact.pending, (state, action) => {
          state.isLoading = true;
        })
        .addCase(addContact.fulfilled, (state, action) => {
          state.isLoading = false;
          state.error = null;
          state.items.push(action.payload);
        })
        .addCase(addContact.rejected, (state, action) => {
          state.error = action.payload;
        })
        .addCase(deleteContact.pending, (state, action) => {
          state.isLoading = true;
        })
        .addCase(deleteContact.fulfilled, (state, action) => {
          state.isLoading = false;
          state.error = null;
          const index = state.items.findIndex((contact) => contact.id === action.payload.id);
          state.items.splice(index, 1)
        })
        .addCase(deleteContact.rejected, (state, action) => {
          state.error = action.payload;
        })
    }
})

export const contactReducer = contactSlice.reducer;