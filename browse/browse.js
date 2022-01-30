var x = document.getElementById("films");
var y = document.getElementById("series");
function myFilms() {
      if (x.style.display == "none") {
        x.style.display = "block";
        y.style.display = "none";
      }
    } 

function mySeries() {
    if (y.style.display == "none") {
      y.style.display = "block";
      x.style.display = "none";
    }
  } 