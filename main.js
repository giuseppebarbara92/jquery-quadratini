// Consigli su video 34 A
// Creare una griglia formata da 8x8 quadratini tutti bianchi.



// 15 di questi quadratini (scelti a caso all’inizio) se cliccati diventano rossi,
// gli altri diventano verdi.

var contatore_rossi = 0;
var contatore_verdi = 0;

$('.square').click(function(){
var wannabeRed = $(this).hasClass('wannabeRed');
  if (wannabeRed == true) {
  $(this).css('background', 'red');
  contatore_rossi++;
  $('#number_red').text('Quadrati rossi trovati = ' + contatore_rossi);
  }
  else {
    $(this).css('background', 'green');
    contatore_verdi++;
    $('#number_green').html('Quadrati verdi trovati = ' + contatore_verdi);
  }
});


 // Sopra alla griglia deve esserci un contatore che conta quanti rossi e quanti verdi sono stati scoperti
// wannabeRed
