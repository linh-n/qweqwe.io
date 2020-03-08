import getNewFunctionName from "./function-get-new-name";

describe("[Utility] Get new function name", () => {
  it("should return null if existing function names null/undefined", () => {
    expect(
      getNewFunctionName({
        existingNames: null,
      })
    ).toBeNull();
    expect(
      getNewFunctionName({
        existingNames: null,
      })
    ).toBeNull();
  });

  it("should return n+1 name", () => {
    const existingNames = ["function_1", "delete", "function_2", "add"];
    const nameTemplate = "function_";

    expect(getNewFunctionName({ existingNames, nameTemplate })).toEqual("function_3");
  });

  it("should return function_1 if no names match template", () => {
    const existingNames = ["edit", "delete", "add"];
    const nameTemplate = "function_";

    expect(getNewFunctionName({ existingNames, nameTemplate })).toEqual("function_1");
  });
});
