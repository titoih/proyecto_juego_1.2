function Game(canvasId) {
  this.canvas = document.getElementById(canvasId);
  this.ctx = this.canvas.getContext("2d");

  this.reset();
  
}

Game.prototype.start = function() {
  this.interval = setInterval (function() {
    this.clear();
    this.moveAll();
    this.draw();
  }.bind(this), 50);
};

Game.prototype.removeMenu = function() {
  document.getElementById('startGame').remove();
  document.getElementById('gameTitle').remove();
  document.getElementById('instr').remove();
  document.getElementById('divTip').remove();
  document.getElementById('divMusic').remove();
  
}

Game.prototype.startTimer = function() {
  this.duration = 30  ,
  this.display = document.querySelector('#time');
  this.timer = this.duration, this.minutes, this.seconds;
  console.log(this.minutes)
    this.set = setInterval(function () {
        this.minutes = parseInt(this.timer / 60, 10)
        this.seconds = parseInt(this.timer % 60, 10);

        this.minutes = this.minutes < 10 ? "0" + this.minutes : this.minutes;
        this.seconds = this.seconds < 10 ? "0" + this.seconds : this.seconds;

        this.display.textContent = this.minutes + ":" + this.seconds;

        if (--this.timer < 0) {
          clearInterval(this.set)
          this.winner();
          this.readyForPlay();
        }
        
    }.bind(this), 1000);
};

Game.prototype.readyForPlay = function() {
  this.cuentaAtras = 3;
    this.ready = document.getElementById('counting');

    this.count = setInterval(function(){
      this.ready.innerHTML = this.cuentaAtras;
      if (this.cuentaAtras == 0) {
        this.cuentaAtras = 'GO!';
        this.ready.innerHTML = this.cuentaAtras;
        clearInterval(this.count);
        this.start();
        this.startTimer(this.fiveMinutes, this.display);
        this.stopCount = setInterval(function() {
          document.getElementById('counting').remove();
          clearInterval(this.stopCount);
        }.bind(this),1000);
      }
      
      if (this.cuentaAtras != 'GO'){
        this.cuentaAtras--;
      }
    }.bind(this), 700); 
};

Game.prototype.stop = function() {
  clearInterval(this.interval);
};

Game.prototype.winner = function() {
  this.stop();
  
  if(confirm('Game Over! Your Score is ' + ' ' + this.score)) {
    this.reset();
    this.start();
    location.reload();
  }
};

Game.prototype.reset = function() {
  //this.background = new Background(this);
  this.player = new Player(this,50,200,100,100,'red',100,245,90,0,'green'); 
  this.prize = new Prize (this,this.canvas.width/2, this.canvas.height - Math.floor((Math.random()*450) + 1),25,25,'yellow');
  this.score = 0;
};

Game.prototype.clear = function() {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
}; 

Game.prototype.draw = function() {
  //this.background.draw();
  this.player.draw();
  this.prize.draw();
  this.drawScore(); 
};

Game.prototype.moveAll = function() {
  //this.background.move();
  this.player.move();
  this.player.checkCollision()
};

Game.prototype.drawScore = function() {
  this.ctx.font = "50px sans-serif";
  this.ctx.fillStyle = "white";
  this.ctx.fillText(Math.floor(this.score), 50, 50);
}


//por qué se llama al prize/player entero desde game? cómo funciona esto?

