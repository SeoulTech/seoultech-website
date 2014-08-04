var url = require('./build.config').url

module.exports = [
  '<!DOCTYPE html>',
  '<html lang="en">',
  '<head>',
  '<meta charset="UTF-8">',
  '<meta name="description" content="Network and collaboration among tech enthusiasts from all around Korea and beyond.">',
  '<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"/>',
  '<link rel="shortcut icon" href="' + url + 'source/images/icon.ico">',
  '<link href="http://fonts.googleapis.com/css?family=Questrial" rel="stylesheet" type="text/css">',
  '<link rel="stylesheet" href="' + url + 'styles/style.css" />',
  '<title>Seoul Tech Society</title>',
  '</head>',
  '<body>',
  '<-- {{content}} !-->',
  '</body>',
  '</html>'
].join('\n')