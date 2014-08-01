var url = require('./build.config').url

module.exports = [
  '<!DOCTYPE html>',
  '<html lang="en">',
  '<head>',
  '<meta charset="UTF-8">',
  '<link rel="stylesheet" href="' + url + '/styles/style.css" />',
  '<title>Seoul Tech Society</title>',
  '</head>',
  '<body>',
  '<-- {{content}} !-->',
  '</body>',
  '</html>'
].join('\n')