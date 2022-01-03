<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UsuarioTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        return DB::table('Usuario')->insert([
            [
                "idUsuario" => "1",
                "nombreC" => "Administrador",
                "email" => "201400001@est.umss.edu",
                "telefono" => null,
                "codSis" => "201400001",
                "foto_perfil" => null,
                "nombreUsuario" => "admin1",
                "contrasenia" => "Admin1",
                "idCarrera" => "134111",
                "idGrupo" => "1",
                "administrador" => "true",
                "idRol" => 1,
                "registrado" => "false"
            ],[
                "idUsuario" => "2",
                "nombreC" => "Administrador",
                "email" => "201400002@est.umss.edu",
                "telefono" => null,
                "codSis" => "201400002",
                "foto_perfil" => null,
                "nombreUsuario" => "admin2",
                "contrasenia" => "Admin2",
                "idCarrera" => "134111",
                "idGrupo" => "1",
                "administrador" => "true",
                "idRol" => 1,
                "registrado" => "false"
            ],
            [
                "idUsuario" => "3",
                "nombreC" => "Administrador",
                "email" => "201400003@est.umss.edu",
                "telefono" => null,
                "codSis" => "201400003",
                "foto_perfil" => null,
                "nombreUsuario" => "admin3",
                "contrasenia" => "Admin3",
                "idCarrera" => "134111",
                "idGrupo" => "1",
                "administrador" => "true",
                "idRol" => 1,
                "registrado" => "false"
            ],
            [
                "idUsuario" => "6",
                "nombreC" => "Administrador",
                "email" => "201400006@est.umss.edu",
                "telefono" => null,
                "codSis" => "201400006",
                "foto_perfil" => null,
                "nombreUsuario" => "admin123",
                "contrasenia" => "Admin123",
                "idCarrera" => "134111",
                "idGrupo" => "1",
                "administrador" => "true",
                "idRol" => 1,
                "registrado" => "false"
            ],[
                "idUsuario" => "7",
                "nombreC" => "Corina Flores",
                "email" => "201400007@est.umss.edu",
                "telefono" => null,
                "codSis" => "201400007",
                "foto_perfil" => null,
                "nombreUsuario" => "corina123",
                "contrasenia" => "Corina123",
                "idCarrera" => null,
                "idGrupo" => "1",
                "administrador" => "false",
                "idRol" => 2,
                "registrado" => "true"
            ],[
                "idUsuario" => "8",
                "nombreC" => "Leticia Coca",
                "email" => "201400008@est.umss.edu",
                "telefono" => null,
                "codSis" => "201400008",
                "foto_perfil" => null,
                "nombreUsuario" => "leti123",
                "contrasenia" => "Leti123",
                "idCarrera" => null,
                "idGrupo" => "2",
                "administrador" => "false",
                "idRol" => 2,
                "registrado" => "true"
            ],[
                "idUsuario" => "9",
                "nombreC" => "David Escalera",
                "email" => "201400009@est.umss.edu",
                "telefono" => null,
                "codSis" => "201400009",
                "foto_perfil" => null,
                "nombreUsuario" => "david123",
                "contrasenia" => "David123",
                "idCarrera" => null,
                "idGrupo" => "3",
                "administrador" => "false",
                "idRol" => 2,
                "registrado" => "true"
            ],[
                "idUsuario" => "10",
                "nombreC" => "Erika Bilbao",
                "email" => "201400010@est.umss.edu",
                "telefono" => null,
                "codSis" => "201400010",
                "foto_perfil" => null,
                "nombreUsuario" => "erika123",
                "contrasenia" => "Erika123",
                "idCarrera" => null,
                "idGrupo" => "4",
                "administrador" => "false",
                "idRol" => 2,
                "registrado" => "true"
            ]
        ]);
    }
}
