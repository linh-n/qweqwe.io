export default templateText => {
  if (!templateText) {
    return [];
  }

  let matches = templateText.matchAll(/{(\d+)(!)?(:[a-z0-9|]*)?}/g);
  let cellsInTemplate = [];
  for (const match of matches) {
    cellsInTemplate.push({
      expression: match[0],
      sourceProperty: match[1],
      isRequired: !!match[2],
      functions: match[3] ? match[3].substr(1).split("|") : [],
    });
  }

  // remove duplicates
  cellsInTemplate = cellsInTemplate.reduce((prev, curr) => {
    if (!prev.map(item => JSON.stringify(item)).includes(JSON.stringify(curr))) {
      prev.push(curr);
    }
    return prev;
  }, []);

  return cellsInTemplate;
};
