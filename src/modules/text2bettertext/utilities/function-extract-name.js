export default functionStr => {
  if (!functionStr) {
    return null;
  }

  const functionNameRegex = /function\s+([a-zA-Z0-9_]+)[\s(]/g;
  const match = functionNameRegex.exec(functionStr);

  if (match?.length > 1) {
    return match[1];
  }

  return null;
};
