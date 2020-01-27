# Mobile simple grid

![npm version](https://badge.fury.io/js/mobile-simple-grid.svg)
![GitHub file size in bytes](https://img.shields.io/github/size/fexblanco/mobile-simple-grid/dist/mobile-simple-grid.css)
![GitHub License](https://img.shields.io/github/license/fexblanco/mobile-simple-grid)
![GitHub package.json version](https://img.shields.io/github/package-json/v/fexblanco/mobile-simple-grid)

Very very simple grid focused on lightweight and mobile only development. At this moment the compiled file weighs less than 0.5kb

This grid fits awesome for AMP development (only mobile sizes, no responsive) because they have a [limitation of 50,000 bytes for the weight of the CSS](https://amp.dev/es/documentation/guides-and-tutorials/develop/style_and_layout/?format=websites#add-styles-to-a-page).

## How to use

### Compiling yourself

You can customize your own mobile simple grid using the `variables.sass` file.

In order to use this proyect to generate the this file you need to run:

```sh
yarn install
gulp styles
```

A mobile simple grid compiled versión will appear in the /dist folder

### Using dist

You can use the repo dist version stored un `/dist` which uses these variables:

``` css
$name-block:                 'grd'
$name-element-container:     'ct'
$name-element-row:           'rw'
$name-element-col:           'cl'

$column-number:              12
$container-offset:           10px
$gutter:                     10px
```
