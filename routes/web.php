<?php

use Illuminate\Support\Facades\Route;
use App\Models\User;
use App\Http\Controllers\Controller;
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

Route::get('/rooms', function () {
    return view('public/room');
});
Route::get('/room-details', function () {
    return view('public/room-details');
});

Route::get('/about-us', function () {
    return view('public/about-us');
});
Route::get('/blog', function () {
    return view('public/blog');
});
Route::get('/blog-details', function () {
    return view('public/blog-details');
});
Route::get('/contact', function () {
    return view('public/contact');
});
Route::get('/login-booking', function () {
    return view('public/login');
});
Route::get('/sign-up', function () {
    return view('public/sign-up');
});