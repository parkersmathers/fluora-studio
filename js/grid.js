$(document).ready(function () {
  var cat, button, opaque, faded
  var touchCountGrid = 1
  var targetGrid

  function handleOneTouchCards(e) {
    // console.log('one');
    // console.log(e);
    // console.log(targetGrid);
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
    // console.log('two');
    // console.log(e);
    // console.log(targetGrid);
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

  $('.container').on( {

    'touchstart': function (e) {
      e.preventDefault()
      switch (touchCountGrid) {
        case 1: handleOneTouchCards(e); break;
        case 2: handleTwoTouchesCards(e); break;
        default: console.log('not supported'); break;
      }
    },

    'mouseenter': function(e) {
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
    'mouseleave': function (e) {
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
