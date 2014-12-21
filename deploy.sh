#!/bin/bash

#Automate deployment to projecy github pages


#edit builder/config.js
node builder/build.js
mkdir out/source && cp -R source/images out/source/images
git checkout gh-pages
rm -rf about/ pages/ events/
mv out/* .
