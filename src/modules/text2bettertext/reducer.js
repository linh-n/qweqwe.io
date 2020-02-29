import { createAction, createReducer } from "@reduxjs/toolkit";

export const setOriginalText = createAction("[Text transformer] Set original text");
export const setTemplateText = createAction("[Text transformer] Set template text");

export default createReducer(
  {
    originalText: "",
    templateText: "",
  },
  {
    [setOriginalText]: (state, action) => {
      state.originalText = action.payload;
    },
    [setTemplateText]: (state, action) => {
      state.templateText = action.payload;
    },
  }
);
