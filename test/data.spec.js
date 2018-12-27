

require('../src/data.js');

describe('window.dataLOL', () => {
  it('debería ser una objeto', () => {
    expect(typeof window.dataLOL).toBe('object');
  });
});

/*
  it('deberia mostrar los 5 campeones de la semana', () => {
    expect(()).toBe('example');
  });
*/
