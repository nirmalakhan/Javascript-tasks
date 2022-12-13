
// imperative programming(how approach)

// const fruits = ["apple", "banana", "cherry", "kiwi"];
// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i].toUpperCase())
// }

// Declarative programming(what approach)
// "foreach"
// // const fruits = ["apple", "banana", "cherry", "kiwi"];
// fruits.forEach(function (fruit) {
//     console.log(fruit.toUpperCase())
// })

// const girlNames = ["AYMAN", "MINSA", "AAIRA", "SARAH", "KASHAF"];
// girlNames.forEach(function (girlName) {
//     console.log(girlName.toLowerCase())
// })

// const weekdays = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
// weekdays.forEach(function (weekday) {
//     console.log(weekday.toUpperCase())
// })


// Declarative with Arrow Function

// const fruits = ["apple", "banana", "cherry", "kiwi"];
// const forFruits = fruits.forEach((fruit) => fruit.toUpperCase());
// console.log(forFruits)


// MAP Method

// const fruits = ["apple", "banana", "cherry", "kiwi"];
// const newFruits = fruits.map((fruit, index, arr) => fruit.toUpperCase());
// console.log(newFruits)

// // Filter
// const filteredFruits = fruits
//     .filter((fruit) => fruit.length > 5)
//     .map((fruit) => fruit.toUpperCase())
// console.log(filteredFruits)

// Reduce

// let numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// numArr.reduce((prev, curr) => {
//     console.log(prev, curr);
//     return prev + curr;
// })

// let final = numArr.reduce((prev, curr) => {
//     console.log(prev, curr);
//     return prev + curr;
// }, 50);

// let finalResult = numArr.reduce((prev, curr) => {
//     console.log(prev, curr);
//     return prev - curr;
// }, 100)

// let finalMul = numArr.reduce((prev, curr) => {
//     console.log(prev, curr);
//     return prev * curr;
// }, 5)

// const fruits = ["apple", "banana", "cherry", "kiwi"];
// const reducedFruits = fruits.reduce((prev, curr) =>)

// call, apply,bind

// const hotelTuliObj = {
//     name: "Tuli International",
//     rooms: 200,
//     bookedRooms: 99,
// };

// const hotelCenterPoint = {
//     name: "Center Point",
//     rooms: 300,
//     bookedRooms: 199,
// };

// // function bookRoom() {
// //     this.bookedRooms++;
// // }

// // function availableRooms() {
// //     return this.rooms - this.bookedRooms;
// // }

// // bookRoom.call(hotelCenterPoint);
// // availableRooms.call(hotelTuliObj);
// // console.log(hotelCenterPoint);

// // console.log(hotelTuliObj.bookedRooms)
// // hotelTuliObj.bookRoom();

// function greetGuests(greet) {
//     console.log(`${greet}, Welcome to ${this.name}`)
// }
// greetGuests.call(hotelCenterPoint, "Hello")


// function greetGuests(greet, subgreet) {
//     console.log(`${greet}, Welcome to ${this.name}, ${subgreet}`)
// }
// greetGuests.call(hotelTuliObj, "Good Morning", "Bye Bye");

// greetGuests.apply(hotelCenterPoint, ["Good Morning", "Thank You"]);

// greetGuests.call(hotelTuliObj, "Good Evening", "Take Care");


// // Reduce

// let numArr = [5, 6, 8, 2, 9, 7, 3, 6, 4, 8, 2, 5, 9, 3];

// numArr.reduce((prev, curr) => {
//     console.log(prev, curr);
//     return prev + curr;
// }, 50);


// let numMul = [2, 5, 4, 8, 6, 3, 2, 4, 5];

// numMul.reduce((prev, curr) => {
//     console.log(prev, curr);
//     return prev * curr;
// }, 5);


// let fruits = ["apple", "banana", "pineapple", "strawberry", "kiwi",];
const fruits = ["apple", "banana", "cherry", "kiwi"];
// const newFruits = fruits.map((fruit, index, arr) => fruit.toUpperCase());
// console.log(newFruits)) {
//         prev.push(curr);
//     }
//     return prev;
// }, [])


// let animals = ["cow", "cat", "sheep", "goat", "cat", "cow", "goat", "sheep", "horse", "cat"];

