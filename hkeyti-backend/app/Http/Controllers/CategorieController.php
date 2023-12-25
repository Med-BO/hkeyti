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

    public function get_category_by_id($id)
    {
        $categorie = Categorie::find($id);
        if (is_null($categorie)) {
            return response()->json(['message' => 'Categorie Not Found'], 404);
        }
        return response()->json($categorie, 200);
    }
}
