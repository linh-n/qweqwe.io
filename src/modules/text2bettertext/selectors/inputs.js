import { createSelector } from "reselect";

const getTextTransformerState = state => state.text2bettertext;

export const selectSourceText = createSelector(getTextTransformerState, state => state.originalText);
export const selectTemplateText = createSelector(getTextTransformerState, state => state.templateText);
