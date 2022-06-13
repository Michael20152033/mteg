var x = document.getElementById("contain");
x.addEventListener("click", myFunction);
function myFunction() {  
  x.classList.toggle("change");
}
$( "#contain" ).click(function() {
    $( "#overlay" ).fadeIn( 300, function() {
    });
    $( "body" ).css( "overflow", "hidden" ) 
    $( ".menu" ).fadeIn( 500, function() {
    });
});
$( "#overlay" ).click(function() {
    $('#contain').removeClass('change');
    $( "#overlay" ).fadeOut( 300, function() {
    });
    $( "body" ).css( "overflow", "auto" ) 
    $( ".menu" ).fadeOut( 200, function() {
    });
});


