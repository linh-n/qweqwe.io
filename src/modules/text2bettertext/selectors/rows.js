import { createSelector } from "reselect";

const PREVIEW_ROWS = 10;

const getSourceText = state => state.text2bettertext.sourceText;

export const selectTableRows = createSelector(getSourceText, sourceText => {
  const rows = sourceText.match(/[^\r\n]+/g);
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
