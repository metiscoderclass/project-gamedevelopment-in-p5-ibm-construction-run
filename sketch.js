var Player = 25;
var color = 1;




function setup() {
  //Canvas van 200 px bij 200 px
  createCanvas(1525, 710);
  //Één cijfer geeft grijswaarden
  background(220);
}

function draw() {
    //Geen randen om de auto
    noStroke();
    //Kies de opvulkleur (rgb)
    fill(255);
    //Parameters: x, y, breedte, hoogte
    rect(Player, 500, 100, 100);

};

function keyPressed() {
  if(key === 'Z')
    fill(255, 255, 255);
  }

function keyPressed() {
  if(key === 'X')
    fill(255, 225, 225);
  }

function keyPressed() {
    if(keyCode === 32)
      console.log("Jurjen.")
      color = 2;
  }

if (color == 2) {
  fill(255);
  //Parameters: x, y, breedte, hoogte
  rect(Player, 500, 100, 100);

}
