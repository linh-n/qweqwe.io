import getNewFunctionName from "./function-get-new-name";

describe("[Utility] Get new function name", () => {
  it("should accept name if existing function names null/undefined", () => {
    expect(
      getNewFunctionName({
        existingNames: null,
        proposedName: "functionName",
      })
    ).toEqual("functionName");
    expect(
      getNewFunctionName({
        existingNames: undefined,
        proposedName: "functionName",
      })
    ).toEqual("functionName");
  });

  it("should add _1 if an identical name exist", () => {
    const existingNames = ["newFunction", "delete", "add"];
    const proposedName = "newFunction";

    expect(getNewFunctionName({ existingNames, proposedName })).toEqual("newFunction_1");
  });

  it("should return n+1 name", () => {
    const existingNames = ["newFunction", "newFunction_1", "delete", "add"];
    const proposedName = "newFunction";

    expect(getNewFunctionName({ existingNames, proposedName })).toEqual("newFunction_2");
  });

  it("should accept proposed name if no names match template", () => {
    const existingNames = ["edit", "delete", "add"];
    const proposedName = "newFunction";

    expect(getNewFunctionName({ existingNames, proposedName })).toEqual("newFunction");
  });
});
