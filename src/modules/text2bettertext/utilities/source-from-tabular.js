export default sourceText => {
  if (!sourceText) {
    return [];
  }

  const rows = sourceText.match(/[^\r\n]+/g);
  const output = rows.map((row, rowIndex) =>
    row.split(/\t/).reduce(
      (prev, curr, indx) => ({
        ...prev,
        [indx + 1]: curr,
      }),
      { index: rowIndex }
    )
  );

  return output;
};
