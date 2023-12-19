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
        Schema::create('appliquer_etiquettes', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('publication');
            $table->foreign('publication')->references('id')->on('publications');
            $table->unsignedBigInteger('etiquette');
            $table->foreign('etiquette')->references('id')->on('etiquettes');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('appliquer_etiquettes');
    }
};
