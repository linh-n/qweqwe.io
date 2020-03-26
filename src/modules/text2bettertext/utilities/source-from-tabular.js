export const indexToColumn = index => {
  if (index === undefined || index === null || index < 0) {
    return null;
  }

  let residue = parseInt(index);
  let alphabetIndice = [];
  while (residue >= 26) {
    alphabetIndice.push(residue % 26);
    residue = residue / 26 - 1;
  }
  alphabetIndice.push(residue);

  return alphabetIndice.reduce((prev, curr) => String.fromCharCode(65 + curr) + prev, "");
};

export default sourceText => {
  if (!sourceText) {
    return [];
  }

  const rows = sourceText.match(/[^\r\n]+/g);
  const output = rows.map((row, rowIndex) =>
    row.split(/\t/).reduce(
      (prev, curr, indx) => ({
        ...prev,
        [indexToColumn(indx)]: curr,
      }),
      { index: rowIndex + 1 }
    )
  );

  return output;
};
