$(document).ready(function () {

  $('.work').on( {

    'mouseenter': function (e) {
      // e.preventDefault()
      // e.stopPropagation()
      $('.grid').css('visibility', 'visible')
      $('.card-content').css('background-color', 'rgba(170, 170, 170, 0.2)')
      $('.card-image').css('opacity', 0)
    },

    'mouseleave': function (e) {
      // e.preventDefault()
      // e.stopPropagation()
      $('.grid').removeAttr('style')
      $('.card-content').removeAttr('style')
      $('.card-image').removeAttr('style')
    }
  })
})
