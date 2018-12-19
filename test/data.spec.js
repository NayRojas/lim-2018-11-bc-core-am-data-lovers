require('../src/data.js');


describe('LOL', () => {
  it('debería ser un objeto', () => {
    expect(typeof LOL).toBe('object');
  });

  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});
