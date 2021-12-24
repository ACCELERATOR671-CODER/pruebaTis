<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Evento extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('Evento', function(Blueprint $table){
            $table->id('idEvento')->autoIncrement();
            $table->date('fecha_creacion'); 
            $table->string('nombre')->nullable(); //lo usaremos como actividad
            $table->integer('idCalendario');
            $table->foreign('idCalendario')->references('idCalendario')->on('Calendario');
            $table->date('fecha_inicio')->nullable();
            $table->date('fecha_final');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('Evento');
    }
}
