var out = 'out/'

var url = 'http://seoultech.github.io/seoultech-website/'
// var url = 'http://localhost:8080/'
module.exports = {
  home: url,
  inputDir: 'source/',
  outputDir: __dirname + '/../' + out,
  scriptDir: __dirname + '/../ui/scripts/',
  componentsDir: __dirname + '/../ui/components/',
  pagesDir: __dirname + '/../ui/pages/',
  url: url  + out,
  reactCDN: '//cdnjs.cloudflare.com/ajax/libs/react/0.11.0/react.min.js'

}
