$(document).ready(function () {

  $('h1').children('span').each(function () {
    var button = $(this)
    var link = button.find('a')
    var href = link.attr('href')
    var cards = $('.grid').find('.' + href + '')

    $(this).on( {

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
        button.removeClass('current z2').addClass('active z2')
        $('a').removeClass('hot')
      }
    }, '.hot')
  })
})
