// Your code here

let items = document.querySelectorAll(".fa.fa-trash");

function removeItem(item) {
    document.querySelector("#container ul").removeChild(item.parentElement);
}

for (let i = 0; i < items.length; i++) {
    items[i].parentElement.addEventListener("click", function () { removeItem(this) });
}

document.querySelector("#addToDo").addEventListener("keyup", function (event) {
    let target = event.target;
    if (event.keyCode === 13) {
        if (target.value.trim() != "") {
            let li = document.createElement("li");
            let span = document.createElement("span");
            let i = document.createElement("i");
            i.classList.add("fa", "fa-trash");
            span.appendChild(i);
            li.appendChild(span);
            li.innerHTML += " " + target.value;

            document.querySelector("#container ul").appendChild(li);

            document.querySelector("ul li:last-child span").addEventListener("click", function () { removeItem(this) });;
        }
        target.value = "";
    }
});