<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class GrupoTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        return DB::table('Grupo')->insert([
            [
                "idGrupo" => "1",
                "nomGrupo" => "Flores Villarroel Corina Justina"
            ],
            [
                "idGrupo" => "2",
                "nomGrupo" => "Blanco Coca Maria Leticia"
            ],
            [
                "idGrupo" => "3",
                "nomGrupo" => "Rodriguez Bilbao Erika Patricia"
            ]
        ]);
    }
}
