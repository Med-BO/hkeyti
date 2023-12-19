<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class appliquer_etiquette extends Model
{
    use HasFactory;
    protected $table="appliquer_etiquettes";
    protected $fillable = [
        'publication',
        'etiquette',
    ];

    public function publication()
    {
        return $this->belongsTo(Publication::class, 'publication');
    }

    public function etiquette()
    {
        return $this->belongsTo(etiquette::class, 'etiquette');
    }
}
