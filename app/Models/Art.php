<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Art extends Model
{
    use HasFactory;

    protected $fillable = [
        'description',
        'art',
        'user_id',
        'post_id',
    ];

    public function posts() {
        return $this->hasMany('App\Models\Post','id');
    }

    public function users() {
        return $this->hasMany('App\Models\User','id');
    }
}
