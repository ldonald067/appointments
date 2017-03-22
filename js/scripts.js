$(document).ready(function(){
  $("#formOne").submit(function(event){
    var nameInput = $("input#name").val();
    var apptInput = $("input#appt").val();
    var dateInput = $("input#date").val();
    var startInput = $("input#start").val();
    var startInput = $("input#start").val();
    var endInput = $("input#end").val();

    $(".name").text(nameInput);
    $(".appt").text(apptInput);
    $(".date").text(dateInput);
    $(".start").text(startInput);
    $(".end").text(endInput);

    $("#book").show();

  event.preventDefault();
  });
});
