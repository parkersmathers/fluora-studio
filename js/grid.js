$(document).ready(function () {

  $('.grid.active .card').each(function () {
    var cat = $(this).attr('class').split(' ').shift()
    var grid = $('.grid')
    var landing = $('.landing')
    var link

    $(this).on( {

      'mouseenter': function(e) {
        e.preventDefault()
        cards = grid.children().not('.' + cat + '')
        cards.addClass('faded')
        link = landing.find('.' + cat + '.f-b')
        link.addClass('current')
      },
      'mouseleave': function (e) {
        e.preventDefault()
        cards.removeClass('faded')
        link.removeClass('current')
      },
      'click': function (e) {
        e.preventDefault()
        // landing.children('h1').addClass('hidden')
        // cards.children().addClass('active')
        // $(this).addClass('active')
      }
    })
  })
})
