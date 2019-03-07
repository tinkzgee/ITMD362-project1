// jQuery 3.x-style ready event and locally scoped $
jQuery( function( $ ) {
  $( 'html' ).removeClass( 'nojs' );
  $( 'html' ).addClass( 'hasjs' );
} );
document.getElementById( "submit" ).addEventListener( "click", function() {
  alert( "Email Recieved: Watch your brand grow!" );
} );