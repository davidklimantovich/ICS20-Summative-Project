var buttonsX = 165;
var asteroids = [];
var CharactersX = 80;
var currentScene;
var AsteroidsShip
var lasers = [];

function setup() {

  createCanvas(840, 560)

  backgroundImg = loadImage("(n) 5 blurred.png");

  backgroundImg1 = loadImage("Character Screen Blurred With Title.png");

  IntroductionTitle = loadImage("Introduction Title.png");

  SpaceInvaders = loadImage("ScreenshotStarfield.png");

  omega = loadImage("(Character Buttons) Omega.png");
  Raven = loadImage("(Character Buttons) Raven .png");
  Raptor = loadImage("(Character Buttons) Raptor.png");
  Ginger = loadImage("(Character Buttons) Ginger Gunne4r.png");
  SkullTrooper = loadImage("(Character Buttons) Skull Trooper.png");

  var button = createButton(" Hold and Move To Start!"); {
    button.mousePressed(resetSketch);
  }

  drawScene1();

  for (var i = 0; i < 45; i++) {
    asteroids.push(new Asteroid());

  }
  
  
  

  RavensAsteroidShip = new AsteroidsShip();

}

function resetSketch() {
  drawScene1();
}




// Scene 1 (introduction screen)

var drawScene1 = function() {
  currentScene = 1;

  image(backgroundImg, 10, 10, 860, 580);
  fill(148, 209, 26);

  image(IntroductionTitle, 40, 50, 750, 500);

}





//Scene 2 (Character Screen)

var drawScene2 = function() {
  currentScene = 2;

  image(backgroundImg1, 10, 10, 840, 560);

  image(Raven, CharactersX, 250, 175, 175);

  image(Ginger, CharactersX + 250, 250, 175, 175);

  image(Raptor, CharactersX + 500, 250, 175, 175)

  var Raptorbtn = new characterbutton({

    x: buttonsX + 505,
    y: 450,
    widht: 2,
    height: 30,
    label: "Press 3!",
    color: (230, 187, 252),

    onClick: function() {
      drawScene3();
    }


  })

  Raptorbtn.draw();

  var Ravenbtn = new characterbutton({

    x: buttonsX,
    y: 450,
    widht: 2,
    height: 30,
    label: "Press 1!",
    color: (230, 187, 252),

    onClick: function() {
      drawScene3();
    }


  })

  Ravenbtn.draw();

  var GingerBtn = new characterbutton({

    x: buttonsX + 250,
    y: 450,
    widht: 2,
    height: 30,
    label: "Press 2!",
    color: (230, 187, 252),

    onClick: function() {
      drawScene3();
    }

  })

  GingerBtn.draw();

}





// Scene 3 (second character screen)

var drawScene3 = function() {
  currentScene = 3;

  image(backgroundImg1, 10, 10, 840, 560);
  image(SkullTrooper, CharactersX, 225, 225, 225);
  image(omega, CharactersX + 460, 225, 225, 225);

  var Skullbtn = new characterbutton({

    x: buttonsX + 25,
    y: 500,
    widht: 2,
    height: 30,
    label: "Press 4!",
    color: (230, 187, 252),

    onClick: function() {
      drawScene3();
    }
  })

  Skullbtn.draw();


  var OmegaBtn = new characterbutton({

    x: buttonsX + 490,
    y: 500,
    widht: 2,
    height: 30,
    label: "Press 5!",
    color: (230, 187, 252),

    onClick: function() {
      drawScene3();
    }
  })

  OmegaBtn.draw();

}





// Scene 4 (Game Scene / space invaders)

var drawScene4 = function() {
  currentScene = 4;
  image(SpaceInvaders, 10, 10, 840, 560);
}





// Scene 5 (Game Scene/ space invaders)

var drawScene5 = function() {
  currentScene = 5;
  background(SpaceInvaders, 10, 10, 840, 560)
}

