const superagent = require('superagent')

superagent
    .get("https://swapi.co/api/people/2/") // make request
    .then(res => {
        console.log(res.body) // json data is available from res.body
    })
    .catch(err => {
        console.log(err)
    });

    fetch("https://swapi.co/api/people/2/") // make the request
  .then(response => response.json()) // convert response to json
  .then(myJson => { // display data in the browser
    document.body.innerHTML =
      "<pre>" + JSON.stringify(myJson, null, " ") + "</pre>"
  })