Seoul Tech Website beta
========================
##Install
1. Install [node](http://nodejs.org/).
2. Run `npm install`.

##Edit
Markdown sources and images are in `/source/`:
+ `pages` is for top-level pages
+ `news`
+ `events`
...

To reference an image in markdown file, write `{{images}}/image-name.ext`. Builder will replace `{{images}}` with the actual path. Important: `images` structure must match markdown source directories (builder will look in `images/news/2013/image-name.ext` for an image referenced in markdown file that is located in `news/2013`)

Use `{{fold}}` in the markdown source to create post previews for `news` view.

##Build
To build the website run `node builder/build.js`.
It will convert local markdown files to HTML pages.

##Deploy
To deploy final results:
  - edit builder/config.js by setting ```var url``` to the absolute URL of the deployment terget
  - build a the website, as above
  - ```mkdir out/sources && cp -R source/images out/source/images``` as a workaround for #1

##Develop
To start the development server run `node builder/dev.js`.
Then, open a browser at `localhost:8080`. Any changes in markdown sources or css will be reloaded automatically.

##Test
[Jest](http://facebook.github.io/jest/) is used for testing. Tests must be located in `__tests__` directories. Run `npm test`.

##Internals
Any HTTP server could be used to serve the site (a collection of directories containing HTML files).

###Builder
The purpose of builder is to convert markdown sources to HTML. Build modules are:
+ `build`: build controller.
+ `getFiles`: read and process markdown sources.
+ `routes`: configuration for site routes.
+ `config`: global variables.
+ `siteTemplate`: HTML skeleton used to build pages.

###Components
`UI` folder holds components and pages, completely decoupled from the backend.

