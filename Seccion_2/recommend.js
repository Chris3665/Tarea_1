function recommendProduct(age, isMember, purchaseHistory) {
    // Calcular el total de productos comprados
    const totalPurchases = purchaseHistory.tech + purchaseHistory.fashion + purchaseHistory.other;

    // Condición para High-Tech Product
    if ((isMember && purchaseHistory.tech >= 5) || 
        (age >= 18 && age <= 30 && totalPurchases >= 2)) {
        return "High-Tech Product";
    }
    // Condición para Fashion Product
    else if (!isMember || totalPurchases < 3) {
        return "Fashion Product";
    }
    // Condición para Generic Product
    else if (age >= 25 && age <= 40) {
        return "Generic Product";
    }
    // Caso por defecto (cualquier otro escenario)
    else {
        return "Generic Product";
    }
}

//console.log(recommendProduct(22, true, { tech: 6, fashion: 1, other: 2 }));
//console.log(recommendProduct(35, false, { tech: 1, fashion: 0, other: 1 }));
//console.log(recommendProduct(28, true, { tech: 3, fashion: 0, other: 0 }));
console.log(recommendProduct(30, false, { tech: 0, fashion: 0, other: 0 }));