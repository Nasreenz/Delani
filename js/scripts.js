$(document).ready(function(){
  $("form#form-delani").submit(function(event){
    // event.preventDefault();
    var name = $("input#numro").val();
    var email = $("input#numro1").val();
    var message = $("textarea#message").val();
    if ($("input#numro1").val() && $("input#numro1").val()){
      alert (name + ",  your message has been received. I appreciate you for reaching out to me.");
    }
    else {
      alert("Enter your name and email!");
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

$(document).ready(function(){
  $("#work5").mouseenter(function(){
    $("#work5").show();
  }).mouseleave(function(){
    $("#naz5").hide ();
  });
});

$(document).ready(function(){
  $("#work6").mouseenter(function(){
    $("#work6").show();
  }).mouseleave(function(){
    $("#naz6").hide ();
  });
});

$(document).ready(function(){
  $("#work7").mouseenter(function(){
    $("#work7").show();
  }).mouseleave(function(){
    $("#naz7").hide();
  });
});

$(document).ready(function(){
  $("#work8").mouseenter(function(){
    $("#work8").show();
  }).mouseleave(function(){
    $("#naz8").hide();
  });
});
