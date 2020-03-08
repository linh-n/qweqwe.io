export default ({ existingNames = [], proposedName = "newFunction" }) => {
  if (!existingNames || existingNames.length === 0) {
    return proposedName;
  }

  const regex = new RegExp(`${proposedName}_?(\\d+)?`);
  const lastNumberInName = existingNames.reduce((prev, curr) => {
    const match = regex.exec(curr);
    if (match) {
      const numberInName = parseInt(match[1] || 0);
      return Math.max(numberInName, prev);
    }
    return prev;
  }, -1);

  if (lastNumberInName === -1) {
    return proposedName;
  }

  return `${proposedName}_${lastNumberInName + 1}`;
};
