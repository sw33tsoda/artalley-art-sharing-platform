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

    public function posts() {
        return $this->belongsTo('App\Models\Post','art_channel_id');
    }
}
