<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Usuario extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('Usuario', function(Blueprint $table){
            $table->id('idUsuario')->autoIncrement();
            $table->Integer('idGE')->nullable();
            $table->foreign('idGE')->references('idGE')->on('Grupo_Empresa');
            $table->string('nombreC');
            $table->string('email');
            $table->integer('telefono')->nullable();
            $table->string('codSis');
            $table->string('foto_perfil')->nullable();
            $table->string('nombreUsuario')->nullable();
            $table->string('contrasenia')->nullable();
            $table->boolean('administrador')->default(false);
            $table->Integer('idCarrera')->nullable();
            $table->foreign('idCarrera')->references('idCarrera')->on('Carrera');
            $table->Integer('idGrupo');
            $table->foreign('idGrupo')->references('idGrupo')->on('Grupo');
            $table->boolean('registrado')->default(false);
            $table->integer('idRol')->nullable();
            $table->foreign('idRol')->references('idRol')->on('Rol');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('Usuario');
    }
}
