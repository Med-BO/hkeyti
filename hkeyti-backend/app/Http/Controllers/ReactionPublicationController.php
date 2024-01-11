<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\reaction_publication;

class ReactionPublicationController extends Controller
{
    public function add_publication_reaction(Request $request)
    {
        $reaction = new reaction_publication();
        $reaction->publication = $request->publication;
        $reaction->auteur = $request->auteur;
        $reaction->type = $request->type_reaction;
        $reaction->save();
        return response()->json($reaction, 200);
    }

    public function update_publication_reaction(Request $request)
    {
        $reaction = reaction_publication::where(['auteur'=> $request->auteur, 'publication'=> $request->publication])->first();
        $reaction->type = $request->type_reaction;
        $reaction->save();
        return response()->json($reaction, 200);
    }
}
