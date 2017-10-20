$(document).ready(function () {

  $('.landing.active a').each(function () {
    var link = $(this)
    var href = link.attr('href')
    var cards = $('.grid').find('.' + href + '')
    // var content = cards.find('.card-content')

    $(this).on( {

      'mouseenter': function(e) {
        e.preventDefault()
        cards.children('.card-content').addClass('current z1')
        link.addClass('current z2')
      },
      'mouseleave': function (e) {
        e.preventDefault()
        cards.removeClass('current z1')
        link.removeClass('current z2')
      },
      'click': function (e) {
        e.preventDefault()
        $('.landing').children('h1').addClass('hidden')
        cards.addClass('active z1')
        link.addClass('active z2')
      }
    })
  })
})
