// function getNumber() {
//     let num1 = Number(document.querySelector("#num1").value)
//     let num2 = Number(document.querySelector("#num2").value)
//     return [num1, num2]
//     // console.log(getNumber())

// }
// // let num1 = 10;
// // let num2 = 5;

// function add() {
//     // var result = num1 + num2
//     // return result
//     // alert(result)
//     // var num1 = parseFloat(document.querySelector("#num1").value)
//     // var num2 = parseFloat(document.querySelector("#num2").value)
//     let numbers = getNumber()
//     // console.dir(num1.value, num2.value)
//     alert(numbers[0] + numbers[1])
//     console.log(getNumber())
// }
// function sub() {
//     let numbers = getNumber()
//     // var num1 = parseFloat(document.querySelector("#num1").value)
//     // var num2 = parseFloat(document.querySelector("#num2").value)
//     // let result = num1 - num2
//     // return result
//     alert(numbers[0] - numbers[1])
//     console.log(getNumber())
// }
// function div() {
//     let numbers = getNumber()
//     // var num1 = parseFloat(document.querySelector("#num1").value)
//     // var num2 = parseFloat(document.querySelector("#num2").value)

//     alert(numbers[0] / numbers[1])
// }
// function mul() {
//     let numbers = getNumber()
//     // var num1 = parseFloat(document.querySelector("#num1").value)
//     // var num2 = parseFloat(document.querySelector("#num2").value)
//     // let result = num1 * num2
//     alert(numbers[0] * numbers[1])

// }
// Recursion


// function pow() {
//     let numbers = getNumber()
//     let result = 1
//     for (let i = 0; i < numbers[1]; i++) {
//         result *= numbers[0];


//     }
//     alert(result)
// }


// function factorial(num) {
//     // debugger;
//     // console.log("Current Num:", num);
//     if (num <= 1) return 1;
//     // console.log(`Recursion operation:${num}*factorial(${num - 1})`);
//     return num * factorial(num - 1)
// }
// console.log(factorial(5));


// function factorial(num) {
//     if (num <= 1) return 1;
//     return num * factorial(num - 1)
// }
// console.log(factorial(6))


// function pow(base, exp) {
//     if (exp <= 1)
//         return base;
//     return base * pow(base, exp - 1)
// }
// console.log(pow(5, 5))



// function pow(base, exp) {
//     if (exp <= 1)
//         return base;

//     return base * pow(base, exp - 1)
// }
// console.log(pow(6, 6))



function pow(base, exp) {
    if (exp <= 1)
        return base;
    return base * pow(base, exp - 1)
}
console.log(pow(5, 3))

// function pow(base, exp) {
//     if (exp <= 1)
//         return base;

//     return base * pow(base, exp - 1)
// }
// console.log(pow(9, 3))


// function sumSeries(base, exp) {
//     if (base <= 1) {
//         return 1
//     }

//     return base ** exp + sumSeries(base - 1, exp);
// }
// console.log(sumSeries(10, 2))


// function pow(base, exp) {
//     if (exp <= 1) {
//         return base
//     }

//     return base * pow(base, exp - 1);
// }


// function sumSeries(base, exp) {
//     if (base <= 1) {
//         return 1
//     }

//     return base ** exp + sumSeries(base - 1, exp)
// }
// console.log(sumSeries(8, 2))


// function square(num) {
//     let result = num * num;
//     return result
// }
// console.log(square(5))


// const parentEl = document.querySelector("#otpFieldArea");
// const field1 = document.querySelector("#num1");
// field1.focus();
// parentEl.addEventListener("keyup", function (e) {
//     console.log(e);
//     if (e.target.tagName === "INPUT") {

//         if (e.key === "Backspace") {
//             e.target?.previousElementSibling?.focus();
//         } else {
//             e.target?.nextElementSibling?.focus();

//         }
//     }
//     field1[1].focus();
// })

// let parentBox = document.querySelector("#boxArea");
// let childBox = document.querySelector("#num1");
// childBox.focus();
// parentBox.addEventListener("keyup", function (e) {
//     console.log(e);
//     if (e.target.tagName === "INPUT") {
//         if (e.key === "Backspace") {
//             e.target?.previousElementSibling?.focus();
//         } else {
//             e.target?.nextElementSibling?.focus();
//         }
//     }

// })


//   OTP GENERATION

// let parentBox = document.querySelector("#boxArea");
// let childBox = document.querySelector("#num1");
// childBox.focus();

// parentBox.addEventListener("keyup", function (e) {
//     console.log(e);
//     if (e.target.tagName === "INPUT") {
//         if (e.key === "Backspace") {
//             e.target?.previousElementSibling?.focus();
//         } else {
//             e.target?.nextElementSibling?.focus();
//         }
//     }
// })