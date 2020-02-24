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
    $("#work4").show();
  }).mouseleave(function(){
    $("#naz1").hide ();
  });
});

$(document).ready(function(){
  $("#work3").mouseenter(function(){
    $("#work3").show();
  }).mouseleave(function(){
    $("#naz2").hide ();
  });
});

$(document).ready(function(){
  $("#work2").mouseenter(function(){
    $("#work2").show();
  }).mouseleave(function(){
    $("#naz3").hide();
  });
});

$(document).ready(function(){
  $("#work1").mouseenter(function(){
    $("#work1").show();
  }).mouseleave(function(){
    $("#naz4").hide();
  });
});
