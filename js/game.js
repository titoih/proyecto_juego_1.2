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

Game.prototype.reset = function() {
  this.player = new Player(this,50,200,100,100,'red',100,245,90,0,'green');
  this.prize = new Prize (this,this.canvas.width/2, this.canvas.height - Math.floor((Math.random()*450) + 1),50,50,'yellow');
};

Game.prototype.clear = function() {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
}; 

Game.prototype.draw = function() {
  this.player.draw();
  this.prize.draw();
};

Game.prototype.moveAll = function() {
  this.player.move();
  this.player.checkCollision()
};

