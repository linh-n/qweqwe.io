import { createSelector } from "reselect";

import { selectTemplateText } from "./inputs";
import { selectSourceArray } from "./source-array";

import transform from "../utilities/transform";

export const selectTransformedText = createSelector(
  selectSourceArray,
  selectTemplateText,
  (sourceArray, template) => transform({ source: sourceArray, template })
);
