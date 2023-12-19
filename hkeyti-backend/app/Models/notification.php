<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class notification extends Model
{
    use HasFactory;
    protected $table = "notifications";
    protected $fillable = [
        'titre',
        'contenu',
        'type',
        'objet',
        'membre'
    ];

    public function objet()
    {
        return $this->belongsTo(Publication::class, 'objet');
    }

    public function membre()
    {
        return $this->belongsTo(membre::class, 'membre');
    }
}
