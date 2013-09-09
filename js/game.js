(function() {
  var c = document.getElementById('brickBreak'),
      ctx = c.getContext('2d');


  c.width = 500;
  c.height = 300;

  function Ball(x, y) {
    this.x = x;
    this.y = y;
    this.width = 10;
    this.height = 10;
    this.speedY = 3;
    this.speedX = 3;
  }

  Ball.prototype.draw = function() {
    ctx.fillStyle = '#f06d06';
    ctx.fillRect(this.x, this.y, this.width, this.height);
  };

  Ball.prototype.move = function () {
    if (this.x <= 0) {
      this.speedX *= -1;
    }
    if (this.x >= c.width - this.width) {
      this.speedX *= -1;
    }
    if (this.y <= 0) {
      this.speedY *= -1;
    }
    if (this.y >= c.height - this.height) {
      this.speedY *= -1;
    }
    if (this.y >= p.y && (this.x >= p.x && this.x <= p.x + p.width)){
      this.speedY *= -1;
    }

    this.x += this.speedX;
    this.y += this.speedY;
  };

  function Paddle() {
    this.x = c.width / 2;
    this.y = c.height - 40;
    this.width = c.width / 8;
    this.height = 15;
    this.speed = 5;
    this.direction = {};
  }

  Paddle.prototype.draw = function() {
    ctx.fillStyle = '#123456';
    ctx.fillRect(this.x, this.y, this.width, this.height);
  };

  Paddle.prototype.move = function() {
    if (this.direction['left']) {
      this.x -= this.speed;
    }

    if (this.direction['right']) {
      this.x += this.speed;
    }

    if (this.x <= 0) {
      this.x = 0;
    }

    if (this.x >= c.width - this.width) {
      this.x = c.width - this.width;
    }
  };

  function clearScreen() {
    ctx.clearRect(0, 0, c.width, c.height);
  }

  function init() {
    document.body.addEventListener('keydown', function(e) {
      if (e.which === 37) {
        p.direction['left'] = true;
      }
      if (e.which === 39) {
        p.direction['right'] = true;
      }
    });

    document.body.addEventListener('keyup', function(e) {
      if (e.which === 37) {
        p.direction['left'] = false;
      }
      if (e.which === 39) {
        p.direction['right'] = false;
      }
    });

    main();
  }

  function main() {
    clearScreen();
    b.move();
    p.move();
    b.draw();
    p.draw();

    mozRequestAnimationFrame(main);
  }

  var b = new Ball(10, 10),
      p = new Paddle();

  init();
})();