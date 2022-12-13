async function getData() {

    let data = await fetch('https://jsonplaceholder.typicode.com/photos');
    let result = await data.json();
    console.log(result);
    return result;

}
getData()


async function infoData() {
    let info = await fetch('https://jsonplaceholder.typicode.com/posts');
    let result = await info.json();
    console.log(result);
}
infoData()


async function readData() {
    let write = await fetch('https://jsonplaceholder.typicode.com/comments');
    let result = await write.json();
    console.log(result);
}
readData()




// fetch('https://via.placeholder.com/150/e743b')
//     .then((response) => response.json())
//     .then(data => console.log(data))


// fetch('https://jsonplaceholder.typicode.com/todos')
//     .then(response => response.json())
//     .then(json => console.log(json))


