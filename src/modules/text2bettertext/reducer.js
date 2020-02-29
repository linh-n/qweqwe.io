import { createAction, createReducer } from "@reduxjs/toolkit";

export const setOriginalText = createAction("[Text transformer] Set original text");
export const setTemplate = createAction("[Text transformer] Set template");

export default createReducer(
  {
    originalText: "",
    template: "",
  },
  {
    [setOriginalText]: (state, action) => {
      state.originalText = action.payload;
    },
    [setTemplate]: (state, action) => {
      state.template = action.payload;
    },
  }
);
