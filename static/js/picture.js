$(function() {
  $('#1').click(function() {
    if ($('#2').is(':visible')) {
      $('#2').hide();
      $('#3').hide();
      $('#4').show();
      $('#5').show();
      $('#6').show();
    } else {
      $('#2').show();
      $('#3').show();
    }
  });

  $('#2').click(function() {
    if ($('#1').is(':visible')) {
      $('#1').hide();
      $('#3').hide();
      $('#4').show();
      $('#5').show();
      $('#6').show();
    } else {
      $('#1').show();
      $('#3').show();
    }
  });

  $('#3').click(function() {
    if ($('#1').is(':visible')) {
      $('#1').hide();
      $('#2').hide();
      $('#4').show();
      $('#5').show();
      $('#6').show();
    } else {
      $('#1').show();
      $('#2').show();
    }
  });

  $('#4').click(function() {
    if ($('#5').is(':visible')) {
      $('#5').hide();
      $('#6').hide();
      $('#1').show();
      $('#2').show();
      $('#3').show();
    } else {
      $('#5').show();
      $('#6').show();
    }
  });

  $('#5').click(function() {
    if ($('#4').is(':visible')) {
      $('#4').hide();
      $('#6').hide();
      $('#1').show();
      $('#2').show();
      $('#3').show();
    } else {
      $('#4').show();
      $('#6').show();
    }
  });

  $('#6').click(function() {
    if ($('#4').is(':visible')) {
      $('#4').hide();
      $('#5').hide();
      $('#1').show();
      $('#2').show();
      $('#3').show();
    } else {
      $('#4').show();
      $('#5').show();
    }
  });

})
