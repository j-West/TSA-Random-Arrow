var imgEl = document.querySelector("img")
var htmlEl = document.querySelector("html")

function addListener() {
  htmlEl.addEventListener("click", randomNum)
}

function randomNum() {
  var decision = Math.round(Math.random());

  htmlEl.removeEventListener("click", randomNum)
}

addListener()
