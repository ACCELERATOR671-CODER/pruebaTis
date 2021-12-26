<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CalendarioG extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        return DB::table('Calendario')->insert([
            [
                "idCalendario" => "999",
                "general" => true,
                "idGE" => null,
            ]
            ]);
    }
}
