<?php

namespace App\Http\Controllers;
use App\Models\Publication;

use Illuminate\Http\Request;

class PublicationController extends Controller
{
    public function getAll()
    {
        $publications = Publication::all();
        return response()->json($publications, 200);
    }

    public function get_all_by_category($category_id)
    {
        $publications = Publication::where('categorie', $category_id)->get();
        return response()->json($publications, 200);
    }
}
