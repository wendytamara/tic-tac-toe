window.onload = function() {
  var board = document.querySelector(".board-js");

board.addEventListener("click", onCellClick);
function onCellClick(event){
    var target = event.target;
  var dataset = target.dataset;
  /*console.log(dataset); */
 if (dataset && dataset.row) {
   console.log("pos", dataset.row, dataset.column);
 }
}




board.addEventListener("click", addX);
  };
var centinel = false;

function addX (event){
  if (centinel) {
  event.target.textContent ="X";
  centinel = false;
} else {
    event.target.textContent ="O";
    centinel = true;
}
}
