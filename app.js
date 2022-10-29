var btntranslate = document.querySelector("#btn-translate");
var txtinput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");


function clickEventHandler() {
    outputDiv.innerText = " nionmi " + txtinput.value;
};

btntranslate.addEventListener("click", clickEventHandler)