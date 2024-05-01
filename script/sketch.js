// Global variables
// Javascript object, my triangle variables
var tri = {
    topX: 50,
    topY: 50,
    rightX: 60,
    rightY: 70,
    leftX: 40,
    leftY: 70
}

var E ={
    A: 1,
    B: 5,
    C: 50,
    D: 150
    
}

// Variable for movement
var moveX = 4;
var moveY = 2;

// Variable for pinwheel rotation
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

    frameRate(24);
    setTimeout(stop, 60000);

    // Set values to color variables. Using the Absolute Value to keep them from being decimales.
    red = random( abs(20), abs(25) );
    green = 100;
    blue = random( abs(100), abs(150) );
    opacity = random ( abs(2), abs(50) );

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
    flip = 45;

    // Animate the pinwheel rotation
    flip -= random(360);


    //Square
       fill( red, green, blue, opacity );
       stroke(E.A, E.B, E.C, E.D);
       rect(E.A, E.B, E.C, E.D)
       rotate( radians ( flip ) );
/*
    // Circle
    fill( red, green, blue, opacity );
    stroke(E.A, E.B, E.C, E.D);
    ellipse(E.A, E.B, E.C, E.D)
    rotate( radians ( flip ) );

    // Triangle
    fill( red, green, blue, opacity );
    rotate( radians ( flip ) );
    triangle( tri.topX, tri.topX, tri.rightX, tri.rightY, tri.leftX, tri.leftY);

    // Changed placement of triangle parameters, and limited them using various math operations
    tri.topX += random();
    tri.topY += random();

    tri.topX %= 100;

    // Since I'm dividing the left position of my triangle, I wanted to make sure it didn't get too small. So I used the floor() function.
    tri.leftX /= random( floor(5) );
    tri.leftY /= random( floor(5) );

    tri.rightX *= 3;
    tri.rightY *= 3;

    tri.rightX %= 100;
    tri.rightY %= 50;
*/

    }
