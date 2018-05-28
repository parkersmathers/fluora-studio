var currentCards = document.querySelectorAll('#grid.hidden .card.current')

function reveal(e) {
  e.preventDefault()
  e.stopPropagation()
  var target = e.currentTarget
  Array.from(target.children).map(item => item.classList.toggle('current'))
}

Array.from(currentCards).map(item => {
  item.addEventListener('mouseover', reveal, false)
  item.addEventListener('mouseout', reveal, false)
})
