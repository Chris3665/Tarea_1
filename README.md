# Tarea_1
Ejercicios 1 &amp; 2
Este proyecto implementa una función llamada recommendProduct que recomienda productos a un usuario según su edad, membresía y historial de compras. El historial se representa como un objeto con categorías como tech, fashion, etc.
Lógica de recomendación
- Se recomienda un producto de alta tecnología si:
- El usuario es miembro y ha comprado al menos 5 productos tecnológicos.
- O si tiene entre 18 y 30 años y ha comprado 2 o más productos de moda.
- Se recomienda un producto de moda si:
- El usuario no es miembro pero ha comprado al menos 3 productos de moda.
- O si tiene entre 25 y 40 años.
- En cualquier otro caso, se recomienda un producto genérico.

Ejemplo de uso:
console.log(recommendProduct(22, true, { tech: 6, fashion: 1, other: 2 }));
// Resultado: "High-Tech Product"
