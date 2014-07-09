Seoul Tech Website alpha
========================

First of all, run `npm install`.

Markdown sources are in `client/content/source`:
+ `pages` is for top-level pages,
+ `blog` is for blog entries, grouped by year

To build website run `node builder/build.js`

##Internals
Any HTTP server could be used to serve index.html + bundle.js 
Bundle.js contains engine + content built by [Webpack](https://github.com/webpack/webpack)

###Engine
Engine consists of [React](http://facebook.github.io/react/docs/) components from `client/scripts` 

###Content
Content is a result of `builder/build.js` converting *.md -> *.js

##TODO:
general:
+ apply css
+ write tests for components
+ add more pages to the site
+ minify scripts and styles

blog:
+ sort by post dates. how to get dates?

event:
+ display userpics of guests for each meetup

builder:
+ write tests for `builder.js`