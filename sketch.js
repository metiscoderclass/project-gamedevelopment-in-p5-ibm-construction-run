//var breedte = 25;
//var color = 1;
//var hoogte = 500;
//var xBlok = 100;
//var yBlok = 100;
var speler;

function setup() {
  createCanvas(1525, 710);
  background(220);
  speler = new BouncingBall(10,10,2,0.10)
  this.img = loadImage("images/BuildBoyRunFrame1.png");
}

function draw () {
  background(220);
  speler.display()
  speler.update()
}

function BouncingBall (xx, yy, sy, a) {
  this.x = xx;
  this.y = yy;
  this.sy = sy;
  this.a = a;

  this.update = function () {
    this.sy += this.a;
    this.y += this.sy;

    /* botsing tegen de grond */
    if (this.y > 300) {
      // this.sy *= -1;
      this.y = 300;
      //this.x = random(0,200);
    }
  }

  this.goUp = function () {
    this.sy = -3;
  }


  this.display = function () {
    fill (255,255,0);
    rect(this.x, this.y, 100, 100);
  }

}

function keyPressed() {
  if(keyCode === 32)
    console.log("Jurjen.")
    speler.goUp()
  }

//function setup() {
//  createCanvas(1525, 710);
//  background(220);
//}
//
//function draw() {
//    noStroke();
//    fill(255, 0, 0);
//    rect(breedte, hoogte, yBlok, xBlok);

//};

//function keyPressed() {
//  if(key === '90')
//    fill(255, 255, 255);
//  }

//function keyPressed() {
//  if(key === '88')
//    random(0, 225);
//  }

//function keyPressed() {
//    if(keyCode === 32)
//      console.log("Jurjen.")
//      hoogte = hoogte - 10

  //}
