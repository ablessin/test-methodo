// externalService.js

// Fonction à tester
function getDataFromExternalService() {
    // Supposez que cette fonction fait une requête HTTP ou une opération externe
    // et retourne une promesse avec des données
    return new Promise((resolve, reject) => {
      // Simulation d'une opération asynchrone (par exemple, une requête HTTP)
      setTimeout(() => {
        resolve('Data from external service');
      }, 1000);
    });
  }
  
  // Export de la fonction
  module.exports = { getDataFromExternalService };
  