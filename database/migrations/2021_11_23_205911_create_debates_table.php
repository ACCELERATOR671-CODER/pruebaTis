<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDebatesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return voidñ
     */
    public function up()
    {
        Schema::create('Debate', function (Blueprint $table) {
            $table->id('idDebate')->autoIncrement();
            $table->string('titulo');
            $table->integer('respuestas')->default(0);
            $table->string('descripcion', 1000);
            $table->integer('duenio');
            $table->dateTime('fecha_creacion');
            $table->foreign('duenio')->references('idUsuario')->on('Usuario');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('debates');
    }
}
