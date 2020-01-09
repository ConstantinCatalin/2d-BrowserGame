//2D game - Constantin Catalin 10.10.2019

var context, controller, player, loop;
var distance = 0;

context = document.querySelector("canvas").getContext("2d");

context.canvas.height = 360;
context.canvas.width = 640;

player = {
  height:32,
  jumping:true,
  width:32,
  x:320, // center
  x_velocity:0,
  y:280,
  y_velocity:0
};

obj = {
  height:32,
  width:32,
  x:640, // spawn x coord
  x_velocity:0,
  y:312,//spawn y coord
  y_velocity:0,
  collision: false
};

controller = {
  left:false,
  right:false,
  up:false,
  keyListener:function(event) {

    var key_state = (event.type == "keydown")?true:false;

    switch(event.keyCode) {
      case 32:// space key
          controller.up = key_state;
      break;
    }
  }
};

function myFunction() {
     if (player.jumping == false) {
    player.y_velocity -= 18;
    player.jumping = true;
  }
}

var speed = 0.9;
var friction = 0.9;
var gravity = 1.5;

loop = function() {

  if (controller.up && player.jumping == false) {
    player.y_velocity -= 18;
    player.jumping = true;
  }
  if (player.jumping == true && obj.collision) {
    //reset
    console.log("reset!!!!");
    player.x=320;
    player.y=280;
    distance=0;
    obj.collision=false;
    obj.x=640;
    speed=0.6;
    friction=0.9;
    document.getElementById("game_over").innerHTML = "Use Space button to jump.";
  }

  obj.x_velocity -= speed;
  obj.x += obj.x_velocity;
  obj.x_velocity *= friction;

  //if object is off the left side of the screen
  if(obj.x < -32){
    //respawn object
    obj.x =640;
    speed = Math.floor(Math.random() * 10)/10 + 1;
    console.log(speed);
  }
  //if obj colide with the player
  if(obj.x < player.x + 32 && obj.x > player.x - 32 && player.y >= obj.y-32){
    //console.log("colision detected!");
    obj.collision = true;
    document.getElementById("game_over").innerHTML = "GAME OVER!";
  }
  if(!obj.collision){
    distance=distance + 0.05;
    document.getElementById("distance").innerHTML = parseInt(distance);
    document.getElementById("score").value = distance;
  }else{
      speed = 0;
      friction=0.5;
      player.x = obj.x-32;
  }

  player.y_velocity += gravity;
  player.y += player.y_velocity;

  // if player is falling below floor line
  if (player.y > 360 - 16 - 32) {
    player.jumping = false;
    player.y = 360 - 16 - 32;
    player.y_velocity = 0;
  }

  //background
  context.fillStyle = "#eee3cb";
  context.fillRect(0, 0, 640, 360);
  // player body
  context.fillStyle = "#1e75c5";// blue color
  context.beginPath();
  context.rect(player.x, player.y, player.width, player.height);
  context.fill();
  //player eye
  context.fillStyle = "#ffffff";
  context.beginPath();
  context.rect(player.x+11.5, player.y+4, 10, 10);
  context.fill();
  //player eye
  context.fillStyle = "#0a3259";
  context.beginPath();
  context.rect(player.x+14, player.y+6.5, 5, 5);
  context.fill();
  // player bottom part
  context.fillStyle = "#5b99d3";
  context.beginPath();
  context.rect(player.x, player.y+22, player.width, 10);
  context.fill();
  //player tooth
  context.fillStyle = "#ffffff";
  context.beginPath();
  context.rect(player.x+4, player.y+17, 5, 5);
  context.fill();
  //player tooth
  context.fillStyle = "#ffffff";
  context.beginPath();
  context.rect(player.x+23, player.y+17, 5, 5);
  context.fill();
  //------------------------------------------------------
  // obj objtacle
  context.fillStyle = "#ff0000"; // red hex color
  context.beginPath();
  context.rect(obj.x, obj.y, obj.width, obj.height);
  context.fill();
  //------------------------------------------------------
  context.strokeStyle = "#61913b";
  context.lineWidth = 18;
  context.beginPath();
  context.moveTo(0, 353);
  context.lineTo(640, 353);
  context.stroke();

  window.requestAnimationFrame(loop);
};


window.addEventListener("keydown", controller.keyListener)
window.addEventListener("keyup", controller.keyListener);
window.requestAnimationFrame(loop);
