import { createSelector } from "reselect";

const getState = state => state.text2bettertext;

export const selectIsEditingSourceText = createSelector(getState, state => state?.layout?.isEditing ?? true);
export const selectLayoutSplitLane1 = createSelector(getState, state => state?.layout?.splitPane1 ?? 50);
export const selectLayoutSplitLane2 = createSelector(getState, state => state?.layout?.splitPane2 ?? 50);
