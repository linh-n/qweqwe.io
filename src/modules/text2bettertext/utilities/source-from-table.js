export default sourceText => {
  if (!sourceText) {
    return [];
  }

  const rows = sourceText.match(/[^\r\n]+/g);
  const output = rows.map(row =>
    row.split(/\t/).reduce(
      (prev, curr, indx) => ({
        ...prev,
        [indx + 1]: curr,
      }),
      {}
    )
  );

  return output;
};
