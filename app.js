

var incButton = document.querySelector("#check-inc-button");

var decButton = document.querySelector("#check-dec-button");

// var submitButton = document.querySelector("#inputToOutput");

var showOutput = document.querySelector("#output")

// function clickHandler(){
//     showOutput.innerText = inputFontSize.innerText;
// }


function fontSizeIncreaseHandler(){
   var inputElement = document.getElementById('input');

   var currentFontSize = inputElement.style.fontSize;
   currentFontSize = currentFontSize.slice(0,-2);
   currentFontSize = parseInt(currentFontSize);
   var newFontSize = currentFontSize + 2;
   newFontSize = newFontSize.toString() + 'px';

   inputElement.style.fontSize = newFontSize;

   var newText = inputElement.style.fontSize

   showOutput.innerText = newText;
}

function fontSizeDecreaseHandler(){
    var inputElement = document.getElementById('input');
    var currentFontSize = inputElement.style.fontSize;
    currentFontSize = currentFontSize.slice(0,-2);
    currentFontSize = parseInt(currentFontSize);
    var newFontSize = currentFontSize - 2;
    newFontSize = newFontSize.toString() + 'px';
    inputElement.style.fontSize = newFontSize;

    var newText = inputElement.style.fontSize

   showOutput.innerText = newText;

    

}

incButton.addEventListener("click", fontSizeIncreaseHandler);
decButton.addEventListener("click", fontSizeDecreaseHandler);
// submitButton.addEventListener("clicked", clickHandler);