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

$(Document).ready(function(){
  $("#imgdiza").click(function(){
    $("#diza").toggle();
  });
});

$(Document).ready(function(){
  $("#imgdizb").click(function(){
    $("#dizb").toggle();
  });
});

$(Document).ready(function(){
  $("#imgdizc").click(function(){
    $("#dizc").toggle();
  });
});
