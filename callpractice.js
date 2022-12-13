
let objA = {
    function(child) {
        return `${this.nam} ${this.age} ${child}`;
    }
}

let objB = {
    nam: "Ayman",
    age: 6,
}

console.log(objA.function.call(objB, "n"));



let objCar = {
    car: function (brand, colour) {
        return `${this.name} is a ${brand} company car. It is in ${colour} colour.`
    }
}

let objInfo = {
    name: "SX4",
}

console.log(objCar.car.apply(objInfo, ["Maruti", "grey"]));

// const fruits = ["apple", "banana", "cherry", "kiwi"];
// const newFruits = fruits.map((fruit, index, arr) => fruit.toUpperCase());
// console.log(newFruits)

let objN = {
    function(age) {
        return `${this.firstName} ${this.lastName} ${age}`
    }
}

let objM = {
    firstName: "Ayman",
    lastName: "Khan",
}

console.log(objN.function.call(objM, 15));

let objC = {
    find: function (age) {
        return `${this.company} is a pencil company. it is ${age} years old.`
    }
}

let objD = {
    company: "Natraj"
}

console.log(objC.find.call(objD, 100));


// MAP

// const fruits = ["apple", "banana", "cherry", "kiwi"];
// const newFruits = fruits.map((fruit, index, arr) => fruit.toUpperCase());
// console.log(newFruits)


// let girlNames = ["ayman", "kashaf", "aaira", "arisha", "minsa"];
// let newGirlName = girlNames.map((girlName, index, arr) => girlName.toUpperCase());
// console.log(newGirlName);

let weekdays = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
let newWeekdays = weekdays.map((weekdays, index, arr) => weekdays.toUpperCase());
console.log(newWeekdays);

let filteredWeekdays = weekdays
    .filter((weekday) => weekday.length > 8)
    .map((weekday) => weekday.toUpperCase())
console.log(filteredWeekdays);


let chocolates = ["dairymilk", "kitkat", "munch", "perk", "waffy"];

let filteredChocolates = chocolates
    .filter((chocolate) => chocolate.length > 4)
    .map((chocolate) => chocolate.toUpperCase())
console.log(filteredChocolates);