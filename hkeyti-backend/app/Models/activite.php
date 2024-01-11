<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class activite extends Model
{
    use HasFactory;
    protected $table = "activites";
    public $timestamps = false;
    protected $fillable = [
        'type'
    ];
}
