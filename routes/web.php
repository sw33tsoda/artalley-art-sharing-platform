<?php

use App\Models\ArtChannel;
use App\Models\Dimension;
use App\Models\Post;
use App\Models\Privacy;
use App\Models\Showcase;
use App\Models\ShowcaseArt;
use App\Models\User;
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
    $list = Showcase::with('showcase_arts.arts')->get();

    dd($list->toArray());
});

Route::get('/startup', function() {
    $privacies = [
        ['allowed' => 'Mọi người'],
        ['allowed' => 'Chỉ mình tôi'],
    ];

    $dimensions = [
        ['dimensional' => '2D'],
        ['dimensional' => '2.5D'],
        ['dimensional' => '3D'],
    ];

    $artChannels = [
        ['channel_slug' => 'digital-art','channel_name' => 'Digital Art'],
    ];

    foreach ($privacies as $privacy) {
        Privacy::create($privacy);
    }

    foreach ($dimensions as $dimension) {
        Dimension::create($dimension);
    }

    foreach ($artChannels as $artChannel) {
        ArtChannel::create($artChannel);
    }
});

Route::get('/{path?}', function () {
    return view('index');
})->where('path', '.*');

// Route::get('/test', function() {
//     $post = Post::find(1);
//     echo $post->art_channels;
// });
