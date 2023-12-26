<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('publications', function (Blueprint $table) {
            $table->id();
            $table->string('titre', 100);
            $table->text('contenu');
            $table->boolean('estAnonyme')->default(false);
            // clé étrangere
            $table->unsignedBigInteger('parent')->nullable();
            $table->foreign('parent')->references('id')->on('publications')->onDelete('cascade');
            // fin clé entragere
            $table->date('date_creation');
            $table->boolean('commentairesActive')->default(true);
            $table->unsignedBigInteger('auteur');
            $table->foreign('auteur')->references('id')->on('membres');
            $table->unsignedBigInteger('categorie');
            $table->foreign('categorie')->references('id')->on('categories');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('publications');
    }
};
