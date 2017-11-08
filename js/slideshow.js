$( function() {

  var slideCount
  var slideWidth
  var slideCardHeight
  var slideCaptionHeight
  var sliderUlWidth

  function startWith() {
    var slideCount = $('.slide-wrap').length
    var firstSlide = $('.first-slide')
    var nextSlides = firstSlide.nextAll()
    var firstCaption = $('.first-caption')
    var nextCaptions = firstCaption.nextAll()

    $(nextSlides).prependTo('.card-list')
    $(firstSlide).prependTo('.card-list')
    $(nextCaptions).prependTo('.caption-list')
    $(firstCaption).prependTo('.caption-list')

    $('.card-list li:last-child').prependTo('.card-list')
    $('.caption-list li:last-child').prependTo('.caption-list')
    $('#slider-container').removeClass('hidden')
  }

  function setSize() {
    slideCount = $('.slide-wrap').length
    slideWidth = $('.slide-wrap').outerWidth()
    slideCardHeight = $('.slide-wrap').outerHeight()
    slideCaptionHeight = $('.caption-wrap').outerHeight()
    sliderUlWidth = slideCount * slideWidth
    $('.slide-box').css({
      width: slideWidth,
      height: slideCardHeight
    })

    $('.caption-box').css({
      width: slideWidth,
      height: slideCaptionHeight
    })

    $('.slider ul').css({
      width: sliderUlWidth,
      marginLeft: -slideWidth
    })
  }

  $('.grid').on( 'click', '.landing-card, .active-card', startWith )
  $('.landing').on( 'click', '#work', startWith )

  $('.card-list li:last-child').prependTo('.card-list')
  $('.caption-list li:last-child').prependTo('.caption-list')

  function moveLeft() {
    $('.card-list').animate({
      left: +slideWidth
    }, function() {
      $('.card-list li:nth-child(2)').removeClass('first-slide').prev().addClass('first-slide')
      $('.card-list li:last-child').prependTo('.card-list')
      $(this).css('left', '')
    })

    $('.caption-list').animate({
      left: +slideWidth
    }, function() {
      $('.caption-list li:nth-child(2)').removeClass('first-caption').prev().addClass('first-caption')
      $('.caption-list li:last-child').prependTo('.caption-list')
      $(this).css('left', '')
    })
  }

  function moveRight() {
    $('.card-list').animate({
      left: -slideWidth
    }, function() {
      $('.card-list li:nth-child(2)').removeClass('first-slide').next().addClass('first-slide')
      $('.card-list li:first-child').appendTo('.card-list')
      $(this).css('left', '')
    })

    $('.caption-list').animate({
      left: -slideWidth
    }, function() {
      $('.caption-list li:nth-child(2)').removeClass('first-caption').next().addClass('first-caption')
      $('.caption-list li:first-child').appendTo('.caption-list')
      $(this).css('left', '')
    })
  }

  setSize()

  $(window).resize(function() {
    setSize()
  })

  $('.button-box').on('click', '.control_prev', function(e) {
    e.preventDefault()
    moveLeft()
  })

  $('.button-box').on('click', '.control_next', function(e) {
    e.preventDefault()
    moveRight()
  })
} )
