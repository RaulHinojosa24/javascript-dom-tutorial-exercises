let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];
// your code here

for (let i = 0; i < countries.length; i++) {
    let option = document.createElement("option");
    option.innerHTML = countries[i];
    document.querySelector("#mySelect").appendChild(option);
}

document.querySelector("#mySelect").addEventListener("change", function () {
    alert(document.querySelector('option:checked').innerHTML);
})