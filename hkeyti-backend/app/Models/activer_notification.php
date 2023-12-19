<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class activier_notification extends Model
{
    use HasFactory;
    protected $table = "activer_notifications";
    protected $fillable = [
        'publication',
        'membre',
    ];
}
