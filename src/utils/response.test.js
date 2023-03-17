const response = require("./response");

describe("Response Test", () => {
  it("should create a response object", () => {
    const message = "film data";
    const data = {
      _id: "Film#Id",
      title: "test film",
    };

    const res = response(message, data, true);

    expect(res.message).toEqual("Film data");
    expect(res.success).toEqual(true);
    expect(res.data).toEqual(data);
  });

  it("should not return a null message", () => {
    const message = null;
    const data = {
      _id: "Film#Id",
      title: "test film",
    };

    const res = response(message, data, true);

    expect(res.message).toEqual("");
    expect(res.success).toEqual(true);
    expect(res.data).toEqual(data);
  });
});
