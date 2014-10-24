window.onload = function() {

// svg fallback
  var logo = document.getElementById('seoultech-logo')
  logo.src = logo.src.replace('.svg', '.png')

// checkbox hack fallback
  var toggleLabel = document.getElementById('hamburger')
  var menu = document.getElementById('menu')
  var toggleState = false

  toggleLabel.attachEvent('onclick', function() {
    if (toggleState) {
      menu.style.display = 'block'
      toggleState = false
    } else {
      menu.style.display = 'none'
      toggleState = true
    }
  })
}