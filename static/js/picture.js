/* eslint-disable func-names */
/* eslint-disable no-undef */
$(() => {
  $('#1').click(function () {
    if ($('#2').is(':visible')) {
      adjust('#1', true);
    } else {
      adjust('#1', false);
    }
  });

  $('#2').click(function () {
    if ($('#1').is(':visible')) {
      adjust('#2', true);
    } else {
      adjust('#2', false);
    }
  });

  $('#3').click(function () {
    if ($('#1').is(':visible')) {
      adjust('#3', true);
    } else {
      adjust('#3', false);
    }
  });

  $('#4').click(function () {
    if ($('#1').is(':visible')) {
      adjust('#4', true);
    } else {
      adjust('#4', false);
    }
  });

  $('#5').click(function () {
    if ($('#1').is(':visible')) {
      adjust('#5', true);
    } else {
      adjust('#5', false);
    }
  });

  $('#6').click(function () {
    if ($('#1').is(':visible')) {
      adjust('#6', true);
    } else {
      adjust('#6', false);
    }
  });

  $('#7').click(function () {
    if ($('#1').is(':visible')) {
      adjust('#7', true);
    } else {
      adjust('#7', false);
    }
  });

  $('#8').click(function () {
    if ($('#1').is(':visible')) {
      adjust('#8', true);
    } else {
      adjust('#8', false);
    }
  });

  $('#9').click(function () {
    if ($('#1').is(':visible')) {
      adjust('#9', true);
    } else {
      adjust('#9', false);
    }
  });

  function adjust(id_tag, enlargen) {
    console.log(id_tag);
    let NUM_TAGS = 10;
    let i = 0;
    let tag = id_tag.substring(id_tag.search('#') + 1);
    console.log(tag);
    console.log(enlargen);

    if (enlargen) {
      if (tag <= 3) {
        $('#r2').hide();
        $('#r3').hide();
        $('#r1').show();
      } else if (tag <= 6) {
        $('#r2').show();
        $('#r3').hide();
        $('#r1').hide();
      } else {
        $('#r2').hide();
        $('#r3').show();
        $('#r1').hide();
      }
    } else {
      $('#r1').show();
      $('#r2').show();
      $('#r3').show();
    }

    for (; i < tag; ++i) {
      if (enlargen) {
        $('#' + i).hide();
      } else {
        console.log('#' + i);
        $('#' + i).show();
      }
    }
    i += 1;
    for (; i < NUM_TAGS; ++i) {
      if (enlargen) {
        $('#' + i).hide();
      } else {
        $('#' + i).show();
      }
    }
  }
});
