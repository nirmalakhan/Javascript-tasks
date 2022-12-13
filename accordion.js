
// function sec1() {
//     let section = document.querySelector("#accordion1");
//     if (section.style.display === "block") {
//         section.style.display = "none"
//     } else {
//         section.style.display = "block"
//     }
// }

// function sec2() {
//     let section = document.querySelector("#accordion2");

//     if (section.style.display === "block") {
//         section.style.display = "none"
//     } else {
//         section.style.display = "block"
//     }
// }

// function sec3() {
//     let section = document.querySelector("#accordion3");

//     if (section.style.display === "block") {
//         section.style.display = "none"
//     } else {
//         section.style.display = "block"
//     }
// }

function accSec(accId) {
    let section = document.querySelector(`${accId}`);

    if (section.style.display === "block") {
        section.style.display = "none"
    } else {
        section.style.display = "block"
    }
}
