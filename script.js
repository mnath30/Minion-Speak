const inputText=document.querySelector("#input-text");
const btn=document.querySelector("#btn-translate");
const result=document.querySelector("#result");

btn.addEventListener("click",display);

function display(){ console.log(inputText.value);
    result.innerText=inputText.value;
}


