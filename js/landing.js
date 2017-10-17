$(document).ready(function () {

  $('.landing.active a').each(function () {
    var href = $(this).attr('href')
    var grid = $('.grid')

    $(this).on( {

      'mouseenter': function(e) {
        e.preventDefault()
        cards = grid.find('.' + href + '')
        cards.children().addClass('active')
      },
      'mouseleave': function (e) {
        e.preventDefault()
        cards.children().removeClass('active')
      }
    })
  })
})
