var url = require('./build.config').url

module.exports = [
  '<!DOCTYPE html>',
  '<html lang="en">',
  '<head>',
  '<meta charset="UTF-8">',
  '<meta name="description" content="Network and collaboration among tech enthusiasts from all around Korea and beyond.">',
  '<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"/>',
  '<link rel="shortcut icon" href="' + url + 'source/images/icon.ico">',
  '<link rel="stylesheet" href="' + url + 'styles/style.css" />',
  '<!--[if lte IE 8]>',
  '<script src="//cdnjs.cloudflare.com/ajax/libs/es5-shim/4.0.0/es5-shim.min.js"></script>',
  '<script src="//cdnjs.cloudflare.com/ajax/libs/es5-shim/4.0.0/es5-sham.min.js"></script>',
  '<![endif]-->',
  '<title>Seoul Tech Society</title>',
  '</head>',
  '<body>',
  '<-- {{content}} !-->',
  '</body>',
  '</html>'
].join('\n')