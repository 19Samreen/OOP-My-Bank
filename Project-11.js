#!/usr/bin/env node
//OOP Mybank
class BankAccount {
    balance;
    accountNumber;
    constructor(accountNumber) {
        this.balance = 0;
        this.accountNumber = accountNumber;
    }
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited ${amount} into account ${this.accountNumber}.`);
        }
        else {
            console.log("Invalid deposit amount.");
        }
    }
    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrawn ${amount} from account ${this.accountNumber}.`);
        }
        else {
            console.log("Invalid withdrawal amount or insufficient balance.");
        }
    }
    checkBalance() {
        console.log(`Account ${this.accountNumber} balance: ${this.balance}`);
    }
}
class SavingsAccount extends BankAccount {
    constructor(accountNumber) {
        super(accountNumber);
    }
    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            if (this.balance - amount >= 100) {
                this.balance -= amount;
                console.log(`Withdrawn ${amount} from savings account ${this.accountNumber}.`);
            }
            else {
                console.log("Minimum balance requirement not met.");
            }
        }
        else {
            console.log("Invalid withdrawal amount or insufficient balance.");
        }
    }
}
// Example usage
const savingsAccount = new SavingsAccount("SAV12345");
savingsAccount.deposit(1000);
savingsAccount.checkBalance(); // Expected output: "Account SAV12345 balance: 1000"
savingsAccount.withdraw(200);
savingsAccount.checkBalance(); // Expected output: "Account SAV12345 balance: 800"
savingsAccount.withdraw(700);
savingsAccount.checkBalance(); // Expected output: "Minimum balance requirement not met."
export {};
