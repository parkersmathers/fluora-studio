$('nav').on('click', 'a', function () {
  _href = $(this).attr('href')
  history.pushState(null, null, href)
  loadContent()
})

var $main = $('#main'),
    $page = $('#page'),
    baseHeight = 0

$page.height($page.height())
baseHeight = $page.height() - $main.height()

function loadContent(href) {

  $main
    .find('section.active')
    .fadeOut(200, function () {
      $main
        .hide()
        .load(href + )
    })

}
