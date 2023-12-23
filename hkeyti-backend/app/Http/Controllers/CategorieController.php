<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\categorie;

class CategorieController extends Controller
{
    public function getAll()
    {
        $categories = Categorie::all();
        return response()->json($categories, 200);
    }   
}
