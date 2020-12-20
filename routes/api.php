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

// [ADMIN ONLY] ADMIN 
Route::group(['prefix' => '/admin/resources','middleware' => 'auth:api'],function(){
    Route::middleware('admin_only')->apiResource('users', \App\Http\Controllers\Admin\UsersController::class);
    Route::middleware('admin_only')->apiResource('art_channels', \App\Http\Controllers\Admin\ArtChannelsController::class);
});


// COMMUNITY
Route::group(['prefix' => '/community/resources'],function(){

    // [PUBLIC] interface
    Route::group(['prefix' => '/interface'], function() {
        Route::get('/upload-select-list', [\App\Http\Controllers\Community\InterfaceController::class, 'uploadSelectList']);
    });

    Route::middleware('auth:api')->apiResource('arts',\App\Http\Controllers\Community\ArtsController::class);
    Route::middleware('auth:api')->apiResource('showcases',\App\Http\Controllers\Community\ShowcasesController::class);
    Route::get('/arts/get/{id}',[\App\Http\Controllers\Community\ArtsController::class,'show']);

    // [AUTH ONLY]
    Route::group(['prefix' => '/auth-only'],function() {
        // unused
    });
});
