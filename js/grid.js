$(document).ready(function () {
  var cat, link, opaque, faded

  $('.container').on( {

    'mouseenter': function(e) {
      e.preventDefault()
      e.stopPropagation()
      cat = $(this).attr('class').split(' ').shift()
      opaque = $('.grid').find('.' + cat + '')
      faded = $('.grid').find('.card').not('.' + cat + '').find('.card-content')
      link = $('.landing').find('a.' + cat + '')
      faded.addClass('faded')
      opaque.addClass('current z1')
      link.addClass('current z2')
    },
    'mouseleave': function (e) {
      e.preventDefault()
      e.stopPropagation()
      faded.removeClass('faded')
      opaque.removeClass('current z1')
      link.removeClass('current z2')
    },
    'click': function (e) {
      e.preventDefault()
      $('.grid').removeClass('active').addClass('hidden')
      $('.landing').addClass('z2')
      faded.removeClass('faded')
      opaque.removeClass('current z1').addClass('active')
      link.removeClass('current z2').addClass('active')
    }
  }, '.grid.active .card')
})
