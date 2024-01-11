<?php

namespace App\Http\Controllers;

use App\Models\membre;
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
        foreach ($publications as $publication) {
            $publication->auteur = membre::find($publication->auteur);
            $comments = Publication::where('parent', $publication->id)->get();
            foreach ($comments as $comment) {
                $comment->auteur = membre::find($comment->auteur);
            }
            $publication->commentaires = $comments;
        }
        return response()->json($publications, 200);
    }

    public function add_post(Request $request)
    {
        $publication = new Publication();
        $publication->titre = $request->titre;
        $publication->contenu = $request->contenu;
        $publication->categorie = $request->categorie;
        $publication->auteur = $request->auteur;
        $publication->date_creation = date('Y-m-d H:i:s');
        if ($request->estAnonyme) {
            $publication->estAnonyme = true;
        }
        if ($request->parent) {
            $publication->parent = $request->parent;
        }
        $publication->save();
        return response()->json($publication, 200);
    }
}
