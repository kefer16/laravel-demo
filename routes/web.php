<?php

use Illuminate\Support\Facades\Route;

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



Route::get('/', ['as' => 'home', 'uses' => 'PagesController@home']);

Route::get('servios',['as' => 'servis', 'uses' => ' PagesController@servis']);

Route::get('contactanos', ['as' => 'contact', 'uses' => 'PagesController@contact']);

Route::get('servicios',['as' => 'servis', 'uses' => 'PagesController@servis']);

Route::get('saludos/{nombre?}', ['as' => 'saludos', 'uses' => 'PagesController@saludo'])->where('nombre', "[A-Za-z]+");

