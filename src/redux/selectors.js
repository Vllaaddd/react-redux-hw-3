// import { createSelector } from "@reduxjs/toolkit";

// export const selectContacts = state => state.contacts.items;
export const selectFilter = state => state.filters;

// export const visibleContacts = createSelector([selectContacts, selectFilter], (contacts, filter) => {
//     return contacts.filter(contact => contact.name.includes(filter))
// })