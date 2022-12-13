class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log("hello, my name is " + this.name);
    console.log("hello, my age is " + this.age);
  }
}

const adam = new Person("Adam Ondra", 29);
adam.greet();

const janja = new Person("Janja Garnbret", 23);
janja.greet();

const ayman = new Person("Ayman Khan", 7);
ayman.greet();
