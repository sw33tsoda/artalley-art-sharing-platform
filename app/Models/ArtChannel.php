<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ArtChannel extends Model
{
    use HasFactory;

    protected $fillable = [
        'channel_slug',
        'channel_name',
        'thumbnail',
    ];

    public function showcases() {
        return $this->hasMany('App\Models\Showcase','art_channel_id','id');
    }

    public function arts() {
        return $this->hasMany('App\Models\Art','art_channel_id','id');
    }
}
