/*
Use fetch to load a greeting from the API and display it 
in the HTML element with the id "greeting-text".

API: https://codeyourfuture.herokuapp.com/api/greetings
Response: A greeting in a random language

To learn more about fetch, refer to the doc:
https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch


================
Expected result
================

Open index.html in your browser. Every time you refresh the page,
a different greeting should be displayed in the box.
*/

fetch(" https://codeyourfuture.herokuapp.com/api/greetings")
  .then(function (response) {
    return response.text();
  })
  .then(function (greeting) {
    console.log(greeting)
    let randomGreet = greeting;
    displayGreeting(randomGreet);
    // Write the code to display the greeting text here
  }) .catch((error) => console.log(error));


  function displayGreeting(greet){
    const p = document.getElementById("greeting-text");
    p.innerHTML = greet;

  }


  fetch("https://restcountries.eu/rest/v2/all")
    .then( (response)=> {
    return response.json();
  })
  .then(function (greet) {
    // console.log(greet)
    let x = greet;
    displayG(x);
    // console.log(random[230].name)
  }).catch((error) => console.log(error));

  function displayG(greet){
    const p = document.getElementById("greeting");
    let random =Math.random()*250;
    p.innerText = greet[Math.round(random)].name;

  }