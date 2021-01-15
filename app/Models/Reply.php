<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reply extends Model
{
    use HasFactory;

    protected $fillable = [
        'reply',
        'is_edited',
        'user_id',
        'comment_id',
    ];

    public function users() {
        return $this->belongsTo('App\Models\User','user_id','id');
    }

    public function comments() {
        return $this->belongsTo('App\Models\Comment','comment_id','id');
    }
}
