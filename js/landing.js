$(document).ready(function () {

  $('h1').children('span').each(function () {
    var link = $(this).find('a')
    var href = link.attr('href')
    var cards = $('.grid').find('.' + href + '')

    $(this).on( {

      'mouseenter': function(e) {
        e.preventDefault()
        e.stopPropagation()
        link.addClass('current z2')
        cards.addClass('current z1')
        $('.landing').addClass('z2')
      },
      'mouseleave': function (e) {
        e.preventDefault()
        e.stopPropagation()
        link.removeClass('current z2')
        cards.removeClass('current z1')
        $('.landing').removeClass('z2')
      },
      'click': function (e) {
        e.preventDefault()
        e.stopPropagation()
        $('.landing').removeClass('active').addClass('hidden')
        cards.removeClass('current z1').addClass('active z1')
        link.removeClass('current').addClass('active z2')
        $('a').removeClass('hot')
      }
    }, '.hot')
  })
})
