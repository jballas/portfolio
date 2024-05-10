// Global variables
// Javascript object, my variables


var E ={
    A: 1,
    B: 5,
    C: 20,
    D: 80
    
}

// Variable for movement
var moveX = 40;
var moveY = 20;

// Variable for flower rotation
var flip;

// Variables for color
var red
var green
var blue
var opacity


// Setup fuction
function setup() {
    var cnv = createCanvas(windowWidth/3, 200 );
    //cnv.position(0,0);
    cnv.parent("canvas_art");
    background(255);

}

function stop(){
  noLoop();
}

// Draw function
function draw() {

    frameRate(2);
    setTimeout(stop, 60000);

    // Set values to color variables. Using the Absolute Value to keep them from being decimales.
    red = random( abs(20), abs(25) );
    green = 100;
    blue = random( abs(100), abs(150) );
    opacity = random ( abs(2), abs(150) );

    // Move the triangles around using translate and the randomwalker technique, restrict movement with modulo.
    translate( 100, 100);
    translate( moveX, moveY );

    moveX += random( -moveX, moveX + 1 );
    moveY += random( -moveX, moveX + 1 );

    moveX %= width;
    moveY %= height;

    // Map the green value to variable moveX. This way any of the triangles that appear to the left with have more green in them.
    green = map( moveX, 0, 255, 100, width );

    // Add pinwheel rotation value at 90 degrees
    flip = PI/5;

    // Animate the pinwheel rotation
    //flip -= random(360);


    //Flower source https://p5js.org/examples/hello-p5-simple-shapes.html
    fill( red, green, blue, opacity );
    noStroke();
    for (let i = 0; i < 10; i ++) {
      ellipse(E.A, E.B, E.C, E.D)
      rotate(flip);


    }
}