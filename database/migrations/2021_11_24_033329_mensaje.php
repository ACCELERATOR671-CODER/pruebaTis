<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Mensaje extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
    //  */
    public function up()
    {
        Schema::create('Mensaje', function (Blueprint $table) {
            $table->id('idMensaje')->autoIncrement();
            $table->string('mensaje',1000);
            $table->dateTime('fecha_creacion');
            $table->integer('duenio');
            $table->foreign('duenio')->references('idUsuario')->on('Usuario');
            $table->integer('idDebate');
            $table->foreign('idDebate')->references('idDebate')->on('Debate');
            $table->integer('idMensajePadre')->nullable();
            $table->foreign('idMensajePadre')->references('idMensaje')->on('Mensaje');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
