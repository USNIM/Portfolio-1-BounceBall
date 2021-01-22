// Player Functions

function newPlayer(initX, initY, initR, initColor, initSpeed, initlKey, initrKey) {
    return {
      x: initX,
      y: initY,
      r: initR,
      color: initColor,
      dx: initSpeed,
      dy: 0,
      a: 0.2,
      launchSpeed: -20,
      lKey: initlKey,
      rKey: initrKey,
    }
  }
  
  function drawPlayer(aPlayer) {
    fill(aPlayer.color);
    circle(aPlayer.x, aPlayer.y, aPlayer.r, "fill");
  }
  
  function movePlayer(aPlayer) {
    // Horizontal Movement
    if (keyIsDown[aPlayer.lKey]) {
      aPlayer.x += -aPlayer.dx;
    } else if (keyIsDown[aPlayer.rKey]) {
      aPlayer.x += aPlayer.dx;
    }
  
    // Vertical Movement
    aPlayer.y += aPlayer.dy; // Move Vertically
    aPlayer.dy += aPlayer.a; // Apply acceleration (gravity)
  }
  
  function checkPlatCollision(aPlayer, plats) {
    for (let i = 0; i < plats.length; i++) {
      if (aPlayer.dy >= 0 && Collide(aPlayer, plats[i])) {
        aPlayer.y = plats[i].y - aPlayer.r;
        aPlayer.dy = -11;
        token ++;
      }
    }
  }

  function collisionGround(aPlayer) {
    if (aPlayer.y + aPlayer.r > cnv.height) {
      aPlayer.y = cnv.height - aPlayer.r;
      aPlayer.dy = -11;
    }
  }

  function gameover(aPlayer) {
    if (aPlayer.y + aPlayer.r > cnv.height) {
      return true
    } 
  }