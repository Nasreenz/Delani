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

$("#work4").mouseover(function (){
  $("$naseeb").show();
}).mouseout
