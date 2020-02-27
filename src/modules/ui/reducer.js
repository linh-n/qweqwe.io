import { createAction, createReducer } from "@reduxjs/toolkit";

export const setLanguage = createAction("[UI] Set language");
export const setMessages = createAction("[UI] Set translation messages");
export const setAvailableLanguages = createAction("[UI] Init available languages");
export const addError = createAction("[UI] Add error ⛔️");
export const removeError = createAction("[UI] Remove error");

export default createReducer(
  {
    language: undefined,
    availableLanguages: undefined,
    errors: [],
  },
  {
    [setLanguage]: (state, action) => {
      state.language = action.payload;
    },
    [setMessages]: (state, action) => {
      state.messages = action.payload;
    },
    [setAvailableLanguages]: (state, action) => {
      state.availableLanguages = action.payload;
    },
    [addError]: (state, action) => {
      state.errors = state.errors.filter(e => e.message !== action.payload.message);
      state.errors.push(action.payload);
    },
    [removeError]: (state, action) => {
      state.errors = state.errors.filter(e => e.timestamp !== action.payload);
    },
  }
);
