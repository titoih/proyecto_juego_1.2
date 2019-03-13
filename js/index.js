window.onload = function() {
  var game = new Game("canvas");
  function delet() {
    document.getElementById("startGame").remove();
  }
  
  document.getElementById("startGame").addEventListener("click", function(){
    delet();
    game.start();
    
  });
  

  
};