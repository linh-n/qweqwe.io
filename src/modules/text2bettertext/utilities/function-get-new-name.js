export default ({ existingNames = [], nameTemplate = "function_" }) => {
  if (existingNames === null || existingNames === undefined) {
    return null;
  }

  const regex = new RegExp(`${nameTemplate}(\\d+)`, "g");
  const lastNumberInName = existingNames.reduce((prev, curr) => {
    const match = regex.exec(curr);
    if (match?.length > 1) {
      const numberInName = parseInt(match[1]);
      return Math.max(numberInName, prev);
    }
    return prev;
  }, 0);

  return `${nameTemplate}${lastNumberInName + 1}`;
};
