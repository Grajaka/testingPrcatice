class ShoppingCart {
    constructor() {
        this.products = [];
        this.discount = 0;
        this.couponApplied = false;
    }

    addProduct(name, price, quantity) {
        if (quantity <= 0) {
            throw new Error("Quantity must be greater than zero");
        }
        this.products.push({ name, price, quantity });
    }

    applyCoupon(couponCode) {
        if (this.couponApplied) {
            throw new Error("Coupon already applied");
        }
        if (couponCode === "DISC10") {
            this.discount = 0.10;
        } else if (couponCode === "DISC20") {
            this.discount = 0.20;
        } else {
            throw new Error("Invalid coupon code");
        }
        this.couponApplied = true;
    }

    getSubtotal() {
        return this.products.reduce((total, item) => total + item.price * item.quantity, 0);
    }

    getTax() {
        const subTotalWithDiscount = this.getSubtotal() * (1 - this.discount);
        return subTotalWithDiscount * 0.19;
    }

    calculateTotal() {
        const subTotalWithDiscount = this.getSubtotal() * (1 - this.discount);
        const finalTotal = subTotalWithDiscount + this.getTax();

        return finalTotal >= 0 ? finalTotal : 0;
    }
}

module.exports = { ShoppingCart };