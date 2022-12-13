// let users = []
// function showUsers() {
//     let user = {
//         name: document.querySelector("#name").value,
//         email: document.querySelector("#email").value,
//         mobile: document.querySelector("#mobile").value,
//         isVerified: document.querySelector("#isVerified").value

//     }
//     users.push(user)
//     console.log(users)


//     function addData() {
//         root.innerHTML = `<tr>

//         <th>Name</th>
//         <th>Mobile</th>
//         <th>Email</th>
//         <th>Is Verified</th>
//         <th>Action</th>


//     </tr>`;

//         for (let i = 0; i < users.length; i++) {
//             createRow(users[i]);
//         }
//     }



//     function createRow(data) {
//         let name = document.createElement("td");
//         let email = document.createElement("td");
//         let mobile = document.createElement("td");
//         let isVerified = document.createElement("td");
//         let updt = document.createElement("td")
//         let del = document.createElement("td")

//         name.textContent = data.name;
//         mobile.textContent = data.mobile;
//         email.textContent = data.email;
//         gender.textContent = data.isVerified;

//         row1.appendChild(name);
//         row1.appendChild(mobile);
//         row1.appendChild(email);
//         row1.appendChild(isVerified);
//         root.appendChild(row1);


//     }
//     addData()
// }



// let customerData = [];
// function showData() {
//     let customer = {
//         name: document.querySelector("#name").value,
//         age: document.querySelector("#age").value,
//         place: document.querySelector("#place").value,
//         mobile: document.querySelector("#mobile").value,
//         grade: document.querySelector("#grade").value,
//         action: document.querySelector("#action").value
//     }
//     customerData.push(customer)
//     console.log(customerData)

//     function addInfo() {
//         root.innerHTML = `<tr>
//         <th>Name</th> 
//         <th>Age</th>
//         <th>Place</th>
//         <th>Mobile</th>
//         <th>Grade</th>
//         <th>Action</th>   
//         </tr>`;

//         for (let i = 0; i < customerData.length; i++) {
//             createRow(customerData[i]);
//         }
//     }
//     function createRow(data) {

//         let row1 = document.createElement("tr");
//         let name = document.createElement("td");
//         let age = document.createElement("td");
//         let place = document.createElement("td");
//         let mobile = document.createElement("td");
//         let grade = document.createElement("td");
//         let action = document.createElement("td")
//         // let updt = document.createElement("td")
//         // let del = document.createElement("td")

//         name.textContent = data.name;
//         age.textContent = data.age;
//         place.textContent = data.place;
//         mobile.textContent = data.mobile;
//         grade.textContent = data.grade;
//         action.textContent = data.action;

//         row1.appendChild(name);
//         row1.appendChild(age);
//         row1.appendChild(place);
//         row1.appendChild(mobile);
//         row1.appendChild(grade);
//         row1.appendChild(action);
//         root.appendChild(row1);
//     }
//     addInfo()
// }

// let userData = [{ userId: "nil", password: "12345" },
// { userId: "ayman", password: "67895" },
// { userId: "ajaj", password: "98765" }]



// function login() {
//     let username = document.querySelector("#userId").value;
//     let password = document.querySelector("#password").value;

//     for (let i = 0; i < userData.length; i++) {

//         if (userData[i].userId === username && userData[i].password === password) {
//             return alert("login successful");




//         }
//     }
//     return alert("login failed");
// }




// let users = [{ userId: "ajju", password: "12345" },
// { userId: "ukasha", password: "987654" },
// { userId: "tooba", password: "654321" }]

// function login() {
//     let username = document.querySelector("#userId").value;
//     let password = document.querySelector("#password").value;
// 

// if (comOpt[2]rname && users[i].password === password) {
//             return alert("login successful");

//         }
//     }
//     return alert("login failed");

// }


// let customer = [{ userId: "ayman", password: "12345" },
// { userId: "ukasha", password: "6789" },
// { useId: "ajaj", password: "98765" },
// { userId: "nil", password: "54321" }]

// function login() {
//     let username = document.querySelector("#userId").value;
//     let password = document.querySelector("#password").value;

//     for (let i = 0; i < customer.length; i++) {
//         if (customer[i].userId === username && customer[i].password === password) {
//             return alert("login successful")
//         }
//     }
//     return alert("login failed")
// }


// let ranNum = Math.floor(Math.random() * 8);
// let steps = 1


// function checkNum() {
//     let number = document.querySelector("#Number").value;

//     if (ranNum < number) {
//         steps++
//         console.log("Number is greater")

//     } else if (ranNum > number) {
//         steps++
//         console.log("Number is smaller")

//     } else {
//         console.log("Number Matched")
//         console.log(steps)
//     }

// }

// function add(a, b, callback) {
//     setTimeout(() => {
//         console.log("Addition:", a + b);
//         callback(a + b);
//     }, 6000);
// }

// function sub(a, b, callback) {
//     setTimeout(() => {
//         console.log("Substraction:", a - b);
//         callback(a - b);

//     }, 4000);
// }

// function mul(a, b, callback) {
//     setTimeout(() => {
//         console.log("Multiplication:", a * b);
//         callback(a * b);

//     }, 1000);
// }

// function div(a, b, callback) {
//     setTimeout(() => {
//         console.log("Division:", a / b);
//         callback(a / b);

//     }, 5000);
// }


// add(3, 5, function (resultAdd) {
//     sub(resultAdd, 2, function (resultSub) {
//         mul(resultSub, 5, function (resultMul) {
//             div(resultMul, 2, function (resultDiv) {
//                 add(resultDiv, 17, (data) => console.log("Final result:", data));
//             })
//         })
//     })

// })


// function add(a, b, callback) {
//     setTimeout(() => {
//         console.log("Addition:", a + b);
//         callback(a + b);
//     }, 5000);
// }


// function sub(a, b, callback) {
//     setTimeout(() => {
//         console.log("Substraction:", a - b);
//         callback(a - b);
//     }, 4000);
// }


// function mul(a, b, callback) {
//     setTimeout(() => {
//         console.log("Multiplication:", a * b);
//         callback(a * b);
//     }, 6000);
// }

// function div(a, b, callback) {
//     setTimeout(() => {
//         console.log("Division:", a / b);
//         callback(a / b);
//     }, 3000);
// }


// add(3, 7, function (resultAdd) {
//     sub(resultAdd, 2, function (resultSub) {
//         mul(resultSub, 5, function (resultMul) {
//             div(resultMul, 5, function (resultDiv) {
//                 add(resultDiv, 4, (data) => console.log("Final result:", data))
//             })
//         })
//     })
// })



let comOpt = ["Rock", "Paper", "Scissor"];
let option = Math.floor(Math.random() * comOpt.length);

// let rock = document.querySelector("#Rock").value;
// let paper = document.querySelector("#paper").value;
// let scissor = document.querySelector("#Scissor").value;

function checkOption() {
    let rock = document.querySelector("#Rock").value;
    let paper = document.querySelector("#Paper").value;
    let scissor = document.querySelector("#Scissor").value;

    if (comOpt[0] == rock) {
        console.log("Tie")

    } else if (comOpt[0] == paper) {
        console.log("Paper Win")
    } else {
        console.log("Rock win")
    }
}

function checkPaper() {

    if (comOpt[1] == rock) {
        console.log("Paper Win")

    } else if (comOpt[1] == paper) {
        console.log("Tie")
    } else {
        console.log("Scissor win")
    }
}

function checkScissor() {

    if (comOpt[2] == rock) {
        console.log("Rock win")

    } else if (comOpt[2] == paper) {
        console.log("Scissor Win")
    } else {
        console.log("Tie")
    }
}