var drawScene6 = function() {
  currentScene = 6;
  background(SpaceInvaders, 10, 10, 840, 560)
}

var drawScene7 = function() {
  currentScene = 7;
  background(SpaceInvaders, 10, 10, 840, 560)
}

var drawScene8 = function() {
  currentScene = 8;
  background(SpaceInvaders, 10, 10, 840, 560)
}

var drawScene9 = function() {
  currentScene = 9;
  background(SpaceInvaders, 10, 10, 840, 560)

}






// Draw Functions

draw = function() {
  if (currentScene === 3) {
    drawScene3();

    //Spaceinvaders Game

    //Raven's (Space Invaders) Ship

  } else if (currentScene === 4) {
    drawScene4();

    //Ginger's (Space Invaders) Ship

  } else if (currentScene === 5) {
    drawScene5();

    //Raven's (Space Invaders) Ship

  } else if (currentScene === 6) {
    drawScene6();

    //Skull's (Space Invaders) Ship

  } else if (currentScene === 7) {
    drawScene7();

    //Omega's (Space Invaders) Ship

  } else if (currentScene === 8) {
    drawScene8();

    //Asteroids Game

    //Raven's (Asteroids) Ship
  } else if (currentScene === 9) {
    drawScene9();
    fill(255,0,0)
text ("Health:", 55,30)

   
    //Asteroid Animations
    for (var j = 0; j < asteroids.length; j++) {
      asteroids[j].render();
      asteroids[j].update();
      asteroids[j].edges();
   
    }
   
       
    

  

 
}
    //Laser Animations
    for (var i = lasers.length- 1; i>= 0 ; i--) {
      lasers[i].render();
      lasers[i].update();
   
    for (var j = asteroids.length- 1; j>=0; j--){
     if (lasers[i].hits(asteroids[j])){
   
     var newAsteroids = asteroids[j].breakup();
    console.log("hitAsteroid")
       
       
     asteroids.splice(j,1);
    lasers.splice(i,1);
    break;
     
     }
      
      
    }
      
  
    
    

 //Ship Animations
    RavensAsteroidShip.render();
    RavensAsteroidShip.turn();
    RavensAsteroidShip.update();
    RavensAsteroidShip.edges();
    RavensAsteroidShip.update();
    }
  
}


// Scene Switch

mouseClicked = function() {
  {
    if (currentScene === 1) {
      drawScene2();
    } else if (currentScene === 2) {
      drawScene3();
    } else if (currentScene === 3) {
      drawScene4();
    }
  }
};



//Game interavite part

mouseClicked = function() {

  if (currentScene === 1) {
    drawScene2();
  } else if (currentScene === 2) {
    drawScene3();
  }
};

function keyReleased() {
  
  RavensAsteroidShip.setRotation(0);
  RavensAsteroidShip.boosting(0);
  RavensAsteroidShip.rev
  
}

keyPressed = function() {

  if (currentScene === 2 && keyCode === 49) {
    drawScene4();
  } else if (currentScene === 2 && keyCode === 50) {
    drawScene5();
  } else if (currentScene === 2 && keyCode === 51) {
    drawScene6();
  } else if (currentScene === 3 && keyCode === 52) {
    drawScene7();
  } else if (currentScene === 3 && keyCode === 53) {
    drawScene8();
  } else if (currentScene === 3 && keyCode === 54) {
    drawScene9();
  }

  if (keyCode == 32) {
    lasers.push(new Laser(RavensAsteroidShip.pos,RavensAsteroidShip.heading));
  } 
  else if (keyCode == 65) {
    RavensAsteroidShip.setRotation(0.1);
  } 
  else if (keyCode == 68) {
    RavensAsteroidShip.setRotation(-0.1);
  } 
  else if (keyCode == 87) {
    RavensAsteroidShip.boosting(true);
  } 
  else if (keyCode == 83) {
    RavensAsteroidShip.reversing(true);
  }
}
