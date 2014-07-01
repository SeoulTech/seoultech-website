Seoul Tech Website alpha
========================

First of all, run `npm install`.

Markdown sources are in `client/content/source`:
+ `pages` is for top-level pages,
+ `blog` is for blog entries, grouped by year

To build website run `node builder/build.js`

Router is broken, might get 404 when accesing the site from nested pages (e.g. `/about/`)

##TODO:
general:
+ apply css
+ write tests for components
+ fix the router. possibly use hashes
+ add more pages to the site
+ consider using sessionStorage instead of localStorage

blog:
+ sort by post dates

event:
+ display userpics of guests for each meetup

builder:
+ auto-create directories
+ write tests for `builder.js`