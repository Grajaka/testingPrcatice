const { isPrime } = require('./IsPrime');

describe("isPrime function", () => {

    test("Check if 2 is a prime number", () => {
        expect(isPrime(2)).toBe(true);
    });

    test("Check if 17 is a prime number", () => {
        expect(isPrime(17)).toBe(true);
    });

     test("Check if 17 is a prime number", () => {
        expect(isPrime(17)).toBe(true);
    });

    test("Check if 1 and negative numbers are prime numbers", () => {
        expect(isPrime(1)).toBe(false);
        expect(isPrime(-5)).toBe(false);
    });
});
