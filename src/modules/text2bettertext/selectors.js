import { createSelector } from "reselect";

const PREVIEW_ROWS = 10;

const getTextTransformerState = state => state.text2bettertext;

export const selectOriginalText = createSelector(getTextTransformerState, state => state.originalText);
export const selectTemplateText = createSelector(getTextTransformerState, state => state.templateText);

export const selectTableRows = createSelector(selectOriginalText, originalText => {
  const rows = originalText.match(/[^\r\n]+/g);
  return rows
    ? rows.map((row, rowIndex) => ({
        index: rowIndex,
        cells: row.split(/\t/).map((cell, cellIndex) => ({
          index: cellIndex,
          value: cell.trim(),
        })),
      }))
    : [];
});
export const selectTableRowsForPreview = createSelector(selectTableRows, rows => {
  if (rows.length <= PREVIEW_ROWS) {
    return rows;
  }

  return rows.sort((a, b) => b.cells.length - a.cells.length).slice(0, PREVIEW_ROWS);
});

export const selectTransformedText = createSelector(selectTableRows, selectTemplateText, (rows, template) => {
  let matches = template.matchAll(/{(\d+)}/g);
  let cellsInTemplate = [];
  for (const match of matches) {
    cellsInTemplate.push(parseInt(match[1]) - 1);
  }

  const cellsInTemplateDistinct = [...new Set(cellsInTemplate)];

  let lines = [];

  rows.forEach(row => {
    let currentLine = template;
    cellsInTemplateDistinct.forEach(cellIndex => {
      const regex = new RegExp(`\\{${cellIndex + 1}\\}`, "g");
      currentLine = currentLine.replace(
        regex,
        row.cells.find(c => c.index === cellIndex)?.value || "<no value>"
      );
    });
    lines.push({ index: row.index, value: currentLine });
  });

  return lines;
});
