<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateNotificacionTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('notificacion', function (Blueprint $table) {
            $table->id('idNotificacion')->autoIncrement();
            $table->integer('idUsuario');
            $table->foreign('idUsuario')->references('idUsuario')->on('Usuario');
            $table->string('descNotificacion')->nullable();
            $table->string('link')->nullable();
            $table->string('tipoNotificacion')->nullable();
            $table->boolean('visto')->default(false);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('notificacion');
    }
}
