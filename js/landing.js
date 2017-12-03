$(document).ready(function () {
  var touchCountLanding = 1
  var target

  $('h1 span').each(function () {
    var button = $(this)
    var link = button.find('a')
    var href = link.attr('href')
    var cards = $('.grid').find('.' + href + '')

    function handleOneTouch(e) {
      // console.log('one');
      // console.log(e);
      // console.log(target);
      if (target && (target !== e.target)) {
        $(target).trigger('mouseout')
        target = e.target
        $(target).trigger('mouseover')
      } else {
        target = e.target
        $(target).trigger('mouseover')
      }
      touchCountLanding++
    }

    function handleTwoTouches(e) {
      // console.log('two');
      // console.log(e);
      // console.log(target);
      if (e.target === target) {
        $(target).trigger('click')
        target = undefined
        touchCountLanding--
      } else {
        $(target).trigger('mouseout')
        target = e.target
        $(target).trigger('mouseover')
      }
    }

    $(this).on( {

      'touchstart': function (e) {
        e.preventDefault()
        switch (touchCountLanding) {
          case 1: handleOneTouch(e); break;
          case 2: handleTwoTouches(e); break;
          default: console.log('not supported'); break;
        }
      }
    })

    $(this).on( {

      'mouseover': function (e) {
        e.preventDefault()
        e.stopPropagation()
        button.addClass('current z2')
        cards.addClass('current z1')
        $('.landing').addClass('z2')
      },
      'mouseout': function (e) {
        e.preventDefault()
        e.stopPropagation()
        button.removeClass('current z2')
        cards.removeClass('current z1')
        $('.landing').removeClass('z2')
      },
      'click': function (e) {
        e.preventDefault()
        e.stopPropagation()
        $('.landing').removeClass('active').addClass('hidden')
        cards.removeClass('current z1').addClass('active z1')
        button.removeClass('current z2').addClass('active z2')
        $('a').removeClass('hot')
      }
    }, '.hot')

    $('a.taphover').on('touchstart', function (e) {
      var link = $(this); //preselect the link
      if (link.hasClass('hover')) {
        return true;
      } else {
        link.addClass('hover');
        $('a.taphover').not(this).removeClass('hover');
        e.preventDefault();
        return false; //extra, and to make sure the function has consistent return points
      }
    });
  })
})
