<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;


class Descripcion extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        return DB::table('tablon')->insert([
            [
                "idEspAse" => "1",
                "descripcion" => ""
            ]
        ]);
    }
}
