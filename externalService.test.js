// externalService.test.js

// Import du module à tester
const { getDataFromExternalService } = require('./externalService');

// Mock de la fonction getDataFromExternalService
jest.mock('./externalService', () => ({
  getDataFromExternalService: jest.fn().mockResolvedValue('Mocked data from external service')
}));

// Test de la fonction getDataFromExternalService avec le mock
test('getDataFromExternalService returns mocked data', async () => {
  const data = await getDataFromExternalService();
  expect(data).toBe('Mocked data from external service');
});

// Testez d'autres fonctionnalités qui utilisent getDataFromExternalService
