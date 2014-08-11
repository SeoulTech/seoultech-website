window.onload = function() {

// svg fallback
document.getElementById('seoultech-logo').src = document
  .getElementById('seoultech-logo').src.replace('.svg', '.png')

// checkbox hack fallback
  var toggleLabel = document.getElementById('hamburger'),
    menu = document.getElementById('menu'),
    toggleState = false

  toggleLabel.attachEvent('onclick', function() {
    console.log('aaaa ' + toggleState)

    if (toggleState) {
      menu.style.display = 'block'
      toggleState = false
    } else {
      menu.style.display = 'none'
      toggleState = true
    }
  })
}