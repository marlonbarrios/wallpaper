const canvasSketch = require('canvas-sketch');
const p5 = require('p5');
new p5()



var tileCountX = 9;
var tileCountY = 9;
var tileWidth;
var tileHeight;

var colorStep = 6;

var endSize = 50;
var stepSize = 30;

var actRandomSeed = 3;

const settings = {

  pixelsPerInch: 300,
   // Tell canvas-sketch we're using p5.js
   p5: true,
   // Turn on a render loop (it's off by default in canvas-sketch)

   duration: 3,

    animate: true,
 
    // We can specify dimensions if we want a fixed size on the first render
    dimensions:[512, 512],
    // orientation: 'landscape',
    bleed: 1 / 8,
    // attributes: {
    // antialias: true
    // }
};



canvasSketch(() => {
  
  noStroke();
  tileWidth = width / tileCountX;
  tileHeight = height / tileCountY;

  return ({ playhead, width, height }) => {
  clear();
    
  

  randomSeed(actRandomSeed);


  endSize = frameCount/10;
  stepSize = frameCount/10;
  if(stepSize > 50) {
  frameCount = 500;
  }

 

  for (var gridY = 0; gridY <= tileCountY; gridY++) {
    for (var gridX = 0; gridX <= tileCountX; gridX++) {

      var posX = tileWidth * gridX;
      var posY = tileHeight * gridY;

      // modules
      var heading = int(random(4));
      for (var i = 0; i < stepSize; i++) {
        var diameter = map(i, 0, stepSize, tileWidth, endSize);
        fill(255 - i * colorStep);
        switch (heading) {
        case 0: ellipse(posX + i, posY, diameter, diameter); break;
        case 1: ellipse(posX, posY + i, diameter, diameter); break;
        case 2: ellipse(posX - i, posY, diameter, diameter); break;
        case 3: ellipse(posX, posY - i, diameter, diameter); break;
        }
      }
    }
  }
   
    
  }
},  settings);
