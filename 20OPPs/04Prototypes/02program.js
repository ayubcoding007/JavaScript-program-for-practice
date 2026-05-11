function User(name) {
    this.name = name;
}

User.prototype.sayHello = function () {
    console.log("Hello " + this.name);
};

const u1 = new User("Sheikh");
const u2 = new User("Ayub");

u1.sayHello();
u2.sayHello();