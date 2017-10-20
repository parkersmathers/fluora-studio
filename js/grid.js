$(document).ready(function () {

  $('.grid.active .card').each(function () {
    var cat = $(this).attr('class').split(' ').shift()
    var grid = $('.grid')
    var landing = $('.landing')
    var cards
    var uncards
    var link

    $(this).on( {

      'mouseenter': function(e) {
        e.preventDefault()
        uncards = grid.find('.card').not('.' + cat + '')
        uncards.find('.card-content').addClass('faded')
        cards = grid.find('.' + cat + '')
                    .addClass('current z1')
        link = landing.find('.' + cat + '.f-b')
                      .addClass('current z2')
                      .css('color', 'inherit')
      },
      'mouseleave': function (e) {
        e.preventDefault()
        e.stopPropagation()
        uncards.find('.card-content').removeClass('faded')
        cards.removeClass('current z1')
        link.removeClass('current z2')
      },
      'click': function (e) {
        e.preventDefault()
        uncards.removeClass('faded').addClass('hidden')
        cards.removeClass('current z1').addClass('active')
        link.removeClass('current z2').addClass('active')
        // $(this).addClass('active')
      }
    })
  })
})
