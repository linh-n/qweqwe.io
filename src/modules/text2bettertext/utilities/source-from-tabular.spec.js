import sourceFromTabular from "./source-from-tabular";

describe("[Utility] Tabular to source array converter", () => {
  it("should return empty if source text is falsy", () => {
    expect(sourceFromTabular("")).toHaveLength(0);
    expect(sourceFromTabular(null)).toHaveLength(0);
    expect(sourceFromTabular(undefined)).toHaveLength(0);
  });

  it("should return correct number of items", () => {
    const sourceText = "line-1\nline-2\nline3";
    expect(sourceFromTabular(sourceText)).toHaveLength(3);
  });

  it("should normalize a simple line", () => {
    const sourceText = "France\t653\t+230";
    const expected = [
      {
        index: 0,
        "1": "France",
        "2": "653",
        "3": "+230",
      },
    ];

    expect(sourceFromTabular(sourceText)).toEqual(expected);
  });

  it("should handle empty lines or cells", () => {
    const sourceText = "France\t653\t+230\n\nSwitzerland\t\t42";
    const result = sourceFromTabular(sourceText);
    expect(result).toHaveLength(2); // 1 empty line -> only 2 items
    expect(result[1]["1"]).toBe("Switzerland"); // second item being Switzerland
    expect(result[1]["2"]).toBe(""); // empty cell
    expect(result[1]["3"]).toBe("42");
  });
});
