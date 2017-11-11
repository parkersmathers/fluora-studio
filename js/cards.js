$(document).ready(function () {

  $('.landing').on( {
    'click': function (e) {
      e.preventDefault()
    }
  }, 'a.active')

  $('.grid').on( {

    'mouseover': function (e) {
      $(this).find('img').css('opacity', 1)
    },

    'mouseout': function (e) {
      $(this).find('img').removeAttr('style')
    }
  }, '.card.active')
})
