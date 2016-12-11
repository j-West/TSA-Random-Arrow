var imgEl = document.querySelector("img")
var htmlEl = document.querySelector("html")

function addListener() {
  htmlEl.addEventListener("click", randomNum)
}

function randomNum() {
  var decision = Math.round(Math.random());
  htmlEl.removeEventListener("click", randomNum)

  if (decision === 0) {
    imgEl.src = "images/rightArrow.png"
    imgEl.classList.toggle("hidden-class")
    console.log(decision);
      setTimeout(function(){
        imgEl.src = "#"
        imgEl.classList.toggle("hidden-class")
        addListener()
      }, 1000);
  } else {
      imgEl.src = "images/leftArrow.png"
      imgEl.classList.toggle("hidden-class")
      console.log(decision);
        setTimeout(function(){
          imgEl.src = "#"
          imgEl.classList.toggle("hidden-class")
          addListener()
        }, 1000);
    }

}

addListener()
