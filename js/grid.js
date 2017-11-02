$(document).ready(function () {
  var cat, button, opaque, faded

  $('.container').on( {

    'mouseenter': function(e) {
      e.preventDefault()
      e.stopPropagation()
      cat = $(this).attr('class').split(' ').shift()
      opaque = $('.grid').find('.' + cat + '')
      faded = $('.grid').find('.card').not('.' + cat + '').find('.card-content')
      button = $('.landing').find('span.' + cat + '')
      faded.addClass('faded')
      opaque.addClass('current z1')
      button.addClass('current z2')
    },
    'mouseleave': function (e) {
      e.preventDefault()
      e.stopPropagation()
      faded.removeClass('faded')
      opaque.removeClass('current z1')
      button.removeClass('current z2')
    },
    'click': function (e) {
      e.preventDefault()
      $('.grid').removeClass('active').addClass('hidden')
      $('.landing').addClass('z2')
      faded.removeClass('faded')
      opaque.removeClass('current z1').addClass('active')
      button.removeClass('current z2').addClass('active')
    }
  }, '.grid.active .card')
})
