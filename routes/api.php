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
        Route::get('/get-filters-list',[\App\Http\Controllers\Community\InterfaceController::class,'getFiltersList']);
    });
    
    Route::group(['prefix' => '/public'], function() {
        Route::get('/get-user/{user_id}',[App\Http\Controllers\Community\PublicController::class,'getUserProfile']);
        
        // Arts
        Route::get('/get-art-by-id/{id}',[\App\Http\Controllers\Community\PublicController::class,'getArtById']);
        Route::get('/get-arts-list/{dimension_id}-{channel_id}', [\App\Http\Controllers\Community\PublicController::class,'getArtsList']);
        Route::get('/get-arts-list-by-user-id/{user_id}',[\App\Http\Controllers\Community\PublicController::class,'getArtsListByUserId']);
        Route::get('/get-slide-arts-list/{type}',[\App\Http\Controllers\Community\PublicController::class,'getSlideArtsList']);
        
        // Showcases
        Route::get('/get-showcases-list-by-user-id/{user_id}',[\App\Http\Controllers\Community\PublicController::class,'getShowcasesListByUserId']);
        Route::get('/get-showcase-by-id/{id}',[\App\Http\Controllers\Community\PublicController::class,'getShowcaseById']);
    
        // Comments
        Route::get('/get-comments-list-by-art-id/{art_id}',[\App\Http\Controllers\Community\PublicController::class,'getCommentsListByArtId']);
    });

    
    // [AUTHORIZATION is REQUIRED]
    Route::group(['middleware' => 'auth:api'],function(){
        
        // ARTS
        Route::apiResource('arts',\App\Http\Controllers\Community\ArtsController::class);
        // EDIT ART
        Route::middleware('arts_authorize_check')->post('/arts/edit/{art}',[\App\Http\Controllers\Community\ArtsController::class,'update']);
        // DELETE ART
        Route::middleware('arts_authorize_check')->get('/arts/delete/{art}',[\App\Http\Controllers\Community\ArtsController::class,'destroy']);

        // SHOWCASES
        Route::apiResource('showcases',\App\Http\Controllers\Community\ShowcasesController::class);
        // EDIT SHOWCASE
        Route::middleware('showcases_authorize_check')->post('/showcases/edit/{showcase}',[\App\Http\Controllers\Community\ShowcasesController::class,'update']);
        // DETE SHOWCASE 
        Route::middleware('showcases_authorize_check')->get('/showcases/delete/{showcase}',[\App\Http\Controllers\Community\ShowcasesController::class,'destroy']);
        
        // USERS
        Route::middleware('authorize_check')->apiResource('users',\App\Http\Controllers\Community\UsersController::class);

        // COMMENTS
        Route::apiResource('comments',\App\Http\Controllers\Community\CommentsController::class);

        // REPLIES
        Route::apiResource('replies',\App\Http\Controllers\Community\RepliesController::class);

        // SHOWCASE ARTS
        // Route::apiResource('showcaseArts',\App\Http\Controllers\Community\ShowcaseArtsController::class);
    });



    // [AUTH ONLY]
    Route::group(['prefix' => '/auth-only'],function() {
        // unused
    });
});
