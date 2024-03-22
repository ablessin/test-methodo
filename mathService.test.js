// mathService.test.js

// Import du service et des modules nécessaires
const MathService = require('./mathService');

// Tests pour le service MathService
describe('MathService', () => {
  // Test de la méthode add()
  test('adds 1 + 2 to equal 3', () => {
    expect(MathService.add(1, 2)).toBe(3);
  });
  
  // Test de la méthode subtract()
  test('subtracts 3 - 2 to equal 1', () => {
    expect(MathService.subtract(3, 2)).toBe(1);
  });
  
  // Test de la méthode multiply()
  test('multiplies 2 * 3 to equal 6', () => {
    expect(MathService.multiply(2, 3)).toBe(6);
  });
  
  // Test de la méthode divide()
  test('divides 6 / 2 to equal 3', () => {
    expect(MathService.divide(6, 2)).toBe(3);
  });
  
  // Test de la division par zéro
  test('throws an error when dividing by zero', () => {
    expect(() => MathService.divide(6, 0)).toThrow();
  });
});
