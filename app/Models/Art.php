<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
// use PDO;

class Art extends Model
{
    use HasFactory;

    public $table = 'arts';

    protected $fillable = [
        'title',
        'caption',
        'description',
        'art',
        'tags',
        'dimension_id',
        'privacy_id',
        'art_channel_id',
        'user_id',
        // 'showcase_art_id',
    ];

    // public function showcase_arts() {
    //     return $this->belongsTo('App\Models\ShowcaseArt','showcase_art_id','id');
    // }

    public function showcase_arts() {
        return $this->hasMany('App\Models\ShowcaseArt','art_id','id');
    }

    public function comments() {
        return $this->hasMany('App\Models\Comment','art_id','id');
    }

    public function users() {
        return $this->belongsTo('App\Models\User','user_id','id');
    }
    
    public function privacies() {
        return $this->belongsTo('App\Models\Privacy','privacy_id','id');
    }

    public function artChannels() {
        return $this->belongsTo('App\Models\ArtChannel','art_channel_id','id');
    }

    public function dimensions() {
        return $this->belongsTo('App\Models\Dimension','dimension_id','id');
    }
}
