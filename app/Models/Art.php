<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

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
        'showcase_id',
    ];

    public function showcases() {
        return $this->belongsTo('App\Models\Showcase','showcase_id','id');
    }

    public function users() {
        return $this->belongsTo('App\Models\User','user_id','id');
    }

    public function artChannels() {
        return $this->belongsTo('App\Models\ArtChannel','art_channel_id','id');
    }

    public function dimensions() {
        return $this->belongsTo('App\Models\Dimension','dimension_id','id');
    }
}
