import { createSelector } from "reselect";

import { selectTemplateText } from "./inputs";
import { selectTableRows } from "./rows";

export const selectTransformedText = createSelector(selectTableRows, selectTemplateText, (rows, template) => {
  let matches = template ? template.matchAll(/{(\d+)}/g) : [];
  let cellsInTemplate = [];
  for (const match of matches) {
    cellsInTemplate.push(parseInt(match[1]) - 1);
  }

  const cellsInTemplateDistinct = [...new Set(cellsInTemplate)];

  let lines = [];

  try {
    rows.forEach(row => {
      let currentLine = template;
      cellsInTemplateDistinct.forEach(cellIndex => {
        const regex = new RegExp(`\\{${cellIndex + 1}\\}`, "g");
        currentLine = currentLine.replace(regex, row.cells.find(c => c.index === cellIndex)?.value || "");
      });
      lines.push({ index: row.index, value: currentLine });
    });
  } catch (e) {
    lines = [{ index: 0, value: e.message }];
  }
  return lines;
});
