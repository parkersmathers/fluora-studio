$(document).ready(function () {
  var touchCountHere = 1

  function handleOneTouch(e) {
    e.preventDefault()
    $(e.target).trigger('mouseover')
    touchCountHere++
  }

  function handleTwoTouches(e) {
    $(e.target).click()
  }

  $('#work').on( {

    'touchstart': function (e) {
      switch (touchCountHere) {
        case 1: handleOneTouch(e); break;
        case 2: handleTwoTouches(e); break;
        default: console.log('not supported'); break;
      }
    },

    'mouseover': function (e) {
      e.preventDefault()
      e.stopPropagation()
      // $('.grid').css('visibility', 'visible')
      // $('.card-content').css('background-color', 'rgba(170, 170, 170, 0.2)')
      // $('.card-image').css('opacity', 0)
      $('.landing').addClass('z2')
      $('h1 span.current.z2').removeClass('current z2')
      $('.card')
        .addClass('current z1')
        .children().addClass('all-gray')
        .children().addClass('hidden')
    },

    'mouseout': function (e) {
      e.preventDefault()
      e.stopPropagation()
      // $('.grid').removeAttr('style')
      // $('.card-content').removeAttr('style')
      // $('.card-image').removeAttr('style')
      $('.landing').removeClass('z2')
      $('.card').removeClass('current z1').children().removeClass('all-gray').children().removeClass('hidden')
    }
  })
})
