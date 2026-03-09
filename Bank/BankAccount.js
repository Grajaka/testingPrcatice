class BankAccount {
    constructor(initialBalance =0){
        this.balance = initialBalance;
        this.history =[];

    }

    deposit(amount)
    {
        if (amount <= 0) {
            throw new Error(" Amount must be greater than zero");
        }
        this.balance += amount;
        this.history.push({ type: 'deposit', amount: amount });
    }

    withdraw(amount){
       if (amount <= 0) {
        throw new Error(" Amount must be greater than zero");
       }
         if (amount > this.balance) {
            throw new Error(" Not enough balance");
        }
        this.balance -= amount;
        this.history.push({ type: 'withdraw', amount: amount });
    }

    getBalance(){
        return this.balance;
    }

    getHistory(){
        return this.history;
    }
}

module.exports = { BankAccount };