<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class reaction_experience extends Model
{
    use HasFactory;
    protected $table = "reaction_experiences";
    public $timestamps = false;
    protected $fillable = [
        'type',
        'auteur',
        'experience'
    ];

    public function auteur()
    {
        return $this->belongsTo(membre::class, 'auteur');
    }

    public function experience()
    {
        return $this->belongsTo(Experience::class, 'experience');
    }
}
