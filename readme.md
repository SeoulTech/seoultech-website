Seoul Tech Website beta
========================
##Install
1. Install [node](http://nodejs.org/).
2. Run `npm install`.

##Edit
Markdown sources and images are in `/source/`:
+ `pages` is for top-level pages,
+ `blog` is for blog entries, grouped by year

To reference an image in markdown file, write `{{images}}/image-name.ext`. Builder will replace `{{images}}` with the actual path. Important: `images` structure must match markdown source directories (builder will look in `images/blog/2013/image-name.ext` for an image referenced in markdown file that is located in `blog/2013`)

Use `{{fold}}` in the markdown source to create post previews for `blog` view.

Homepage configuration file is `builder/index.yml`.

##Build
To build the website run `node builder/build.js`.
It will fetch data from meetup.com and convert local markdown files to HTML pages. Also, it will bundle up required javascripts.

##Internals
Any HTTP server could be used to serve the site (a collection of directories containing HTML files). Some pages also include `bundle.js` that contains javascript for dynamic page behavior and ajax. Bundle is built by [Webpack](https://github.com/webpack/webpack)

###Builder
The purpose of builder is to fetch data from meetup.com and convert markdown sources to HTML. Build modules are:
+ `build`: build controller.
+ `getFiles`: read and process markdown sources.
+ `routes`: configuration for site routes.
+ `build.config`: global variables.
+ `htmlBoilerplate`: HTML skeleton used to build dynamic pages.
+ `webpack.config`: config front-end bundles.

###Scripts
Directories under `scripts`:
+ `bundles`: packaged front-end scripts.
+ `components`: [React](http://facebook.github.io/react/docs/) components that compose UI.
+ `loaders`: files with pre-fetched data used to create bundles.
+ `utilities`: a collection of helper functions (shared with builder)
