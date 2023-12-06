<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class etiquette extends Model
{
    use HasFactory;
    protected $table = "etiquettes";

    protected $fillable = [
        'titre',
        'description'
    ];
}
