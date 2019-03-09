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
  this.setListeners();
}

var TOP_KEY = 38;

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
};


Player.prototype.setListeners = function() {
  document.onkeydown = function(event) {
    if (event.keyCode === TOP_KEY) {
      this.rotate += 0.2;
    }
  }.bind(this);
};


Player.prototype.move = function() {
  this.angle += this.rotate;
  this.xGun2 = this.xGun + this.length * Math.cos(this.angle);
  this.yGun2 = this.yGun + this.length * Math.sin(this.angle);
  
};

/*
function gun(x, y, len, angle) {
  this.tablero = tablero;
  this.rotate = 0;
  this.x = x;
  this.y = y;
  this.len = len;
  this.angle = angle;
  this.update = function() {
      this.x2 = this.x + this.len * Math.cos(this.angle);
      this.y2 = this.y + this.len * Math.sin(this.angle);
      ctx = tablero.context;
      ctx.beginPath();
      ctx.lineWidth = 14;
      ctx.strokeStyle = 'green';
      ctx.moveTo(this.x, this.y);
      ctx.lineTo(this.x2, this.y2);
      ctx.stroke();
  }
  this.newPos = function() {
      this.angle += this.rotate;
  }
}
*/
/*

function BasePlayer (width,height,color,x,y) {
  this.tableroJuego = tablero;
  this.width = width;
  this.height = height;
  this.x = x;
  this.y = y;
  this.update = function(){
    ctx = tablero.context;
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
*/