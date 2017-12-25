$(document).ready(function () {

  //
  // Handle mouse and touch events for landing links and touch cards
  //

  var touchCountLanding = 1
  var target

  // Handle events for hovering over links and switching views

  $('h1 span').each(function () {
    var button = $(this)
    var link = button.find('a')
    var href = link.attr('href')
    var cards = $('.grid').find('.' + href + '')

    // Handle touch events on links

    function handleOneTouchLinks(e) {
      if ($('.card-content').hasClass('all-gray')) {
        touchCountHere--
        $('h1 span a#work').trigger('mouseout')
      }
      if (target && (target !== e.target)) {
        $(target).trigger('mouseout')
        target = e.target
        $(target).trigger('mouseover')
      } else {
        target = e.target
        $(target).trigger('mouseover')
      }
      // cards.removeClass('current z1').addClass('touch-card')
      touchCountLanding++
    }

    function handleTwoTouchesLinks(e) {
      if ($('.card-content').hasClass('all-gray')) {
        $('h1 span a#work').trigger('mouseout')
        touchCountHere--
      }
      if (e.target === target) {
        $(target).trigger('click')
      } else {
        $(target).trigger('mouseout')
        target = e.target
        $(target).trigger('mouseover')
        // cards.removeClass('current z1').addClass('touch-card')
      }
    }

    $(this).on( {

      'touchstart': function (e) {
        e.preventDefault()
        switch (touchCountLanding) {
          case 1: handleOneTouchLinks(e); break;
          case 2: handleTwoTouchesLinks(e); break;
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

  // Handle touch events on cards

  $('#main').on( {
    'touchstart': function (e) {
      e.preventDefault()
      $('.landing').removeClass('active z2').addClass('hidden')
      $('.current').removeClass('current').addClass('active')
      $('.touch-card').removeClass('touch-card').addClass('active z1')
    }
  }, '.touch-card')

  //
  // Handle mouse and touch events on 'here' button
  //

  var touchCountHere = 1

  function handleOneTouchHere(e) {
    e.preventDefault()
    $(e.target).trigger('mouseover')
    touchCountHere++
  }

  function handleTwoTouchesHere(e) {
    $(e.target).click()
  }

  $('#work').on( {

    'touchstart': function (e) {
      switch (touchCountHere) {
        case 1: handleOneTouchHere(e); break;
        case 2: handleTwoTouchesHere(e); break;
        default: console.log('not supported'); break;
      }
    },

    'mouseover': function (e) {
      e.preventDefault()
      e.stopPropagation()
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
      $('.landing').removeClass('z2')
      $('.card')
        .removeClass('current z1')
        .children().removeClass('all-gray')
        .children().removeClass('hidden')
    }
  })
})
