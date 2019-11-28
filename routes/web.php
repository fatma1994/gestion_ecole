<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/eleve', function () {
    return 'bonjour fatima';
});

//Route::get('/eleve/{nom}', function ($nom) {
    //return 'je m appelle $nom';
//});
Route::get('/eleve','EleveController@index');
Route::get("/eleve/{id}","EleveController@show");
Route::get('/fa','HomeController@index');
Route::get('/home','HomeController@show');
