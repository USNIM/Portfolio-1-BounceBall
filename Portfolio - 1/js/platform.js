// Platform Functions
function newPlat(initX, initY, initW, initH) {
    return {
      x: initX,
      y: initY,
      w: initW,
      h: initH
    }
  }
  
  function initPlats(plats) {
    plats.push(newPlat(150, 125, 150, 12));
    plats.push(newPlat(300, 350, 150, 12));
    plats.push(newPlat(400, 575, 150, 12));
    plats.push(newPlat(150, 800, 150, 12));
  }
  
  function drawPlat(aPlat) {
    fill("grey");
    rect(aPlat.x, aPlat.y, aPlat.w, aPlat.h, "fill");
    if (aPlat.y >= cnv.height) {
      aPlat.y = 0;
      aPlat.x = Math.random() * (cnv.width - aPlat.w);
      if (aPlat.w > 15) {
        aPlat.w -= 2.5;
      } else if (snow == false) {
        makeitSnow();
        snow = true;
      }
    }
    if (aPlat.w == 125) {
      backColor = "dodgerblue";
    } else if (aPlat.w == 100) {
      backColor = "navy";
    } else if (aPlat.w == 75) {
      backColor = "midnightblue";
    } else if (aPlat.w == 50) {
      backColor = "black";
    }
  }
  
  function drawPlats(plats) {
    for (let i = 0; i < plats.length; i++) {
      drawPlat(plats[i]);
    }
  }

  function downPlatform() {
    if (player.y <= 170 && count < 30) {
      player.dy = 0;
      token = 0;
      fall = true;
      for (let i = 0; i < plats.length; i++) {
        plats[i].y += 7.5;
      }
      count ++;
    }
    if (count >= 30 && token > 0) {
      count = 0;
    }
  }