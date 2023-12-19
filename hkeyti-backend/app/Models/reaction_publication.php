<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class reaction_publication extends Model
{
    use HasFactory;
    protected $table = "reaction_publications";
    protected $fillable = [
        'type',
        'auteur',
        'publication'
    ];
}
