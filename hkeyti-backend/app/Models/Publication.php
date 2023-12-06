<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Publication extends Model
{
    use HasFactory;
    protected $table = "publications";

    protected $fillable = [
        'titre',
        'contenu',
        'image',
        'estAnonyme',
        'parent',
        'date_creation',
        'commentairesActive',
        'auteur',
        'categorie',
    ];

    // fonciton pour indiquer a laravel qu'il s'agit d'une clé étrangere
    public function parentPublication()
    {
        return $this->belongsTo(self::class, 'parent');
    }

    public function author()
    {
        return $this->belongsTo(Membre::class, 'auteur');
    }

    public function category()
    {
        return $this->belongsTo(Categorie::class, 'categorie');
    }

}
