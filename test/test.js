'use strict';
const { assert: { equal, isFunction } } = require("chai");
const { add } = require("../js/addItem");


// test to make sure all is working
describe("just a test", () => {
  it("should be equal", () => {
    equal(3, 1 + 2);
  });
});

// tests for addItem.js
describe("addItem module", () => {

  describe("should add toy to bag", () => {
    it("should be a function", () => {
      isFunction(add);
    });
  });

});