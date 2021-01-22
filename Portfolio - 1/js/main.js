//

// Global Variables
let player = newPlayer(30, 500, 30, "red", 6, 37, 39);
let plats = [];
initPlats(plats);
let count = 0;
let token = 0;
let fall = false;
let snow = false;
let snows = [];
let snowing = false;
let backColor = "skyblue";

// Set Canvas Size
canvasSize(600, 900);

// Main Draw Loop
requestAnimationFrame(draw);

function draw() {
  // Logic
  movePlayer(player);
  checkPlatCollision(player, plats);
  downPlatform();

  // Drawing
  background(backColor);
  drawPlayer(player);
  drawPlats(plats);

  // Snow
  if (snowing) {
    for (let i = 0; i < snows.length; i++) {
      drawSnow(snows[i]);
      moveSnow(snows[i]);
    }
  }

  // Falling
  if (fall && gameover(player)) {
    background("white");
  } else {
    collisionGround(player);
    requestAnimationFrame(draw);
  }
}
