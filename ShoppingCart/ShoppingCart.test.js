const { ShoppingCart } = require('./ShoppingCart');

describe("Shopping Cart System", () => {
    let cart;

    beforeEach(() => {
        cart = new ShoppingCart();
    });

    test("Subtotal is calculated correctly", () => {
        cart.addProduct("Laptop", 1000, 1);
        cart.addProduct("Mouse", 50, 2);
        expect(cart.getSubtotal()).toBe(1100);
    });

    test("Error when adding quantity <= 0", () => {
        expect(() => {
            cart.addProduct("Keyboard", 100, 0);
        }).toThrow("Quantity must be greater than zero");
    });

    test("Coupon applies correct discount", () => {
        cart.addProduct("Monitor", 200, 1);
        cart.applyCoupon("DISC10");

        // Subtotal = 200. Discount = 20. Subtotal with discount = 180.
        // Tax (19% of 180) = 34.2. Final total = 214.2

        expect(cart.calculateTotal()).toBe(214.2);
    });

    test("Error when applying invalid coupon", () => {
        cart.addProduct("Tablet", 300, 1);
        cart.applyCoupon("DISC20");

        expect(() => {
            cart.applyCoupon("DISC10");
        }).toThrow("Coupon already applied");
    });

    test("Tax is calculates correctly (19% after discount)", () => {
        cart.addProduct("Headphones", 500, 1);
        cart.applyCoupon("DISC20"); // 20% off
        //New price = 400. Tax = 19% of 400 = 76

        expect(cart.getTax()).toBe(76);
    });

    test("Final total is correct (Subtotatl -Dicount +tax)", () => {
        cart.addProduct("Smartphone", 100, 1);

        expect(cart.calculateTotal()).toBe(119); // Subtotal = 100, Tax = 19, Total = 119 no discount applied
    });

});