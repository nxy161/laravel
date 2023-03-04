<?php

use Illuminate\Support\Facades\Route;
use App\Models\User;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('index');
});
Route::get('/index.html', function () {
    return view('index');
});

Route::get('/rooms', function () {
    return view('public/room');
});
Route::get('/room-details.html', function () {
    return view('public/room-details');
});

Route::get('/about-us.html', function () {
    return view('public/about-us');
});
Route::get('/blog.html', function () {
    return view('public/blog');
});