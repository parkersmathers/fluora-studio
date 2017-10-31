$(document).ready(function () {

  $('.samples').on( {

    'mouseenter': function (e) {
      $('.grid').css('visibility', 'visible')
      $('.card-content').css('background-color', 'rgba(170, 170, 170, .2)')
      $('.card-image').css('opacity', 0)
    },

    'mouseleave': function (e) {
      $('.grid').removeAttr('style')
      $('.card-content').removeAttr('style')
      $('.card-image').removeAttr('style')
    }
  })
})
