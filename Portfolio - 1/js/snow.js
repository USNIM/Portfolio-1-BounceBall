// Make it Snow

function makeitSnow() {
    for (let n = 1; n <= 100; n++) {
        snows.push(newRandomSnow());
    }
    snowing = true;
}

function newRandomSnow() {
    return {
        x: randomInt(0, cnv.width),
        y: randomInt(0,cnv.height),
        r: randomInt(2, 5),
    }
}

function drawSnow(aSnow) {
    // draw snows at random area
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(aSnow.x, aSnow.y, aSnow.r, 0, 2 * Math.PI);
    ctx.fill();
}

function moveSnow(aSnow) {
    // goes to bottom
    aSnow.y += randomInt(0, 1);

    // teleport to top
    for (let i = 0; i < snows.length; i++) {
        if (snows[i].y >= 900) {
          snows[i].y = 0;
          snows[i].x = randomInt(0, cnv.width);
        }
      }
}
