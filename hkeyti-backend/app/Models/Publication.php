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

    // fonction pour indiquer a laravel qu'il s'agit d'une clé étrangere
    // Pour récupérer la publication parente de cet objet on fait: $publication->parent
    public function parent()
    {
        return $this->belongsTo(self::class, 'parent');
    }

    public function auteur()
    {
        return $this->belongsTo(Membre::class, 'auteur');
    }

    public function categorie()
    {
        return $this->belongsTo(Categorie::class, 'categorie');
    }
}
