<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RolSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        return DB::table('Rol')->insert([
            [
                "nombreRol" => "Administrador"
            ],
            [
                "nombreRol" => "Consultor"
            ],
            [
                "nombreRol" => "Estudiante"
            ]
        ]);
    }
}
