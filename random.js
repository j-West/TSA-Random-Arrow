var imgEl = document.querySelector("img")
var htmlEl = document.querySelector("html")

function addListener() {
  htmlEl.addEventListener("click", randomNum)
}

function randomNum() {
  var decision = Math.round(Math.random());
  var arrow = document.createElement("img")
  htmlEl.removeEventListener("click", randomNum)
}

addListener()
