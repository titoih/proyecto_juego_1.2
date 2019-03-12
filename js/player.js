function Player(game,x,y,width,height,color,xGun,yGun,length,angle,colorGun) {
  this.game = game;
  this.x = x;
  this.y = y ;
  this.width = width;
  this.height = height;
  this.color = color;
  this.xGun = xGun;
  this.yGun = yGun;
  this.length = length;
  this.angle = angle;
  this.rotate = 0;
  this.xGun2 = this.xGun + this.length * Math.cos(this.angle);
  this.yGun2 = this.yGun + this.length * Math.sin(this.angle);
  this.colorGun = colorGun;

  this.bullets = [];

  this.setListeners();
}

Player.prototype.draw = function() {
  //cuadrado
  this.game.ctx.beginPath();
  this.game.ctx.fillStyle = this.color;
  this.game.ctx.fillRect(this.x, this.y, this.width, this.height);
  this.game.ctx.closePath();
  //cañon = gun
  this.game.ctx.beginPath();
  this.game.ctx.lineWidth = 14;
  this.game.ctx.strokeStyle = this.colorGun;
  this.game.ctx.moveTo(this.xGun, this.yGun);
  this.game.ctx.lineTo(this.xGun2, this.yGun2);
  this.game.ctx.stroke();

  this.bullets = this.bullets.filter(function(bullet) {
    return bullet.x ;
  }.bind(this));

  //no entiendo como coge bullet.x sin llamar this.game

  this.bullets.forEach(function(bullet) {
    bullet.draw();
    bullet.move();
  });
};

Player.prototype.setListeners = function() {

  var TOP_KEY = 65;
  var DOWN_KEY = 68;
  var SHOOT = 83;

  document.onkeydown = function(event) {
    if (event.keyCode === TOP_KEY) {
      this.rotate = -0.03;
    }
    else if (event.keyCode == DOWN_KEY) {
      this.rotate = 0.03;
    }
    else if (event.keyCode == SHOOT) {
      this.shoot();
    }
  }.bind(this);
  document.onkeyup = function(event) {
    if (event.keyCode === TOP_KEY) {
      this.rotate = false;
    }
    else if (event.keyCode === DOWN_KEY) {
      this.rotate = false;
    }
    else if (event.keyCode == SHOOT) {
      return false;
    }

  }.bind(this);
};

Player.prototype.shoot = function() {
  var bullet = new Bullet(this.game, this.xGun2, this.yGun2, this.x, this.y,this.length,this.angle); //*//

  this.bullets.push(bullet);
};

Player.prototype.move = function() {
  this.angle += this.rotate;
  this.xGun2 = this.xGun + this.length * Math.cos(this.angle);
  this.yGun2 = this.yGun + this.length * Math.sin(this.angle);
};

Player.prototype.checkCollision = function(){
  this.bullets.forEach(function(bullet){
    bullet.collision()
  })
}

// cómo puedo llamar a this.x this.y de player sin meter en el new ()¿?