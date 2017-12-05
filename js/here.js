$(document).ready(function () {
  var touchCountHere = 1

  function handleOneTouch(e) {
    e.preventDefault()
    $(e.target).trigger('mouseleave')
    $(e.target).trigger('mouseenter')
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

    'mouseenter': function (e) {
      // e.preventDefault()
      // e.stopPropagation()
      $('.grid').css('visibility', 'visible')
      $('.card-content').css('background-color', 'rgba(170, 170, 170, 0.2)')
      $('.card-image').css('opacity', 0)
    },

    'mouseleave': function (e) {
      // e.preventDefault()
      // e.stopPropagation()
      $('.grid').removeAttr('style')
      $('.card-content').removeAttr('style')
      $('.card-image').removeAttr('style')
    }
  })
})
