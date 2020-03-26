import { createAction, createReducer } from "@reduxjs/toolkit";

export const setSourceText = createAction("[Text transformer] Set original text");
export const setTemplateText = createAction("[Text transformer] Set template text");

export const setLayoutCurrent = createAction("[Text transformer] Set layout");
export const setLayoutIsEditing = createAction("[Text transformer] Set layout isEditing state");
export const setLayoutSplitPane1 = createAction("[Text transformer] Set layout split pane 1");
export const setLayoutSplitPane2 = createAction("[Text transformer] Set layout split pane 2");

const defaultState = {
  sourceText:
    "2\t4\t4\tAF\tAFG\tAfghanistan\tAfghanistan\tAfganistán\t0\t1809-01-01\t12/31/9999\t1/1/1900\t12/31/9999\tأفغانستان\t \n  3 \t8\t8\tAL\tALB\tAlbania\tAlbanie\tAlbania\t0\t1809-01-01\t12/31/9999\t1/1/1900\t12/31/9999\tألبانيا\t \n  4 \t12\t12\tDZ\tDZA\tAlgeria\tAlgérie\tArgelia\t0\t1809-01-01\t12/31/9999\t1/1/1900\t12/31/9999\tالجزائر\t \n  5 \t16\t16\tAS\tASM\tAmerican Samoa\tSamoa américaines\tSamoa americana\t0\t1809-01-01\t12/31/9999\t1/1/1900\t12/31/9999\tساموا الأمريكية\t ",
  templateText: "update Countries set NameFr = '{7}' where CountryCode = '{5}';",
  layout: {
    currentLayout: "⫞",
    isEditing: false,
    splitPaneVertical: 50,
    splitPaneHorizontal: 50,
  },
};

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
