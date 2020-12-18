<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Showcase extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'subheading',
        'description',
        'user_id',
        'privacy_id',
        'art_channel_id',
    ];

    public function users() {
        return $this->belongsTo('App\Models\User','user_id','id');
    }

    public function art_channels() {
        return $this->belongsTo('App\Models\ArtChannel','art_channel_id','id');
    }

    public function showcase_arts() {
        return $this->hasMany('App\Models\ShowcaseArt','showcase_id','id');
    }

}
