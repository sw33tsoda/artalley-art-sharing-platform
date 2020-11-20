<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['prefix' => '/auth'],function(){
    Route::post('/register',[\App\Http\Controllers\Auth\AuthController::class, 'register']);
    Route::middleware('user_auth')->post('/login',[\App\Http\Controllers\Auth\AuthController::class, 'login']);
    Route::middleware('auth:api')->post('/check',[\App\Http\Controllers\Auth\AuthController::class, 'check']);
    Route::middleware('auth:api')->post('/logout',[\App\Http\Controllers\Auth\AuthController::class, 'logout']);

});

// ADMIN 
Route::group(['prefix' => '/admin/resources','middleware' => 'auth:api'],function(){
    Route::middleware('admin_only')->apiResource('users', \App\Http\Controllers\Admin\UsersController::class);
});
