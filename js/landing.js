$(document).ready(function () {

  $('.landing.active a').each(function () {
    var href = $(this).attr('href')
    var grid = $('.grid')
    var landing = $('.landing')
    var cards

    $(this).on( {

      'mouseenter': function(e) {
        e.preventDefault()
        cards = grid.find('.' + href + '')
        cards.children().addClass('active')
      },
      'mouseleave': function (e) {
        e.preventDefault()
        cards.children().removeClass('active')
      },
      'click': function (e) {
        e.preventDefault()
        landing.children('h1').addClass('hidden')
        $(this).addClass('active')
      }
    })
  })
})
