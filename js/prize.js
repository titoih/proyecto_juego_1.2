function Prize (game, x, y, width, height,color) {
  this.game = game;
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.color = color;
}

Prize.prototype.draw = function() {
  //cuadrado prize
  this.game.ctx.beginPath();
  this.game.ctx.fillStyle = this.color;
  this.game.ctx.fillRect(this.x, this.y, this.width, this.height);
  this.game.ctx.closePath();
}
