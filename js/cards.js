$(document).ready(function () {

  $('.landing').on( {
    'click': function (e) {
      e.preventDefault()
    }
  }, 'a.active')

  $('.grid').on( {

    'mouseover': function (e) {
      // e.preventDefault()
      // e.stopPropagation()
      $(this).find('img').css('opacity', 1)
    },

    'mouseout': function (e) {
      // e.preventDefault()
      // e.stopPropagation()
      $(this).find('img').removeAttr('style')
    }
  }, '.card.active')
})
