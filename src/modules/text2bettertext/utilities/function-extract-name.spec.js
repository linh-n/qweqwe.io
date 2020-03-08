import extractFunctionName from "./function-extract-name";

describe("[Utility] Extract function name", () => {
  it("should return null if function is falsy", () => {
    expect(extractFunctionName("")).toBeNull();
    expect(extractFunctionName(null)).toBeNull();
    expect(extractFunctionName(undefined)).toBeNull();
  });

  it("should return null if pattern doesn't match", () => {
    const functionStr = "qweqwe";
    expect(extractFunctionName(functionStr)).toBeNull();
  });

  it("should return function name", () => {
    const functionStr = "function func_1 () {\nreturn 0;\n};";
    expect(extractFunctionName(functionStr)).toEqual("func_1");
  });
});
