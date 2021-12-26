<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Opciones extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('Opcion', function(Blueprint $table){
            $table->id('idOption')->autoIncrement();
            $table->string('tipoOpcion');
            $table->string('nombreOpcion');
            $table->integer('idEvento')->nullable();
            $table->foreign('idEvento')->references('idEvento')->on('Evento');
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
