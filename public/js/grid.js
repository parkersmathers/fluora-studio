$(document).ready(function () {
  var cat, button, opaque, faded
  var touchCountGrid = 1
  var targetGrid

  function handleOneTouchCards(e) {
    if ((targetGrid || $(e.currentTarget).hasClass('current')) && (targetGrid !== e.target)) {
      $(targetGrid).trigger('mouseout')
      targetGrid = e.target
      $(targetGrid).trigger('mouseover')
    } else {
      targetGrid = e.target
      $(targetGrid).trigger('mouseover')
    }
    touchCountGrid++
  }

  function handleTwoTouchesCards(e) {
    if (e.target === targetGrid || $(e.currentTarget).hasClass('current')) {
      $(targetGrid).trigger('click')
      targetGrid = undefined
      touchCountGrid--
    } else {
      $(targetGrid).trigger('mouseout')
      targetGrid = e.target
      $(targetGrid).trigger('mouseover')
    }
  }

  $('#main').on( {

    'touchstart': function (e) {
      e.preventDefault()
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
      opaque = $('.grid').find('.' + cat + '')
      faded = $('.grid').find('.card').not('.' + cat + '').find('.card-content')
      button = $('.landing').find('span.' + cat + '')
      faded.addClass('faded')
      opaque.addClass('current z1')
      button.addClass('current z2')
    },
    'mouseout': function (e) {
      e.preventDefault()
      e.stopPropagation()
      faded.removeClass('faded')
      opaque.removeClass('current z1')
      button.removeClass('current z2')
    },
    'click': function (e) {
      e.preventDefault()
      $('.grid').removeClass('active').addClass('hidden')
      $('.landing').addClass('z2')
      faded.removeClass('faded')
      opaque.removeClass('current z1').addClass('active')
      button.removeClass('current z2').addClass('active')
    }
  }, '.grid.active .card')
})
