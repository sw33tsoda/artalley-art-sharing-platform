<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Dimension extends Model
{
    use HasFactory;

    protected $fillable = [
        'dimensional',
    ];

    public function arts() {
        return $this->hasMany('App\Models\Art','dimension_id','id');
    }
}
