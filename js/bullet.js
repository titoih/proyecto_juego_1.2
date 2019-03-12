function Bullet(game, x, y, z, q) {
  this.game = game;
  //coordenadas xGun2, yGun2 -inicio del cañon-
  this.x = x;
  this.y = y;
  //coordenadas cañon xGun,yGun = z,q  -inicio del cañon- para calcular vx,vy
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

Bullet.prototype.collision = function(){
  if(
    this.game.prize.x + this.game.prize.width >= this.x && 
    this.x + this.r >= this.game.prize.x && 
    this.game.prize.y + this.game.prize.height >= this.y && 
    this.y + this.r >= this.game.prize.y
    ) {
      this.game.prize = new Prize (this.game,this.game.canvas.width/2, this.game.canvas.height - Math.floor((Math.random()*450) + 1),35,35,'yellow');
  }
}