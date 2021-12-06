<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFundaEmpresasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('funda_empresas', function (Blueprint $table) {
            $table->id('idFunda')->autoincrement();

            $table->string('nombreCorto');
            $table->string('nombreLargo');
            $table->string('gestion');
            $table->string('docente');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('funda_empresas');
    }
}
