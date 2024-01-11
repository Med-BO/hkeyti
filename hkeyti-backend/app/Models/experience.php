<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class experience extends Model
{
    use HasFactory;
    protected $table = "experiences";
    public $timestamps = false;

    protected $fillable = [
        'titre',
        'contenu',
        'image',
        'estAnonyme',
        'date_creation',
        'auteur',
        'categorie'
    ];

    public function auteur()
    {
        return $this->belongsTo(membre::class, 'auteur');
    }

    public function categorie()
    {
        return $this->belongsTo(categorie::class, 'categorie');
    }
}
