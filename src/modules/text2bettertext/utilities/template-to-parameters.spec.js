import templateToParameters from "./template-to-parameters";

describe("[Utility] Template to parameters converter", () => {
  it("should return empty array if template text is falsy", () => {
    expect(templateToParameters("  ")).toHaveLength(0);
    expect(templateToParameters(null)).toHaveLength(0);
    expect(templateToParameters(undefined)).toHaveLength(0);
  });

  it("should return empty if no expressions found", () => {
    const templateText = "qweqwe";
    const results = templateToParameters(templateText);
    expect(results).toHaveLength(0);
  });

  it("should return correct number of items", () => {
    const templateText = "{1} is {2}";
    const results = templateToParameters(templateText);
    expect(results).toHaveLength(2);
  });

  it("should not return duplicate items", () => {
    const templateText = "{2} is {2}";
    const results = templateToParameters(templateText);
    expect(results).toHaveLength(1);
  });

  it("should return results in correct format", () => {
    const templateText = "{2} = true";
    const firstResult = templateToParameters(templateText)[0];
    expect(firstResult).toHaveProperty("expression");
    expect(firstResult).toHaveProperty("sourceKey");
    expect(firstResult).toHaveProperty("isRequired");
    expect(firstResult).toHaveProperty("functions");
  });

  it("should process expressions of number and string", () => {
    const templateText = "{2} = {key}";
    const results = templateToParameters(templateText);
    expect(results).toHaveLength(2);
  });

  it("should process required item", () => {
    const templateText = "{2!} = true";
    const results = templateToParameters(templateText);
    expect(results[0].isRequired).toBe(true);
  });

  it("should parse functions", () => {
    const templateText = "{2:func1|func2} = true";
    const functions = templateToParameters(templateText)[0].functions;
    expect(functions).toHaveLength(2);
    expect(functions).toContain("func1");
    expect(functions).toContain("func2");
  });

  it("should return correct simple results", () => {
    const templateText = "{2} = true";
    const firstResult = templateToParameters(templateText)[0];
    expect(firstResult.expression).toBe("{2}");
    expect(firstResult.sourceKey).toBe("2");
    expect(firstResult.isRequired).toBe(false);
    expect(firstResult.functions).toHaveLength(0);
  });

  it("should return correct complex results", () => {
    const templateText = "{2!:func1|func2} = true";
    const firstResult = templateToParameters(templateText)[0];
    expect(firstResult.expression).toBe("{2!:func1|func2}");
    expect(firstResult.sourceKey).toBe("2");
    expect(firstResult.isRequired).toBe(true);
    expect(firstResult.functions).toContain("func2");
  });
});
