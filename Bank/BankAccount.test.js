const {BankAccount} = require('./BankAccount');


describe("BankAccount", () => {
    test("Valid deposit increases balance", () => {
        const account = new BankAccount(100);
        account.deposit(50);
        expect(account.getBalance()).toBe(150);
    });

    test("Valid withdraw decreases balance", () => {
        const account = new BankAccount(100);
        account.withdraw(40);
        expect(account.getBalance()).toBe(60);
    });

    test("Error on excessive withdrawal", () => {
        const account = new BankAccount(100);
        expect(() => account.withdraw(150)).toThrow("Not enough balance");
    });

    test("Error on invalid amount (<= 0)", () => {
        const account = new BankAccount(100);
        expect(() => account.deposit(0)).toThrow("Amount must be greater than zero");
        expect(() => account.withdraw(-50)).toThrow("Amount must be greater than zero");
    });

    test("History records transactions correctly", () => {
        const account = new BankAccount(100);
        account.deposit(50);
        account.withdraw(20);
        
        const history = account.getHistory();
        expect(history.length).toBe(2);
        
        expect(history[0]).toEqual({ type: 'deposit', amount: 50 });
        expect(history[1]).toEqual({ type: 'withdraw', amount: 20 });
    });
});
