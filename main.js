$(document).ready(function() {
  
  $( "#nav-toggle" ).click(function() {
    $( "#cell-items" ).hide();
  });
  
   $('#email-submit').click(function() {
    var test = alert("Email functionality currently not available.");
  });

  $( ".navbar-brand").click(function() {
    $(".inner").css("font-family", fontChange());
  });

  var fontChange = function() {  
    var fontList = ["Abril Fatface", "Bungee", "Bungee Inline", "Limelight", "Monoton", "Montserrat Subrayada", "Nova Square", "Playfair Display SC", "Syncopate", "Unica One"];

    var font = fontList[Math.floor(Math.random() * fontList.length)];
    return font;
  }
});



