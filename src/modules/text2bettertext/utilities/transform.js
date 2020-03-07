import templateToParameters from "./template-to-parameters";

export default ({ source, template }) => {
  if (!source || !template) {
    return [];
  }

  const templateParameters = templateToParameters(template);

  const transformItem = sourceItem =>
    templateParameters.reduce((prev, curr) => {
      if (prev === null || (curr.isRequired && !sourceItem[curr.sourceProperty])) {
        return null;
      }

      const escapedExpression = curr.expression.replace(/[-\\^$*+?.()|[\]{}]/g, "\\$&");
      const regex = new RegExp(escapedExpression, "g");
      return prev.replace(regex, sourceItem[curr.sourceProperty] || "");
    }, template);

  return source.map(transformItem).filter(item => !!item);
};
