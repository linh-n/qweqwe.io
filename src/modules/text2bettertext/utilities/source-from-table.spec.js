import sourceFromTable from "./source-from-table";

describe("[Utility] Table to source array converter", () => {
  it("should return empty if source text is falsy", () => {
    expect(sourceFromTable("")).toHaveLength(0);
    expect(sourceFromTable(null)).toHaveLength(0);
    expect(sourceFromTable(undefined)).toHaveLength(0);
  });

  it("should return correct number of items", () => {
    const sourceText = "line-1\nline-2\nline3";
    expect(sourceFromTable(sourceText)).toHaveLength(3);
  });

  it("should normalize a simple line", () => {
    const sourceText = "France\t653\t+230";
    const expected = [
      {
        "1": "France",
        "2": "653",
        "3": "+230",
      },
    ];

    expect(sourceFromTable(sourceText)).toEqual(expected);
  });

  it("should handle empty lines or cells", () => {
    const sourceText = "France\t653\t+230\n\nSwitzerland\t\t42";
    const result = sourceFromTable(sourceText);
    expect(result).toHaveLength(2); // 1 empty line -> only 2 items
    expect(result[1]["1"]).toBe("Switzerland"); // second item being Switzerland
    expect(result[1]["2"]).toBe(""); // empty cell
    expect(result[1]["3"]).toBe("42");
  });
});
