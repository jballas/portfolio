$(document).ready(function(){

// CANVAS and WIND DATA
var wind_field = new Array();
var canvas = document.getElementById("mainCanvas");
canvas.setAttribute("width", window.innerWidth * .5);
canvas.setAttribute("height" , window.innerHeight * .75);
var ctx = canvas.getContext("2d");
var box_width = 50;
var box_height = 50;
var wind_angle;
var colors;


//Normally, when maki ng a wind field you collect wind speed from an API
// I decided to just find some wind data as a json file.
// Inspired by this tutorial: https://codepen.io/Mamboleoo/pen/xxGEVXM

function wind(){
  $.getJSON("./data/wind-speed-lolo.json", function(data){

          for(let i = 0; i < data.speed.length; i ++){
                let j = data.speed[i];
                wind_field.push(j);

              }

              for (let i = 0; i < wind_field.length; i ++){
                draw_wind(wind_field[Math.floor(Math.random()*wind_field.length)]["Wind Speed (m/s)"]);
              //draw_wind(wind_field[i]["Wind Speed (m/s)"]);
              }

})
/*
        .done(function() { // Testing for errors during process.
           console.log( "second success" );
         })
         .fail(function() {
           console.log( "error" );
         })
         .always(function() {
           console.log( "complete" );
         });*/
}
wind();


function draw_wind(turn){
  let r = 155;
  let g = 219;
  let b = 228;
  let alpha= 0.2;
 colors = "rgba("+r+","+g+","+b+","+alpha+")";
           // Creates box grid
           for (i = 0; i< canvas.width; i += box_width){
             for (j = 0; j < canvas.height; j += box_height){

  /*             ctx.fillStyle = "rgba(0,0,0,"+alpha+")";
               ctx.fillRect(i,j,box_width,box_height);
               ctx.strokeStyle = ("rgb(60, 103, 96)");
               ctx.lineWidth = 2;
               ctx.strokeRect(i,j,box_width,box_height);
*/
           // Create a line in each of the grid boxes
               ctx.beginPath();
               ctx.moveTo(i,j);
               ctx.lineTo(i+box_width,j+box_height)
               ctx.strokeStyle = colors;
               //ctx.strokeStyle = ("rgba(155,219,228,0.2)");
               ctx.stroke();

               // rotate lines per wind data
               ctx.rotate(turn);
              // rotates the lines in a pattern
              //ctx.rotate((Math.PI / 180) * 25);

             }
           }
         }

         // BUTTONS

           $(".show_btn").click(function(){
             $(".show_btn").hide();
             $('.section').slideToggle();
             $(ctx).css
           });

           $("#step1").click(function(){
               $("#box1").slideToggle("slow", function(){
                 $("#step1").hide();
               });
            });

            $("#step2").click(function(){
                $("#box2").slideToggle("slow", function(){
                  $("#step2").hide();
                });
            });

             $("#step3").click(function(){
                 $("#box3").slideToggle("slow", function(){
                   $("#step3").hide();
                 });
            });

              $("#step4").click(function(){
                  $("#box4").slideToggle("slow", function(){
                    $("#step4").hide();
                  });
               });



});
