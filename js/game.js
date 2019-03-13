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
    //player win
    if (this.score >= 10) {
      this.winner();
    }
  }.bind(this), 50);
};

Game.prototype.stop = function() {
  clearInterval(this.interval);
};

Game.prototype.winner = function() {
  this.stop();
  
  if(confirm("Player One Win! Try Again")) {
    this.reset();
    this.start();
  }
};

Game.prototype.reset = function() {
  this.background = new Background(this);
  this.player = new Player(this,50,200,100,100,'red',100,245,90,0,'green');
  this.playerTwo = new Player(this,this.canvas.width - this.player.x - this.player.width,
    this.player.y,this.player.width,this.player.height,
    'blue',100,245,90,0,'pink');
  this.prize = new Prize (this,this.canvas.width/2, this.canvas.height - Math.floor((Math.random()*450) + 1),25,25,'yellow');
  this.score = 0;
};

Game.prototype.clear = function() {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
}; 

Game.prototype.draw = function() {
  this.background.draw();
  this.player.draw();
  this.playerTwo.draw();
  this.prize.draw();
  this.drawScore(); 
};

Game.prototype.moveAll = function() {
  this.background.move();
  this.player.move();
  this.playerTwo.move();
  this.player.checkCollision();
  this.playerTwo.checkCollision();
};

Game.prototype.drawScore = function() {
  this.ctx.font = "50px sans-serif";
  this.ctx.fillStyle = "white";
  this.ctx.fillText(Math.floor(this.score), 50, 50);
}

//por qué se llama al prize/player entero desde game? cómo funciona esto?