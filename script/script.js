$(document).ready(function(){

/* Old event, when I used the buttons to show/hide the details. Too much interaction required.
  $(".show_btn").click(function(){
    $(".show_btn").hide();
    $('.section').slideToggle();
  });
*/

/*New Event I'm thinking about adding to show a caption/explanation of design when you hover over an image.
$(".summer").hover(fuction(){
// $(".caption").show();
});
*/


// Case Study section, where each step is hidden until the button is clicked.
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
