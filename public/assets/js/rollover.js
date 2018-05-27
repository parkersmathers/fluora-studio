function highlight(e) {
  e.preventDefault()
  var links = Array.from(document.querySelectorAll('.rollover a'))
  var category = e.target.classList[0]
  var matches = links.filter(link => link.classList[0] === category);
  matches.map((item) => {
    item.classList.add('current')
  });
}

var container = document.querySelector('#container')
container.addEventListener('click', highlight, false)
