
console.log("List items");

let listItems = [
    { id: 1, task: "Morning walk", isDone: true, },
    { id: 2, task: "Eat breakfast", isDone: true, },
    { id: 3, task: "Read a book", isDone: false, },
    { id: 4, task: "Watching Movie", isDone: false }
]


function createList() {
    let ulEle = document.querySelector("#listArea");
    let spanEle = document.querySelector("#message").innerHTML = "";
    console.log(ulEle);
    ulEle.innerHTML = "";

    for (let i = 0; i < listItems.length; i++) {
        let liEle = document.createElement("li");
        let spanEle = document.createElement("span");
        let buttEle = document.createElement("button");

        buttEle.textContent = "x";
        spanEle.textContent = listItems[i].task;
        if (listItems[i].isDone) {
            spanEle.style.textDecoration = "line-through";
        }
        spanEle.addEventListener("click", function (e) {
            console.log(e.target);
            listItems[i].isDone = !listItems[i].isDone;
            e.target.style.textDecoration = listItems[i].isDone
                ? "line-through"
                : "";
        });

        btnEl.addEventListener("click", function (e) {
            console.log(listItems[i]);
            listItems.splice(i, 1);
            generateList();
        });
        liEle.appendChild(spanEl);
        `   liEl.appendChild(btnEl);

    console.log(liEl);

    ulEl.appendChild(liEl);
  }

  if (!listItems.length) {
    document.querySelector("#msg").innerHTML = "No list found!";
  }
}

generateList();

function addItem() {
  let inputVal = document.querySelector("#task").value;
  // alert(inputVal);
  let taskObj = {
    task: inputVal,
    isDone: false,
  };
  listItems.push(taskObj);
  generateList();
  document.querySelector("#task").value = "";
}

{
  /* <li>
<span>Read a book</span>
<button>x</button>
</li>document.querySelector("#task").value = "";
}

{
  /* <li>
<span>Read a book</span>
<button>x</button>
</li>
<li>
<span>Eat breakfast with Mick</span>
<button>x</button>
</li>
<li>
<span><strike>Go to gym</strike></span>
<button>x</button>
<li>
<span>Eat breakfast with Mick</span>
<button>x</button>
</li>
<li>
<span><strike>Go to gym</strike></span>
<button>x</button>
</li> */
    }