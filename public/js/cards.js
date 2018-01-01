$(document).ready(function () {
  var touchCountCards = 1
  var targetCard

  function handleOneTouchCards(e) {
    if (targetCard && (targetCard !== e.target)) {
      $(targetCard).trigger('mouseout')
      targetCard = e.target
      $(targetCard).trigger('mouseover')
    } else {
      targetCard = e.target
      $(targetCard).trigger('mouseover')
    }
    touchCountCards++
  }

  function handleTwoTouchesCards(e) {
    if (e.target === targetCard) {
      $(targetCard).trigger('click')
      targetCard = undefined
      touchCountCards--
    } else {
      $(targetCard).trigger('mouseout')
      targetCard = e.target
      $(targetCard).trigger('mouseover')
    }
  }

  $('#grid').on( {

    'touchstart': function (e) {
      e.preventDefault()
      switch (touchCountCards) {
        case 1: handleOneTouchCards(e); break;
        case 2: handleTwoTouchesCards(e); break;
        default: console.log('not supported'); break;
      }
    },

    'mouseover': function (e) {
      $(this).find('img').css('opacity', 1)
    },

    'mouseout': function (e) {
      $(this).find('img').removeAttr('style')
    }
  }, '.card.active')

  $('.landing').on( {
    'click': function (e) {
      e.preventDefault()
    }
  }, 'a.active')

})
