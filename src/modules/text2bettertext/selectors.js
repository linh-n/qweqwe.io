import { createSelector } from "reselect";

const PREVIEW_ROWS = 10;

const getTextTransformerState = state => state.text2bettertext;

export const selectOriginalText = createSelector(getTextTransformerState, state => state.originalText);

export const selectTableRows = createSelector(selectOriginalText, originalText => {
  const rows = originalText.match(/[^\r\n]+/g);
  return rows
    ? rows.map((row, rowIndex) => ({
        index: rowIndex,
        cells: row.split(/\t/).map((cell, cellIndex) => ({
          index: cellIndex,
          value: cell,
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
