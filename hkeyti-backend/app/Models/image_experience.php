<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class image_experience extends Model
{
    use HasFactory;
    protected $table = "image_experiences";
    protected $fillable = [
        'image',
        'experience',
    ];
    public function experience()
    {
        return $this->belongsTo(experience::class, 'experience');
    }
}
