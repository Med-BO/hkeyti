<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PublicationController;
use App\Http\Controllers\CategorieController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Group routes that start with /publications
Route::prefix("publications")->group(function () {
    Route::get("categories", "App\Http\Controllers\CategorieController@getAll");
    Route::get("categorie/{category_id}", "App\Http\Controllers\PublicationController@get_all_by_category");
});

Route::get("categorie/{category_id}", "App\Http\Controllers\CategorieController@get_category_by_id");