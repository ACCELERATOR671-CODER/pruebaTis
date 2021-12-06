<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Calendario extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('Calendario', function(Blueprint $table){
            $table->id('idCalendario')->autoIncrement();
            $table->Integer('idGE')->nullable();
            $table->foreign('idGE')->references('idGE')->on('Grupo_Empresa');
            $table->Integer('idTablon')->nullable();
            //$table->foreign('idTablon')->references('idEspAse')->on('Tablon');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('Calendario');
    }
}
