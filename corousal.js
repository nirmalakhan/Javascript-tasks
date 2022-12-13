let imagesArr = ['./images/field.jpeg', './images/lake.jpg', './images/marrygoround.jpeg']

let rootElm = document.querySelector("#root")

let image = document.createElement("img")
image.style.height = "300px"

let currentIndex = 0;
image.src = imagesArr[currentIndex]

let prevImage = document.createElement("button")
let nextImage = document.createElement("button")

prevImage.innerHTML = "Prev"

nextImage.innerHTML = "Next"

// let prevImage = document.querySelector("#prevImage").value
// let nextImage = document.querySelector("#nextImage").value


rootElm.appendChild(image)

rootElm.appendChild(prevImage)

rootElm.appendChild(nextImage)

nextImage.addEventListener("click", function (e) {

    currentIndex += 1;
    image.src = imagesArr[currentIndex]
    if (currentIndex == 2) {
        currentIndex = 0
    }

})
prevImage.addEventListener("click", function (e) {
    currentIndex -= 1;
    image.src = imagesArr[currentIndex]
    if (currentIndex == 0) {
        currentIndex = 2
    }
})