import { createSelector } from "reselect";

const getFunctions = state => state.text2bettertext.functions;

export const selectExistingFunctionNames = createSelector(getFunctions, funcs => Object.keys(funcs));
