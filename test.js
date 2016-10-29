const assert = require('chai').assert;
const expect = require('chai').expect;

const celebrify = require('./'); //  automatically resolve to index.js

describe('celebrify', () => {
  it ('returns a random quote', () => {
    // assert.equal(celebrify('abcdefg'), 'aBcDeFg');
    expect(celebrify('random')).to.be.a('string');
    expect(celebrify('jayden')).to.be.a('string');
    expect(celebrify('Bush')).to.be.a('string');
    expect(celebrify('DJ Khaled')).to.be.a('string');
    // assert.equal(celebrify('ABCDEFG'), 'aBcDeFg');
    // assert.equal(celebrify('a cde g'), 'a cDe g');
    // assert.equal(celebrify('  abc  '), '  aBc  ');
  });

  it('handles no category', () => {
    // expect(celebrify('Obama')).to.throw('Listed category, input must be.');
    // assert.throws(() => celebrify('Obama'));
  });

  it ('throws with non-string input', () => {
    assert.throws(() => celebrify({}));
    assert.throws(() => celebrify([]));
    assert.throws(() => celebrify(undefined));
    assert.throws(() => celebrify(123));
    assert.throws(() => celebrify(0));
    assert.throws(() => celebrify(true));
    assert.throws(() => celebrify(false));
  });

  it ('throws with missing input', () => {
    assert.throws(() => celebrify());
  });
});
