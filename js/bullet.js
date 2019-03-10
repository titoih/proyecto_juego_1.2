function Bullet(game, x, y, z, q) {
  this.game = game;

  this.x = x;
  this.y = y;
  this.z = z;
  this.q = q;
  this.r = 10;

  this.vx = (this.x - this.z)/100;
  this.vy = (this.y - this.q)/100;

  this.speedx = 10;
  this.speedy = 10;

  this.gravity = 0.2;
  this.gravitySpeed = 0;
}

Bullet.prototype.draw = function() {
  this.game.ctx.beginPath();
  this.game.ctx.fillStyle = "red";
  this.game.ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
  this.game.ctx.fill();
  this.game.ctx.closePath();
}

Bullet.prototype.move = function() {
  if (this.y > this.game.canvas.height || this.y < 0) {
    this.speedy *=-0.9;
    this.gravitySpeed *= -0.9;
    this.speedx *= 0.9; 
  }
  if (this.x > this.game.canvas.width || this.x < 0) {
    this.speedx*=-1;
  }

  this.gravitySpeed += this.gravity;
  this.x += this.vx * this.speedx;
  this.y += this.vy * this.speedy + this.gravitySpeed;

};