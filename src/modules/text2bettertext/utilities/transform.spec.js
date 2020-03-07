import transform from "./transform";

describe("[Utility] Source array transformer", () => {
  it("should return empty if source or template is falsy", () => {
    expect(transform({ source: [], template: "" })).toHaveLength(0);
    expect(transform({ source: null, template: null })).toHaveLength(0);
    expect(transform({ source: undefined, template: undefined })).toHaveLength(0);
  });

  it("should return correct number of output items", () => {
    const source = [{ "1": "value-1" }, { "2": "value-2" }];
    const template = "qweqwe";

    expect(transform({ source, template })).toHaveLength(2);
  });

  it("should apply simple template to one source item", () => {
    const source = [{ "1": "dog" }];
    const template = "{1} is a good boy";

    expect(transform({ source, template })).toEqual(["dog is a good boy"]);
  });

  it("should apply one expression multiple times", () => {
    const source = [{ "1": "dog" }];
    const template = "a {1} is a {1}";

    expect(transform({ source, template })).toEqual(["a dog is a dog"]);
  });

  it("should skip empty items if param has isRequired", () => {
    const source = [{ "1": "dog" }, { "1": "", "2": "cat" }, { "1": "mouse", "2": "sloth" }];
    const template = "a {1!} is not a {2!}";

    expect(transform({ source, template })).toHaveLength(1);
  });
});
