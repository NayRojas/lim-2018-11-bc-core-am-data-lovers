

require('../src/data.js');

describe('LOL', () => {
  it('debería ser una función', () => {
    expect(typeof window.LOL).toBe('function');
  });

  it('deberia mostrar los 5 campeones de la semana', () => {
    expect(newArray()).toBe('example');
  });
});
