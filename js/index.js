window.onload = function() {
  var game = new Game("canvas");
    
  document.getElementById("startGame").addEventListener("click", function(){
    game.removeMenu();
    game.readyForPlay();
  });

 /* function readyForPlay() {
    var cuentaAtras = 3;
    var ready = document.getElementById('counting');

    var count = setInterval(function(){
      if (cuentaAtras == 0) {
        console.log('yeah')
        cuentaAtras = 'GO!';
        clearInterval(count);
        callStart();
        var fiveMinutes = 10  ,
        display = document.querySelector('#time');
        startTimer(fiveMinutes, display);
        var stopCount = setInterval(function() {
          document.getElementById('counting').remove();
          clearInterval(stopCount);
        },1000);
      }
      ready.innerHTML = cuentaAtras;
      if (cuentaAtras != 'GO'){
        cuentaAtras--;
      }
    }, 700); 
  }*/

  /*function callStart() {
    game.start();
    
  }


  /*function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    var set = setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
          clearInterval(set)
          game.winner();
          readyForPlay();
        }
        
    }, 1000);
}*/
};