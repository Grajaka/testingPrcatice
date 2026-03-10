# TestingTask1

## Descripción

Este proyecto es una colección de módulos JavaScript que implementan diversas funcionalidades, incluyendo gestión de cuentas bancarias, sistema de alquiler de autos, conversor de temperaturas, verificación de números primos y carrito de compras. Cada módulo incluye pruebas unitarias escritas con Jest.

## Instalación

Para instalar las dependencias del proyecto, ejecuta:

```bash
npm install
```

## Uso

El proyecto consta de los siguientes módulos:

- **BankAccount** (`Bank/BankAccount.js`): Gestiona operaciones básicas de una cuenta bancaria como depósitos y retiros.
- **RentalSystem** (`CarRental/RentalSystem.js`): Maneja el alquiler de autos, incluyendo reservas y devoluciones.
- **TempConverter** (`Conversor/TempConverter.js`): Convierte temperaturas entre Celsius, Fahrenheit y Kelvin.
- **isPrime** (`Prime/isPrime.js`): Verifica si un número es primo.
- **ShoppingCart** (`ShoppingCart/ShoppingCart.js`): Gestiona un carrito de compras con adición y eliminación de artículos.

Cada módulo puede ser importado y utilizado en tu código JavaScript.

## Pruebas

Para ejecutar las pruebas unitarias, usa:

```bash
npm test
```

Las pruebas están ubicadas en los archivos `.test.js` correspondientes a cada módulo.

## Licencia

ISC