$(document).ready(function () {

  $('.card').each( function () {
    var card = $(this)
    var content = card.find('.card-content')
    var image = card.find('.card-image')

    $(this).on( {

      'mouseenter': function (e) {
        e.preventDefault()
        e.stopPropagation()
        console.log('hi');
      }
    })
  }, '.active')
})
