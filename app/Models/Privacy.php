<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Privacy extends Model
{
    use HasFactory;

    protected $fillable = [
        'allowed',
    ];

    public function arts() {
        return $this->hasMany('App\Models\Art','privacy_id','id');
    }

    public function showcases() {
        return $this->hasMany('App\Models\Showcase','privacy_id','id');
    }
}
