<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    use HasFactory;

    protected $fillable = [
        'comment',
        'is_edited',
        'user_id',
        'art_id',
    ];

    public function users() {
        return $this->belongsTo('App\Models\User','user_id','id');
    }

    public function arts() {
        return $this->belongsTo('App\Models\Art','art_id','id');
    }
}
