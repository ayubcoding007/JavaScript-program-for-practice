class BankAccount {
  #balance; // private variable

  constructor(balance) {
    this.#balance = balance;
  }

  deposit(amount) {
    this.#balance += amount;
    console.log("Deposited:", amount);
  }

  withdraw(amount) {
    if (amount <= this.#balance) {
      this.#balance -= amount;
      console.log("Withdrawn:", amount);
    } else {
      console.log("Insufficient balance");
    }
  }

  getBalance() {
    return this.#balance;
  }
}

let user1 = new BankAccount(1000);

user1.deposit(500);
user1.withdraw(300);

console.log("Balance:", user1.getBalance());