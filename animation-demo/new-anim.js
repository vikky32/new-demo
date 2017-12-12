var block = document.querySelector(".block");
var button = document.querySelector("#newGame");
var startBlock = document.querySelector(".start-block");


button.addEventListener("click",function(){
    playGame();
});

function playGame() {
  block.style.display = "block";
}

function reset() {

}