$(document).ready(function () {
  var touchCountLanding = 1
  var target

  // Handle touch events for switching views: landing -> cards

  $('.container').on( {
    'touchstart': function (e) {
      e.preventDefault()
      $('.landing').removeClass('active z2').addClass('hidden')
      $('.current').removeClass('current').addClass('active')
      $('.touch-card').removeClass('touch-card').addClass('active z1')
    }
  }, '.touch-card')

  // Handle events for hovering over links and switching views: landing -> cards

  $('h1 span').each(function () {
    var button = $(this)
    var link = button.find('a')
    var href = link.attr('href')
    var cards = $('.grid').find('.' + href + '')

    // Handle touch events

    function handleOneTouch(e) {
      if ($('.card-content').hasClass('all-gray')) {
        $('h1 span a#work').trigger('mouseout')
        // $('.grid').removeAttr('style')
        // $('.card-content').removeAttr('style')
        // $('.card-image').removeAttr('style')
      } else if (target && (target !== e.target)) {
        $(target).trigger('mouseout')
        target = e.target
        $(target).trigger('mouseover')
      } else {
        target = e.target
        $(target).trigger('mouseover')
      }
      cards.removeClass('current z1').addClass('touch-card')
      touchCountLanding++
    }

    function handleTwoTouches(e) {
      if (e.target === target) {
        $(target).trigger('click')
      } else {
        $(target).trigger('mouseout')
        target = e.target
        $(target).trigger('mouseover')
        cards.removeClass('current z1').addClass('touch-card')
      }
    }

    $(this).on( {

      'touchstart': function (e) {
        e.preventDefault()
        switch (touchCountLanding) {
          case 1: handleOneTouch(e); break;
          case 2: handleTwoTouches(e); break;
          default: console.log('not supported'); break;
        }
      }
    }, '.hot')

    // Handle mouse events

    $(this).on( {

      'mouseover': function (e) {
        e.preventDefault()
        e.stopPropagation()
        button.addClass('current z2')
        cards.addClass('current z1')
        $('.landing').addClass('z2')
      },
      'mouseout': function (e) {
        e.preventDefault()
        e.stopPropagation()
        button.removeClass('current z2')
        cards.removeClass('current z1 touch-card')
        $('.landing').removeClass('z2')
      },
      'click': function (e) {
        e.preventDefault()
        e.stopPropagation()
        $('.landing').removeClass('active').addClass('hidden')
        cards.removeClass('current z1').addClass('active z1')
        button.removeClass('current z2').addClass('active z2')
        $('a').removeClass('hot')
      }
    }, '.hot')

  })
})
