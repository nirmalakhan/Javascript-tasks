

function fullData() {

    async function getInfo() {
        let data = await fetch('https://jsonplaceholder.typicode.com/users');
        let result = await data.json();
        console.log(result);
        return result;
    }
    getInfo()

    let tableEl = document.querySelector("#table");

    async function tableData() {
        let apiData = await getInfo()
        dataHead()

        apiData.map((data) => {

            let rowEl = document.createElement('tr');


            let iD = document.createElement('td');
            iD.textContent = data.id;
            rowEl.appendChild(iD);



            let perName = document.createElement('td');
            perName.textContent = data.name;
            rowEl.appendChild(perName);



            let perEmail = document.createElement('td');
            perEmail.textContent = data.email;
            rowEl.appendChild(perEmail);



            let perUserName = document.createElement('td');
            perUserName.textContent = data.username;
            rowEl.appendChild(perUserName);



            let perPhone = document.createElement('td');
            perPhone.textContent = data.phone;
            rowEl.appendChild(perPhone);



            let websiteD = document.createElement('td');
            websiteD.textContent = data.website;
            rowEl.appendChild(websiteD);

            tableEl.appendChild(rowEl)

        })

    }
    tableData()

    function dataHead() {
        let idHead = document.createElement('th');
        idHead.textContent = "Id";
        tableEl.appendChild(idHead)

        let nameHead = document.createElement('th');
        nameHead.textContent = "Name";
        tableEl.appendChild(nameHead)

        let emailHead = document.createElement('th');
        emailHead.textContent = "Email Id";
        tableEl.appendChild(emailHead)

        let userNameHead = document.createElement('th');
        userNameHead.textContent = "Username";
        tableEl.appendChild(userNameHead)

        let phoneHead = document.createElement('th');
        phoneHead.textContent = "Phone";
        tableEl.appendChild(phoneHead)

        let websiteHead = document.createElement('th');
        websiteHead.textContent = "Website";
        tableEl.appendChild(websiteHead)

    }

}





























































// async function showData() {

//     let apiData = await getInfo()
//     console.log(apiData);
//     let rootEl = document.querySelector("#root");
//     apiData.map((data) => {
//         let childDiv = document.createElement('div');
//         let h3El = document.createElement('h3');
//         h3El.textContent = data.category;
//         childDiv.appendChild(h3El);
//         // rootEl.appendChild(childDiv);

//         let h2El = document.createElement('h2');
//         h2El.textContent = data.description;
//         childDiv.appendChild(h2El);
//         // rootEl.appendChild(childDiv);

//         let imageEl = document.createElement('img');
//         imageEl.setAttribute("src", data.image);
//         childDiv.appendChild(imageEl);
//         // rootEl.appendChild(childDiv);

//         let priceEl = document.createElement('p');
//         priceEl.textContent = data.price;
//         childDiv.appendChild(priceEl);

//         let titleEl = document.createElement('p');
//         titleEl.textContent = data.title;
//         childDiv.appendChild(titleEl);
//         rootEl.appendChild(childDiv);

//     })
// }
// showData()


