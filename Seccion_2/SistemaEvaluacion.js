function evaluateRisk(Income, hasLoans, latePayments, isStudent) {
  // Alto riesgo
  if ((Income < 20000 && latePayments > 3) || (latePayments > 0 && isStudent)) {
    return 'High';
  }

  // Riesgo moderado
  if (Income >= 20000 && Income <= 50000 && latePayments <= 1) {
    return 'Moderate';
  }

  // Bajo riesgo
  if (Income > 50000 && latePayments === 0 && !hasLoans && !isStudent) {
    return 'Low';
  }

  // Si no cumple ninguna condición específica
  return 'Moderate';
}

//console.log(evaluateRisk(15000, true, 4, true));
//console.log(evaluateRisk(30000, false, 1, false))
console.log(evaluateRisk(60000, false, 0, false));