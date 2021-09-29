const inputText=document.querySelector("#input-text");
const btn=document.querySelector("#btn-translate");
const result=document.querySelector("#result");

var URL="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
var URL2="https://api.funtranslations.com/translate/minion.json"

//function to create the URL with text
function CreateURL(text){
  var textURL=`${URL2}?text=${text}`;
  return textURL;
}
function errorHandler(error){
  alert("There is something wrong with the server.Please try again later");
}

//function to call the API
function display(){
  fetch(CreateURL(inputText.value))
  .then(response=>response.json())
  .then(json=>{result.innerText=json.contents.translated})
  .catch(errorHandler);

}



btn.addEventListener("click",display);











//resources
// fetch('http://example.com/movies.json')
//   .then(response => response.json())
//   .then(data => console.log(data));

  // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
  // https://neog.camp/guide/lesson-four#assignment