// let animalsCount = animals.reduce(function (obj, animals) {
//     console.log(obj, animals);
//     if (!obj[animals]) {
//         obj[animals] = 1;
//     } else {
//         obj[animals]++;
//     }
//     return obj;
// }, {});


// const names = ["ayman", "kashaf", "arisha", "minsa", "manha", "aaira"];
// // names.forEach(function (name) {
// //     console.log(name.toUpperCase())
// // })

// let girlName = names.forEach((name) => console.log(name.toUpperCase())) ;


// let animals = ["cow", "cat", "hen", "fish"];
// animals.forEach(function (animal) {
//     console.log(animal.toUpperCase())
// })

// let forAnimals = animals.forEach((animal) => console.log(animal.toUpperCase()));





// let add = 0;
// let num = [2, 65, 85, 69];
// let numAdd = num.forEach(function (items) {
//     add += items;
// })
// console.log(add)


// let mul = 1;
// let numbers = [5, 8, 6, 3, 4, 8];
// let numbersMul = numbers.forEach(function (items) {
//     mul *= items;
// })
// console.log(mul)

// let sub = 100;
// let number = [5, 4, 8, 9, 3, 6, 5];
// let numberSub = number.forEach(function (items) {
//     sub -= items;
// })
// console.log(sub);



// const fruits = ["apple", "banana", "cherry", "kiwi"];
// const newFruits = fruits.map((fruit, index, arr) => fruit.toUpperCase());
// console.log(newFruits)


// let weekdays = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
// let newWeekdays = weekdays.map((weekdays, index, arr) => weekdays.toUpperCase());
// console.log(newWeekdays);

// const filteredWeekdays = weekdays
// // .filter((weekday) => weekday.length > 8)
// // .map((weekday) => weekday.toUpperCase())
// console.log(filteredWeekdays)


// let numbers = [7, 18, 21, 56, 48, 12, 4, 16, 17, 32, 59];
// let filteredNumbers = numbers.filter((number) => number > 15);
// console.log(filteredNumbers);

// let a = {
//     x: 1,
//     y: 2,
//     z: {
//         p: 2,
//         q: 5

//     }
// }
// // let b = a
// // b.x = 5;
// // b.y = 7;
// // console.log(a)
// // console.log(b)
// let b = Object.assign({}, a)

// b.x = 5;
// b.y = 7;
// b.z.p = 100;
// console.log(a)
// console.log(b)

// Destructuring

// let [a, b, , d] = [1, 2, 3, 4]
// console.log(a, b, d)

// let [a, b, c = 5] = [1, 2]
// console.log(a, b, c)


// let obj = {
//     name: "nil",
//     age: 30,
// }

// const { name: username, age: years } = obj;

// console.log(username)
// console.log(years)


// // static method
// class Car {
//     constructor(name) {
//         this.name = name;
//     }
//     static hello(x) {
//         return "Hello " + x.name;
//     }
// }

// let myCar = new Car("Ford");
// console.log(Car.hello(myCar))



// class Bike {
//     constructor(name, brand) {
//         this.name = name;
//         this.brand = brand;
//     }
//     static hello(x) {
//         return "Hello " + x.name + x.brand;
//     }
// }
// let myBike = new Bike("BMW", "Baby GS");
// console.log(Bike.hello(myBike))

// class Inheritance
// class Car {
//     constructor(brand) {
//         this.carname = brand;
//     }
//     present() {
//         return 'I have a ' + this.carname;
//     }
// }

// class Model extends Car {
//     constructor(brand, mod) {
//         super(brand);
//         this.model = mod;
//     }
//     show() {
//         return this.present() + ', it is a ' + this.model;
//     }
// }

// let myCar = new Model("Ford", "Mustang");
// console.log(myCar.show())

// class Bag {
//     constructor(brand) {
//         this.brand = brand;
//     }
//     present() {
//         return "I have a " + this.brand;
//     }
// }
// class Colour extends Bag {
//     constructor(brand, color) {
//         super(brand);
//         this.colour = color;
//     }


//     show() {
//         return this.present() + ', it is in ' + this.colour;
//     }
// }

// let myBag = new Colour("Barbie", "pink");
// console.log(myBag.show())

