$(document).ready(function () {

  $('.landing.active a').each(function () {
    var link = $(this)
    var href = link.attr('href')
    var cards = $('.grid').find('.' + href + '')

    $(this).on( {

      'mouseenter': function(e) {
        e.preventDefault()
        cards.addClass('current z1')
        $('.landing').addClass('z2')
      },
      'mouseleave': function (e) {
        e.preventDefault()
        cards.removeClass('current z1')
        $('.landing').removeClass('z2')
      },
      'click': function (e) {
        e.preventDefault()
        $('.landing').removeClass('active').addClass('hidden')
        cards.removeClass('current z1').addClass('active z1')
        link.addClass('active z2')
      }
    })
  })
})
