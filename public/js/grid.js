$(document).ready(function () {
  var cat, button, opaque, faded
  var touchCountGrid = 1
  var targetCard

  function handleOneTouchCards(e) {
    e.preventDefault()
    if ((targetCard || $(e.currentTarget).hasClass('current')) && (targetCard !== e.currentTarget)) {
      $(targetCard).trigger('mouseout')
      targetCard = e.currentTarget
      $(targetCard).trigger('mouseover')
    } else {
      targetCard = e.currentTarget
      $(targetCard).trigger('mouseover')
    }
    touchCountGrid++
  }

  function handleTwoTouchesCards(e) {
    if (e.currentTarget === targetCard || $(e.currentTarget).hasClass('active')) {
      $(targetCard).trigger('click')
      targetCard = undefined
      touchCountGrid--
    } else {
      e.preventDefault()
      $(targetCard).trigger('mouseout')
      targetCard = e.currentTarget
      $(targetCard).trigger('mouseover')
    }
  }

  $('#main').on( {

    'touchstart': function (e) {
      switch (touchCountGrid) {
        case 1: handleOneTouchCards(e); break;
        case 2: handleTwoTouchesCards(e); break;
        default: console.log('not supported'); break;
      }
    },

    'mouseover': function(e) {
      e.preventDefault()
      e.stopPropagation()
      cat = $(this).attr('class').split(' ').shift()
      opaque = $('#grid').find('.' + cat + '').not(this).addClass('current z1')
      faded = $('#grid').find('.card').not('.' + cat + '').find('.card-content').addClass('faded')
      button = $('.landing').find('span.' + cat + '').addClass('current z2')
    },
    'mouseout': function (e) {
      e.preventDefault()
      e.stopPropagation()
      faded.removeClass('faded')
      opaque.removeClass('current z1')
      button.removeClass('current z2')
    },
    'click': function (e) {
      // $('#grid').removeClass('active').addClass('hidden')
      // $('.landing').addClass('z2')
      // faded.removeClass('faded')
      // opaque.removeClass('current z1').addClass('active')
      // button.removeClass('current z2').addClass('active')
    }
  }, '#grid.active .card')
})
