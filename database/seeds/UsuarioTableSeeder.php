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
                "nombreC" => "Jorge Rocha",
                "email" => "201400001@est.umss.edu",
                "telefono" => null,
                "codSis" => "201400001",
                "foto_perfil" => null,
                "nombreUsuario" => null,
                "contrasenia" => null,
                "idCarrera" => "1",
                "idGrupo" => "1",
                "administrador" => "false",
                "idRol" => null,
                "registrado" => "false"
            ],[
                "idUsuario" => "2",
                "nombreC" => "Sebastian Mamani Soreta",
                "email" => "201400002@est.umss.edu",
                "telefono" => null,
                "codSis" => "201400002",
                "foto_perfil" => null,
                "nombreUsuario" => null,
                "contrasenia" => null,
                "idCarrera" => "1",
                "idGrupo" => "1",
                "administrador" => "false",
                "idRol" => null,
                "registrado" => "false"
            ],[
                "idUsuario" => "3",
                "nombreC" => "Belen Morales Choque",
                "email" => "201400003@est.umss.edu",
                "telefono" => null,
                "codSis" => "201400003",
                "foto_perfil" => null,
                "nombreUsuario" => null,
                "contrasenia" => null,
                "idCarrera" => "1",
                "idGrupo" => "1",
                "administrador" => "false",
                "idRol" => null,
                "registrado" => "false"
            ],[
                "idUsuario" => "4",
                "nombreC" => "Adrian Ricardo Crespo",
                "email" => "201400004@est.umss.edu",
                "telefono" => null,
                "codSis" => "201400004",
                "foto_perfil" => null,
                "nombreUsuario" => "adrian123",
                "contrasenia" => "Adrian123",
                "idCarrera" => "1",
                "idGrupo" => "1",
                "administrador" => "false",
                "idRol" => "1",
                "registrado" => "true"
            ],[
                "idUsuario" => "5",
                "nombreC" => "Carlos Cardenas Lopez",
                "email" => "201400005@est.umss.edu",
                "telefono" => null,
                "codSis" => "201400005",
                "foto_perfil" => null,
                "nombreUsuario" => null,
                "contrasenia" => null,
                "idCarrera" => "1",
                "idGrupo" => "1",
                "administrador" => "false",
                "idRol" => null,
                "registrado" => "false"
            ],
        ]);
    }
}
