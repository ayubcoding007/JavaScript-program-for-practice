/*
Abstraction is an Object-Oriented Programming (OOP) concept where only essential 
features are shown to the user and unnecessary implementation details are hidden.

Abstraction is the process of hiding internal implementation details and showing 
only the required functionality to the user.


*/
class BankAccount {
  #balance;

  constructor(balance) {
    this.#balance = balance;
  }

  deposit(amount) {
    this.#balance += amount;
    console.log("Deposit successful");
  }

  withdraw(amount) {
    if (amount <= this.#balance) {
      this.#balance -= amount;
      console.log("Withdrawal successful");
    } else {
      console.log("Insufficient balance");
    }
  }

  checkBalance() {
    console.log("Balance:", this.#balance);
  }
}

let user = new BankAccount(1000);

user.deposit(500);
user.withdraw(200);
user.checkBalance();

