window.onload = function() {
  var game = new Game("canvas");
  
  document.getElementById("startGame").addEventListener("click", function(){
    removeHome();
    readyForPlay();
    
    
  });

  function readyForPlay() {
    var cuentaAtras = 3;
    var ready = document.getElementById('counting');

    var count = setInterval(function(){
      if (cuentaAtras == 0) {
        cuentaAtras = 'GO';
        clearInterval(count);
        callStart();
        var stopCount = setInterval(function() {
          document.getElementById('counting').remove();
          clearInterval(stopCount);
        },1000);
      }
      ready.innerHTML = cuentaAtras;
      if (cuentaAtras != 'GO'){
        cuentaAtras--;
      }
    }, 1000); 
  }

  function removeHome() {
    document.getElementById('startGame').remove();
    document.getElementById('gameTitle').remove();
    //document.getElementById('counting').remove();
    //callStart();
  }
  
  function callStart() {
    game.start();
  }

};
//var para = document.createElement("p");
//var node = document.createTextNode("This is new.");
//para.appendChild(node);
//
//var element = document.getElementById("div1");
//element.appendChild(para);

/*
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
*/