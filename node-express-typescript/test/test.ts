import assert from "assert";
import sum from "../sum";

describe("check sum function", function () {
  it("should return 3 when the params are 1 and 2", function () {
    assert.equal(sum(1, 2), 3);
  });
});
