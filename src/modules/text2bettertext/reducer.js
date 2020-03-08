import { createAction, createReducer } from "@reduxjs/toolkit";
import { defaultState } from "./defaults";

export const setSourceText = createAction("[Text transformer] Set original text");
export const setTemplateText = createAction("[Text transformer] Set template text");

export const setFunction = createAction("[Text transformer] Set function");

export const setLayoutCurrent = createAction("[Text transformer] Set layout");
export const setLayoutIsEditing = createAction("[Text transformer] Set layout isEditing state");
export const setLayoutSplitPane1 = createAction("[Text transformer] Set layout split pane 1");
export const setLayoutSplitPane2 = createAction("[Text transformer] Set layout split pane 2");

export default createReducer(
  { ...defaultState },
  {
    [setSourceText]: (state, action) => {
      state.sourceText = action.payload;
    },
    [setTemplateText]: (state, action) => {
      state.templateText = action.payload;
    },
    [setLayoutCurrent]: (state, action) => {
      state.layout.currentLayout = action.payload;
    },
    [setLayoutIsEditing]: (state, action) => {
      state.layout.isEditing = action.payload;
    },
    [setLayoutSplitPane1]: (state, action) => {
      state.layout.splitPane1 = action.payload;
    },
    [setLayoutSplitPane2]: (state, action) => {
      state.layout.splitPane2 = action.payload;
    },
  }
);
