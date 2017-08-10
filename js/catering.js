$(document).ready(function() {
  $("form#query").submit(function(event) {
    var userNameInput = $("input#userName").val();
    var userEmailInput = $("input#userEmail").val();
    var querySubject = $("input#querySubject").val();
    var queryMessage = $("input#queryMessage").val();

    $(".userName").text(userNameInput);
    $(".userEmail").text(userEmailInput);

    $("#response").show();
    event.preventDefault();
  });
});