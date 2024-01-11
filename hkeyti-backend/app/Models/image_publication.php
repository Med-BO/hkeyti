<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class image_publication extends Model
{
    use HasFactory;
    protected $table = "image_publications";
    public $timestamps = false;
    protected $fillable = [
        'image',
        'publication',
    ];
    public function publication()
    {
        return $this->belongsTo(Publication::class, 'publication');
    }
}
