$(document).ready(function () {

  $('.grid.active .card').each(function () {
    var cat = $(this).attr('class').split(' ').shift()
    var cards = $('.grid').find('.' + cat + '')
    var uncards = $('.grid').find('.card').not('.' + cat + '').find('.card-content')
    var link = $('.landing').find('a.' + cat + '')

    $(this).on( {

      'mouseenter': function(e) {
        e.preventDefault()
        uncards.addClass('faded')
        cards.addClass('current z1')
        link.addClass('current z2')
      },
      'mouseleave': function (e) {
        e.preventDefault()
        uncards.removeClass('faded')
        cards.removeClass('current z1')
        link.removeClass('current z2')
      },
      'click': function (e) {
        e.preventDefault()
        $('.grid').removeClass('active').addClass('hidden')
        uncards.removeClass('faded')
        cards.removeClass('current z1').addClass('active')
        link.removeClass('current z2').addClass('active')
      }
    })
  })
})
