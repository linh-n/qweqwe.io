import sourceFromTabular, { indexToColumn } from "./source-from-tabular";

describe("[Utility] Tabular to source array converter", () => {
  describe("Index to column function", () => {
    it("should return null if index is invalid", () => {
      expect(indexToColumn(-1)).toBeNull();
      expect(indexToColumn(null)).toBeNull();
      expect(indexToColumn(undefined)).toBeNull();
    });

    it("should return single letter column", () => {
      expect(indexToColumn(0)).toEqual("A");
      expect(indexToColumn(2)).toEqual("C");
      expect(indexToColumn(25)).toEqual("Z");
    });

    it("should return multiple letter column", () => {
      expect(indexToColumn(26)).toEqual("AA");
      expect(indexToColumn(103)).toEqual("CZ");
      expect(indexToColumn(702)).toEqual("AAA");
    });
  });

  describe("Main function", () => {
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
          index: 1,
          A: "France",
          B: "653",
          C: "+230",
        },
      ];

      expect(sourceFromTabular(sourceText)).toEqual(expected);
    });

    it("should handle empty lines or cells", () => {
      const sourceText = "France\t653\t+230\n\nSwitzerland\t\t42";
      const result = sourceFromTabular(sourceText);
      expect(result).toHaveLength(2); // 1 empty line -> only 2 items
      expect(result[1]["A"]).toBe("Switzerland"); // second item being Switzerland
      expect(result[1]["B"]).toBe(""); // empty cell
      expect(result[1]["C"]).toBe("42");
    });
  });
});
