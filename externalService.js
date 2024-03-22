function getDataFromExternalService() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data from external service");
    }, 1000);
  });
}

// Export de la fonction
module.exports = { getDataFromExternalService };
