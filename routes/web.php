<?php

use App\Models\ArtChannel;
use App\Models\Post;
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

// Route::get('/', function () {
//     return view('index');
// });

// Route::view('/{path?}', 'index');

Route::get('/playground', function() {
    $list = ArtChannel::all();
    function newList($channel) {
        return [
            'label' => $channel['channel_name'],
            'value' => $channel['id'],
        ];
    }
    $finalList = array_map('newList',$list->toArray());
    dd($list->toArray());
});

Route::get('/{path?}', function () {
    return view('index');
})->where('path', '.*');

// Route::get('/test', function() {
//     $post = Post::find(1);
//     echo $post->art_channels;
// });
