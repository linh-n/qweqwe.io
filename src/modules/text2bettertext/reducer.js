import { createAction, createReducer } from "@reduxjs/toolkit";

export const setSourceText = createAction("[Text transformer] Set original text");
export const setTemplateText = createAction("[Text transformer] Set template text");

export const setLayoutIsEditing = createAction("[Text transformer] Set layout isEditing state");
export const setLayoutSplitPane1 = createAction("[Text transformer] Set layout split pane 1");
export const setLayoutSplitPane2 = createAction("[Text transformer] Set layout split pane 2");

const defaultState = {
  originalText: "",
  templateText: "",
  layout: {
    isEditing: true,
    splitPaneVertical: 50,
    splitPaneHorizontal: 50,
  },
};

export default createReducer(
  { ...defaultState },
  {
    [setSourceText]: (state, action) => {
      state.originalText = action.payload;
    },
    [setTemplateText]: (state, action) => {
      state.templateText = action.payload;
    },
    [setLayoutIsEditing]: (state, action) => {
      if (!state.layout) {
        state.layout = {};
      }
      state.layout.isEditing = action.payload;
    },
    [setLayoutSplitPane1]: (state, action) => {
      state.layout.splitPaneHorizontal = action.payload;
    },
    [setLayoutSplitPane2]: (state, action) => {
      state.layout.splitPaneVertical = action.payload;
    },
  }
);
