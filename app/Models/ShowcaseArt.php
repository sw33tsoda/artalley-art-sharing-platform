<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ShowcaseArt extends Model
{
    use HasFactory;

    protected $table = 'showcase_arts';

    protected $fillable = [
        'art_id',
        'user_id',
        'showcase_id'
    ];

    public function arts() {
        return $this->belongsTo('App\Models\Art','art_id','id');
    }

    public function users() {
        return $this->belongsTo('App\Models\User','user_id','id');
    }

    public function showcases() {
        return $this->belongsTo('App\Models\Showcase','showcase_id','id');
    }
}
