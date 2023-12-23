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
}
