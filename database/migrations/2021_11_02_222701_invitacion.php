<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Invitacion extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('Invitacion', function (Blueprint $table) {
            $table->bigIncrements('idInvitacion');
            $table->integer("idUsuario");
            $table->foreign('idUsuario')->references('idUsuario')->on('Usuario');
            $table->integer("idGE");
            $table->foreign('idGE')->references('idGE')->on('Grupo_Empresa');
            $table->string("estado")->default("Pendiente");       
            $table->boolean('invitacion');
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
