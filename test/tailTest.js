const assert = require('chai').assert;
const tail = require('../tail');

const words = ['Hello', 'Lighthouse', 'Labs'];

describe("#tail", () => {
  it("returns 2 for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(tail(words).length, 2);
  });
  it("returns 'Lighthouse' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(tail(words)[0], 'Lighthouse');
  });
  it("returns 'Labs' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(tail(words)[1], 'Labs');
  });

});