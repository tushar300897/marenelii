// /**
//  * @file
//  * Top region js
//  * bartext and bartext2 come from theme settings through template.php.
//  */

jQuery(document).ready(function ($) {



  $("#topBarLink").click(function(){
    $("#topBarContainer").slideToggle("slow");
  });
  
  
   $("#topBarLink").click(function(){
                $(this).text($(this).text() == '↓ Slide Down' ? '↑ Slide Up' : '↓ Slide Down');

  });



    $("#topBarLink").mouseover(function(){

    if ($("#topBarLink").text() =='↓ Slide Down' )
    {
      $("#topBar").css("padding-top", "10px");
    }
    // else ($("#topBarLink").text() =='↑ Slide Up')
    // {
    //   $("#topBarLink").css("padding-top", "0px");
    // }

  });

     $("#topBarLink").mouseout(function(){

    if ($("#topBarLink").text() =='↓ Slide Down' ){
      $("#topBar").css("padding-top", "0px");
    }
    


  });
  

});






(function($) {
  Drupal.behaviors.myBehavior = {
    attach: function(context, settings) {

    // $("#topBarLink").click(function(){
    //   $("#topBarContainer").slideToggle();
    // });
  
    // $("#topBarLink").click(function(){
    //   $("#topBarContainer").slideToggle();
    //   // $(this).text($(this).text() == '↓ Slide Down' ? '↑ Slide Up' : '↓ Slide Down');
    // });

    // $("#topBarLink").mouseover(function(){
    //   if ($("#topBarLink").text() =='↓ Slide Down' ){
    //     $("#topBarLink").css("padding-top", "10px");
    //   }
    //   else{
    //     $("#topBarLink").css("padding-top", "0px");
    //   }
    // });

    // $("#topBarLink").mouseout(function(){
    //   if ($("#topBarLink").text() =='↓ Slide Down' ){
    //     $("#topBarLink").css("padding-top", "0px");
    //   }
    // });
  
    }
  };
})(jQuery);

    // jQuery("#topBarLink").click(function(){
    //   jQuery("#topBarContainer").slideToggle();
    //   // $(this).text($(this).text() == '↓ Slide Down' ? '↑ Slide Up' : '↓ Slide Down');
    // });