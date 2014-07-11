#!/usr/bin/env node

var fs = require('fs'),
  parse = require('marked'),

  inputDir,
  outputDir,

  forEachFile = function(callback) {
// process each file
    fs.readdirSync(inputDir).forEach(callback)
  },

  when = function(f1, f2) {
    return function(arg) {
      return f1(arg) && f2(arg)
    }
  },

  isMarkdown = RegExp.prototype.test.bind(/^.+\.(md|markdown)$/),

  seq = function() {
    var fns = Array.prototype.slice.call(arguments)
    return function(file) {
      fns.map(function(fn) {
          return (fn.length > 1)? fn.bind(null, file) : fn(file)})
        .reduce(function(f1, f2) {return f2(f1)})
    }
  },

  read = function(file) {
    return fs.readFileSync(inputDir + file, 'utf-8')
  },

  convert = function(file, data) {
    var body = data.split('---'),
      title = data.match(/title:(.*)/)
    return parse(body.length > 1? '#' + title[1] + body[2] : data)
  },

  indent = function(n) {
    return Array.apply(null, {length: (n * 2) + 1}).join(' ')
  },

  write = function(file, data) {
    fs.writeFileSync(outputDir + changeExt(file), data)
  },

  changeExt = function(file) {
    return file.split('.').slice(0, -1).concat('.html').join('')
  },

  log = function(file, _) {
    console.log(file, '\x1b[32m', 'OK', '\x1b[39m')
  }

module.exports = function(i, o) {
  try {
    inputDir = i
    outputDir = o
    forEachFile(when(isMarkdown, seq(read, convert, write, log)))
  } catch (e) {
    console.error(e.stack)
    console.log('\x1b[31m', 'Conversion failed', '\x1b[39m')
  }
}


