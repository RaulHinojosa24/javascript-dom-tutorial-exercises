let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function () {
	//your code here
	let li = document.createElement("li");
	document.querySelector("#myList").appendChild(li);
});
