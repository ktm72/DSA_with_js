var expect = require("chai").expect;
const findSelected = require("./findSelected");
const data = [
  {
    id: 1,
    num: "one",
    living: false,
  },
  {
    id: 2,
    num: "one",
    living: true,
  },
  {
    id: 3,
    num: "two",
    living: false,
  },
  {
    id: 4,
    num: "three",
    living: true,
  },
  {
    id: 5,
    num: "two",
    living: true,
  },
  {
    id: 6,
    num: "one",
    living: false,
  },
  {
    id: 7,
    num: "two",
    living: false,
  },
];
describe("Find Selected", function () {
  it("expects matching array of objects in return", function () {
    expect(findSelected(data, ["one", "Three"]), [
      {
        id: 1,
        num: "one",
        living: false,
      },
      {
        id: 2,
        num: "one",
        living: true,
      },
      {
        id: 6,
        num: "one",
        living: false,
      },
      {
        id: 4,
        num: "three",
        living: true,
      },
    ]);
  });
  it("expects matching array of objects in return", function () {
    expect(findSelected(data, ["Three"]), [
      {
        id: 4,
        num: "three",
        living: true,
      },
    ]);
  });
  it("expects empty array", function () {
    expect(findSelected(data, []), []);
  });
  it("expects no data in return if selected is mixed array", function () {
    expect(findSelected(data, [{ id: 2, num: "three" }]), []);
  });
});
