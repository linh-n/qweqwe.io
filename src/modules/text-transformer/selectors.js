import { createSelector } from "reselect";

const getTextTransformerState = state => state.textTransformer;

export const selectOriginalText = createSelector(getTextTransformerState, state => state.originalText);
