var assert = require("chai").assert;
const duplicate = require("./containsDup");

describe("Contains Duplicate", function () {
  it("should return true", function () {
    assert.isBoolean(duplicate([2, 3, 6, 3, 9, 4]), true);
  });
  it("should return false", function () {
    assert.isBoolean(duplicate([2, 3, 6, 9, 4]), false);
  });
  it("should return false", function () {
    assert.isBoolean(duplicate([2, 5, 11, 19, 4]), false);
  });
});
