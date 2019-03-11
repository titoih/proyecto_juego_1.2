function Bullet(game, x, y, z, q) {
  this.game = game;

  this.x = x;
  this.y = y;
  this.z = z;
  this.q = q;
  this.r = 10;

  this.vx = (this.x - this.z)/100;
  this.vy = (this.y - this.q)/100;

  this.speedx = 15;
  this.speedy = 20;

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
  //get prize
  
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


  //var distX = (this.x - this.game.player.x +this.game.player.width/2);
  //
  //var distY = (this.y - this.game.player.y + this.game.player.height/2);
 //
  //if (distX > (this.game.player.width/2 + this.r)) { return false; }
  //if (distY > (this.game.player.height/2 + this.r)) { return false; }
//
  //if (distX <= (this.game.player.width/2)) { return true; } 
  //if (distY <= (this.game.player.height/2)) { return true; }


};

Bullet.prototype.collision = function(){
  if(
    this.game.prize.x + this.game.prize.width >= this.x && 
    this.x + this.r >= this.game.prize.x && 
    this.game.prize.y + this.game.prize.height >= this.y && 
    this.y + this.r >= this.game.prize.y
    ) {
      console.log('hola')
  }
}