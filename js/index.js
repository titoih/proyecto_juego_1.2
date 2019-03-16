window.onload = function() {
  var game = new Game("canvas");
    
  document.getElementById("startGame").addEventListener("click", function(){
    game.removeMenu();
    game.readyForPlay();
  });
};