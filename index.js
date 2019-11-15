// index.js
// install first using: npm install superagent
const superagent = require('superagent')

superagent
    .get("https://swapi.co/api/people/2/")
    .then(res => {
       console.log(res.body.birth_year)
    })
    .catch(err => {
       console.log(err)
    });



