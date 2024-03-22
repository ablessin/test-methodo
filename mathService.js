const MathService = {
  // Méthode pour additionner deux nombres
  add: function (a, b) {
    return a + b;
  },

  // Méthode pour soustraire deux nombres
  subtract: function (a, b) {
    return a - b;
  },

  // Méthode pour multiplier deux nombres
  multiply: function (a, b) {
    return a * b;
  },

  // Méthode pour diviser deux nombres
  divide: function (a, b) {
    if (b === 0) {
      throw new Error("Division by zero is not allowed");
    }
    return a / b;
  },
};

module.exports = MathService;
