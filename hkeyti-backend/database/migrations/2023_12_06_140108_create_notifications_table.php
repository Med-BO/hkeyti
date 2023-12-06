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
        Schema::create('notifications', function (Blueprint $table) {
            $table->id();
            $table->string('titre');
            $table->string('contenu');
            $table->string('type');
            $table->unsignedBigInteger('publication');
            $table->foreign('publication')->references('id')->on('objet');
            $table->unsignedBigInteger('membre');
            $table->foreign('membre')->references('id')->on('membre');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('notifications');
    }
};
