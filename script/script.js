$(document).ready(function(){

  $(".show_btn").click(function(){
    $(".show_btn").hide();
    $('.section').slideToggle();
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
