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
        Schema::create('reaction_experiences', function (Blueprint $table) {
            $table->id();
            $table->string('type');
            $table->unsignedBigInteger('auteur');
            $table->foreign('auteur')->references('id')->on('membres');
            $table->unsignedBigInteger('experience');
            $table->foreign('experience')->references('id')->on('experiences');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('reaction_experiences');
    }
};
