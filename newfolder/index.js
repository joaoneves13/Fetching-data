

function getPerson() {
// fetch example - works in the browser but not in node
// (fetch is not a part of node.js by default)
fetch("https://swapi.co/api/people/2/") // make the request
  .then(response => response.json()) // convert response to json
  .then(myJson => { // display data in the browser
    document.body.innerHTML =
      "<pre>" + JSON.stringify(myJson, null, " ") + "</pre>"
  })
}


//getPerson();