// class Mobile {
//     constructor(brand) {
//         this.brand = brand;
//     }

//     present() {
//         return "I have a " + this.brand + " mobile."
//     }
// }

// class Type extends Mobile {
//     constructor(brand, type) {
//         super(brand);
//         this.type = type;
//     }

//     show() {
//         return this.present() + "It is " + this.type;
//     }
// }

// let myMobile = new Type("Oppo", "Realme2")
// console.log(myMobile.show())



// class Animals {
//     constructor(domestic, wild) {
//         this.domestic = domestic;
//         this.wild = wild;
//     }

//     Type() {

//         return this.domestic + " is a domestic animal."
//     }

//     wilds() {
//         return this.wild + " is a wild animal."
//     }

// }


// let myAnimals = new Animals("Cow", "Tiger");
// let myAnimals1 = new Animals("Goat", "Elephant")
// console.log(myAnimals.wilds())
// console.log(myAnimals.Type())
// console.log(myAnimals1.wilds())
// console.log(myAnimals1.Type())


// class Mobile {
//     constructor(brand) {
//         this.brand = brand;
//     }

//     present() {
//         return "I have a " + this.brand + " mobile."
//     }
// }

// class Mobile {
//     constructor(brand) {
//         this.brand = brand;
//     }

//     present() {
//         return "I have a " + this.brand + " mobile."
//     }
// }

// class Type extends Mobile {
//     constructor(brand, type) {
//         super(brand);
//         this.type = type;
//     }

//     show() {
//         return this.present() + "It is " + this.type;
//     }
// }

// let myMobile = new Type("Oppo", "Realme2")
// console.log(myMobile.show())



//         this.type = type;
//     }

//     show() {
//         return this.present() + "It is " + this.type;
//     }
// }

// let myMobile = new Type("Oppo", "Realme2")
// console.log(myMobile.show())

//  name."
// //     }

//     Bname() {
//         return this.boy + " is a boy name."
//     }
// }

// let myNames1 = new Names("Aymam", "Ukasha");
// let myNames2 = new Names("Kashaf", "Saad");

// console.log(myNames1.Gname())
// console.log(myNames1.Bname())
// console.log(myNames2.Gname())
// console.log(myNames2.Bname())


// // STATIC METHOD

// class Pencils {
//     constructor(brand, colour) {
//         this.brand = brand;
//         this.colour = colour;

//     }

//     static hello(pen) {
//         return pen.brand + " pencil is in " + pen.colour + " colour."
//     }
// }
// let myPencils = new Pencils("Natraj", "Red");
// let myPencils1 = new Pencils("Apsara", "Grey");
// console.log(Pencils.hello(myPencils1))
// console.log(Pencils.hello(myPencils))


// GETTER SETTER

// class Cloths {
//     constructor(brand, size) {
//         this.brandname = brand;
//         this.sizeC = size;
//     }

//     set sizeC(x) {
//         this._sizeC = x;
//     }
//     get sizeC() {
//         return this._sizeC;
//     }
// }

// let myCloths = new Cloths("Max", 26);
// myCloths.brandname = "Pantaloon";
// myCloths.sizeC = 30
// // console.log(myCloths.sizeC)
// // console.log(myCloths.brandname)
// console.log(myCloths.brandname)
// console.log(myCloths.sizeC)

// class Fruits {
//     constructor(sweet, sour) {
//         this.sweetfruit = sweet;
//         this.sourfruit = sour;
//     }

//     sweetFruits() {
//         return this.sweetfruit + " is sweet."
//     }

//     sourFruits() {
//         return this.sourfruit + " is sour."
//     }
// }

// let myFruits = new Fruits("Apple", "Orange");
// console.log(myFruits.sourFruits())



class Toys {
    constructor(big, small) {
        this.bigtoy = big;
        this.smalltoy = small;
    }
    start() {
        return this.bigtoy + " is for " + this.smalltoy + ".";
    }
}

class GirlBoyToy extends Toys {
    constructor(big, small, colour) {
        super(big, small);
        this.color = colour;
    }
    show() {
        return this.start() + "It is " + this.color + " in colour."
    }
}

let myToys = new GirlBoyToy("Truck", "load", "brown");
console.log(myToys.show())


