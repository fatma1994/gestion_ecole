const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js(['resources/js/app.js','ressource/js/jquery.js','ressource/js/swiper.min.js',
'ressource/js/masonry.pkgd.min.js','ressource/js/jquery.collapsible.min.js',
'ressource/js/custom.js'],'public/js')
    .sass('resources/sass/app.scss','public/css')
    .styles(['resources/css/bootstrap.css','resources/css/bootstrap.min.css','resources/css/font-awesome.min.css','resources/css/elegant-fonts','ressource/css/themify-icons.css','ressource/css/swiper.css','ressource/css/swiper.min.css','ressource/style.css'],'public/css/all.css');
