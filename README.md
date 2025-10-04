# Tarea_1
Ejercicios 1 y 2

Ejercicio 1: Sistema de Evaluación de Riesgo Bancario

Descripcion:
Este proyecto implementa un sistema de evaluación de riesgo para clientes bancarios en JavaScript con Node.js, basado en factores como ingresos, cantidad de préstamos activos, pagos atrasados y estado de estudiante. La función evaluateRisk determina el nivel de riesgo ("High", "Moderate" o "Low") según las condiciones especificadas.

Requisitos: 

1. Entrada: 

-income (número): Ingresos anuales del cliente en dólares.  

-hasLoans (booleano): Indica si el cliente tiene préstamos activos.

-latePayments (número): Cantidad de pagos atrasados.  

-isStudent (booleano): Indica si el cliente es estudiante.

2. Salida: String con el nivel de riesgo ("High", "Moderate" o "Low").




Lógica de la evaluación:  


1. Cliente de alto riesgo:
   
-Ingresos menores a $20,000 y más de 3 pagos atrasados, o  

-Tiene préstamos activos y es estudiante.

2. Cliente de riesgo moderado:
   
   -Ingresos entre $20,000 y $50,000, y no tiene más de 2 pagos atrasados, o
   
   -Tiene préstamos pero no es estudiante.

3. Cliente de bajo riesgo: 

-Si no cumple ninguna de las condiciones anteriores.





Código implementado:

El código se encuentra en el archivo SistemEvaluacion.js.




Explicación del código:  

La función evaluateRisk toma cuatro parámetros: income, hasLoans, latePayments, e isStudent.

Las condiciones se evalúan en orden de prioridad usando if-else if-else:

1. Alto riesgo: Se verifica si los ingresos son menores a $20,000 con más de 3 pagos atrasados, o si el cliente tiene préstamos y es estudiante.

2. Riesgo moderado: Se verifica si los ingresos están entre $20,000 y $50,000 con 2 o menos pagos atrasados, o si tiene préstamos pero no es estudiante.

3. Bajo riesgo: Cualquier caso que no cumpla las condiciones anteriores.

Los ejemplos de uso imprimen los resultados en la consola para validar el funcionamiento.





---

Ejercicio 2: Motor de Recomendación de Productos

Descripción:

Este proyecto implementa un motor de recomendación de productos en JavaScript con Node.js, basado en la edad del usuario, su estado de membresía y su historial de compras. La función recommendProduct evalúa diferentes criterios para sugerir un producto de alta tecnología, moda o genérico según las condiciones especificadas.

Requisitos:
1. Entrada:

   -age (número): Edad del usuario.
   
   -isMember (booleano): Indica si el usuario es miembro.
   
   -purchaseHistory (objeto): Contiene la cantidad de productos comprados por categoría (tech, fashion, other).

3. Salida: String con la recomendación ("High-Tech Product", "Fashion Product", o "Generic Product").


Lógica de la recomendación: 
1. Producto de alta tecnología:
   
-La persona es miembro (isMember === true) y ha comprado al menos 5 productos tecnológicos (purchaseHistory.tech >= 5) antes, o 

-La persona tiene entre 18 y 30 años (18 <= age <= 30) y ha comprado 2 o más productos en total (purchaseHistory.tech + purchaseHistory.fashion + purchaseHistory.other >= 2).

2. Producto de moda:
   
-La persona no es miembro (isMember === false) o no ha comprado al menos 3 productos en total (purchaseHistory.tech + purchaseHistory.fashion + purchaseHistory.other < 3).

3. Producto genérico:  La persona tiene entre 25 y 40 años (25 <= age <= 40), o  
Cualquier otro caso no cubierto por las condiciones anteriores.


Código implementado:

El código se encuentra en el archivo recommend.js. 


Explicación del código: 

-La función recommendProduct toma tres parámetros: age, isMember, y purchaseHistory.

-Se calcula totalPurchases sumando las compras en todas las categorías para evaluar las condiciones.

-Las condiciones se evalúan en orden de prioridad usando if-else if-else:

1. Si se cumple la condición de alta tecnología (miembro con 5+ productos tech o edad 18-30 con 2+ compras totales), retorna "High-Tech Product".
   
2. Si no, verifica si aplica un producto de moda (no miembro o menos de 3 compras totales).
   
3. Si ninguna de las anteriores se cumple (o edad entre 25-40), retorna "Generic Product".

-El caso por defecto asegura que cualquier escenario no cubierto caiga en "Generic Product".

-Los ejemplos de uso imprimen los resultados en la consola para verificar el funcionamiento.





Autor: Chris
Fecha: 04 de octubre de 2025, 01:08 AM CST  




