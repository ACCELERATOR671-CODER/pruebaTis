<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class GrupoEmpresa extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('Grupo_Empresa', function(Blueprint $table){
            $table->id('idGE')->autoIncrement();
            $table->string('nombre');
            $table->string('nombreAb');
            $table->string('logo');
            $table->date('fecha_creacion');
            $table->date('fecha_registro');
            $table->string('direccion');
            $table->string("descripcion");
            $table->string("email");
            $table->integer('telefono');
            $table->string('orgJur');
            $table->integer('duenio');
            $table->boolean('valido')->default(false);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('Grupo_Empresa');
    }
}
