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
        Schema::create('experiences', function (Blueprint $table) {
            $table->id();
            $table->string('titre', 100);
            $table->text('contenu');
            $table->string('image');
            $table->boolean('estAnonyme');
            $table->date('date_creation');
            $table->unsignedBigInteger('auteur');
            $table->foreign('auteur')->references('id')->on('membre');
            $table->unsignedBigInteger('categorie');
            $table->foreign('categorie')->references('id')->on('categorie');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('experiences');
    }
};
