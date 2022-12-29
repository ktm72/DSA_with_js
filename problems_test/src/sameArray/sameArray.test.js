var assert = require("chai").assert;
const sameArray = require("./sameArray");

describe("Same Array", function () {
  it("should check same array length", function () {
    assert.isBoolean(sameArray([2, 3, 6], [3, 9, 4]), true);
  });
  it("should check same array length", function () {
    assert.isBoolean(sameArray([2, 3, 6], [3, 4]), false);
  });
  it("2nd array should have squred of values of 1st array", function () {
    assert.isBoolean(sameArray([2, 3, 6], [3, 9, 36]), false);
  });
  it("2nd array should have squred of values of 1st array", function () {
    assert.isBoolean(sameArray([2, 3, 6], [4, 9, 36]), true);
  });
  it("checks mixed array", function () {
    assert.isBoolean(sameArray([2, 4], ["a", 16]), false);
  });
  it("checks mixed array", function () {
    assert.isBoolean(sameArray([2, 4], [{ id: 4 }, 16]), false);
  });
  it("checks empty array", function () {
    assert.isBoolean(sameArray([2, 4], []), false);
  });
});
