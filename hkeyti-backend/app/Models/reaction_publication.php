<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class reaction_publication extends Model
{
    use HasFactory;
    protected $table = "reaction_publications";
    public $timestamps = false;
    protected $fillable = [
        'type',
        'auteur',
        'publication'
    ];

    public function auteur()
    {
        return $this->belongsTo(membre::class, 'auteur');
    }

    public function publication()
    {
        return $this->belongsTo(Publication::class, 'publication');
    }
}
