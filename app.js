var btn = document.querySelector(".translater-btn");
var userInput = document.querySelector("#txt");

function clickHandler() {
    console.log('clicked');
    console.log(userInput.value);
}
btn.addEventListener("click", clickHandler);
