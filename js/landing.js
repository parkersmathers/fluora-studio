$(document).ready(function () {

  $('h1').children('span').each(function () {
    var button = $(this)
    var link = button.find('a')
    var href = link.attr('href')
    var cards = $('.grid').find('.' + href + '')
    var touchCount = 1

    function process_touchstart(e) {
      e.data = touchCount
      switch (e.data) {
        case 1: handle_one_touch(e); break;
        case 2: handle_two_touches(e); break;
      }
    }

    function handle_one_touch(e) {
      button.addClass('current z2')
      cards.addClass('touch-card')
      touchCount += 1
    }

    function handle_two_touches(e) {
      button.removeClass('current z2')
      cards.removeClass('touch-card')
      touchCount -= 1
    }

    $(this).on( {

      'touchstart': function (e) {
        e.preventDefault()
        process_touchstart(e)
      },

      'mouseenter': function(e) {
        e.preventDefault()
        e.stopPropagation()
        button.addClass('current z2')
        cards.addClass('current z1')
        $('.landing').addClass('z2')
      },
      'mouseleave': function (e) {
        e.preventDefault()
        e.stopPropagation()
        button.removeClass('current z2')
        cards.removeClass('current z1')
        $('.landing').removeClass('z2')
      },
      'click': function (e) {
        e.preventDefault()
        e.stopPropagation()
        $('.landing').removeClass('active').addClass('hidden')
        cards.removeClass('current z1').addClass('active z1')
        button.removeClass('current').addClass('active z2')
        $('a').removeClass('hot')
      }
    }, '.hot')
  })
})
