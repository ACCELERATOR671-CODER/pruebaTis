<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CarreraTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        return DB::table('Carrera')->insert([
            [
                "idCarrera" => "134111",
                "nomCarrera" => "Ing. Informatica"
            ],
            [
                "idCarrera" => "411702",
                "nomCarrera" => "Ing. de Sistemas"
            ]
        ]);
    }
}
