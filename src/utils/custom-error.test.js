const CustomError = require("./custom-error");

describe("Custom Error Test", () => {
  it("returns default error", () => {
    const error = new CustomError("Not found");

    expect(error.message).toEqual("Not found");
    expect(error.status).toEqual(400);
  });
});
