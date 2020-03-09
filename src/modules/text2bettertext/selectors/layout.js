import { createSelector } from "reselect";

export const selectCurrentLayout = state => state.text2bettertext.layout.currentLayout;
export const selectShouldShowSourceInput = createSelector(
  state => state.text2bettertext.layout.isEditingSource,
  state => state.text2bettertext.sourceText,
  (isEditingSource, sourceText) => isEditingSource || sourceText.length === 0
);
export const selectLayoutSplitLane1 = state => state.text2bettertext.layout.splitPane1;
export const selectLayoutSplitLane2 = state => state.text2bettertext.layout.splitPane2;
