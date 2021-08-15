$(function() {
  // console.log will log a message or object to the browser developer console

  $(".page2").hide()
  $("#nextButton").click(page2Visible);


});


function page2Visible() {
  $(".page1").hide();
  $(".page2").show();
}


