<?php

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;
use Illuminate\Support\Facades\Route;

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
    return view('welcome');
})->name('welcome');
Route::get ('/home', function () {
    return view ('welcome');
})->name('welcome');

Route::get('/event', function () {
    return view ('event');
})->name('event');


// Login & Register
Route::get('/login', function () {
    return view('login');
});
Route::get ('/register', [RegisterController::class, 'index'])->name('register');
Route::post('/register', [RegisterController::class, 'register'])->name('register.store');



Route::post('/login', [LoginController::class, 'login'])->name('login');