$(document).ready(function(){
  $("form#form-delani").submit(function(event){
    event.preventDefault();
    var name = $("input#numro").val();
    var email = $("input#numro1").val();
    var message = $("textarea#message").val();
    if ($("input#numro1").val() && $("input#numro1").val()){
      alert (name + ", we have received your message. we appreciate you for reaching out to us.");
    }
    else {
      alert("Please enter your name and email!");
    }

  });

});
//
// $("#work4").mouseover(function (){
//   $("$naseeb").show();
// }).mouseout
$(document).ready(function(){
  $("#work4").mouseenter(function(){
    $("#work4").fadeout()
    $("#naz1").fadein();
  }).mouseleave(function(){
    $("#naz1").fadeout();
    $("#work4").fadein ();
  });
});

$(document).ready(function(){
  $("#work3").mouseenter(function(){
    $("#work3").fadeout()
    $("#naz2").fadein();
  }).mouseleave(function(){
    $("#naz2").fadeout();
    $("#work3").fadein ();
  });
});

$(document).ready(function(){
  $("#work2").mouseenter(function(){
    $("#work2").fadeout()
    $("#naz3").fadein();
  }).mouseleave(function(){
    $("#naz3").fadeout();
    $("#work2").fadein ();
  });
});

$(document).ready(function(){
  $("#work1").mouseenter(function(){
    $("#work1").fadeout()
    $("#naz4").fadein();
  }).mouseleave(function(){
    $("#naz4").fadeout();
    $("#work1").fadein ();
  });
});
