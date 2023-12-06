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
        Schema::create('reaction_publications', function (Blueprint $table) {
            $table->id();
            $table->string('type');
            $table->unsignedBigInteger('auteur');
            $table->foreign('auteur')->references('id')->on('membre');
            $table->unsignedBigInteger('publication');
            $table->foreign('publication')->references('id')->on('publication');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('reaction_publications');
    }
};
