import { createAction, createReducer } from "@reduxjs/toolkit";
import { defaultState } from "./defaults";

export const setSourceText = createAction("[Text transformer] Set original text");
export const setTemplateText = createAction("[Text transformer] Set template text");

export const saveFunction = createAction("[Text transformer] Try set function");
export const setFunction = createAction("[Text transformer] Set function");

export const setLayoutCurrent = createAction("[Text transformer] Set layout");
export const setLayoutIsEditingSource = createAction("[Text transformer] Set editing source state");
export const setLayoutSplitPane1 = createAction("[Text transformer] Set layout split pane 1");
export const setLayoutSplitPane2 = createAction("[Text transformer] Set layout split pane 2");

export default createReducer(
  { ...defaultState },
  {
    [setFunction]: (state, { payload: { name, functionStr } }) => {
      state.functions.push({ [name]: functionStr });
    },
    [setSourceText]: (state, { payload }) => {
      state.sourceText = payload;
    },
    [setTemplateText]: (state, { payload }) => {
      state.templateText = payload;
    },
    [setLayoutCurrent]: (state, { payload }) => {
      state.layout.currentLayout = payload;
    },
    [setLayoutIsEditingSource]: (state, { payload }) => {
      state.layout.isEditingSource = payload;
    },
    [setLayoutSplitPane1]: (state, { payload }) => {
      state.layout.splitPane1 = payload;
    },
    [setLayoutSplitPane2]: (state, { payload }) => {
      state.layout.splitPane2 = payload;
    },
  }
);
