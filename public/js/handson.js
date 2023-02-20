
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}
let mynum = getRandomInt(0,1600)
console.log(mynum)

  const api_url ="https://type.fit/api/quotes";



function myQuote(mytext){
// let myQuote = getapi();
// console.log(myQuote)

    const quoteEl = document.querySelector('#inspo');
    quoteEl.textContent = mytext
}
function getapi(url) {
  // event.preventDefault();
  

  var requestUrl = "https://type.fit/api/quotes";
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data[mynum].text)
      var text = data[mynum].text
      var author = data[mynum].author
      let mytext = `${text} -- by ${author}`
      console.log(mytext)
      myQuote(mytext);
      });

  }
getapi(api_url)
// let myQuote = getapi(api_url);
// console.log(myQuote)