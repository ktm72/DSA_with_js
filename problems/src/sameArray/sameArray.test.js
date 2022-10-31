var assert = require("chai").assert;
const sameArray = require("./sameArray");

describe("Same Array", function () {
  it("should check same array length", function () {
    assert.isBoolean(sameArray([2, 3, 6], [3, 9, 4]), true);
  });
  it("should check same array length", function () {
    assert.isBoolean(sameArray([2, 3, 6], [3, 4]), false);
  });
  it("2nd array should have squred of 1st array of values", function () {
    assert.isBoolean(sameArray([2, 3, 6], [3, 9, 36]), false);
  });
  it("2nd array should have squred of 1st array of values", function () {
    assert.isBoolean(sameArray([2, 3, 6], [4, 9, 36]), true);
  });
});
