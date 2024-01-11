<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class membre extends Model
{
    use HasFactory;

    protected $table = "membres";
    public $timestamps = false;

    protected $fillable = [
        'nom',
        'prenom',
        'email',
        'image',
        'date_naissance',
        'genre',
        'mot_de_passe',
        'statut'
    ];
}
