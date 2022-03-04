let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function () {
	//your code here
	let div = document.createElement("div");
	div.style.backgroundColor = "yellow";
	div.innerHTML = "Hello Wolrd";
	document.body.appendChild(div);
});