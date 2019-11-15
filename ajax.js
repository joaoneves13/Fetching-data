const request = new XMLHttpRequest()
request.addEventListener("load", function() {
  document.body.innerHTML =
    "<pre>" +
    JSON.stringify(JSON.parse(this.responseText), null, " ") +
    "</pre>"
})
request.open("GET", "https://swapi.co/api/people/1/")
request.send()