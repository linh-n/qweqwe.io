import { createSelector } from "reselect";
import sourceFromTabular from "../utilities/source-from-tabular";

const getSourceText = state => state.text2bettertext.sourceText;

export const selectSourceArray = createSelector(getSourceText, sourceFromTabular);
