<?php

namespace App\Http\Controllers;

use App\Models\GrupoEmpresa;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class NavegadorController extends Controller
{
    /*
        id -> usuario solicitante
    */
    public function elegirNavegador(Request $req){
        $usuario = DB::table('Usuario') 
                    ->join('Rol', 'Usuario.idRol', '=', 'Rol.idRol')
                    ->where('Usuario.idUsuario','=',$req->id)
                    ->first();
        if(isset($usuario->idUsuario)){
            if($usuario->nombreRol == 'Estudiante'){
                if(isset($usuario->idGE)){
                    $ge = GrupoEmpresa::find($usuario->idGE);
                    if($ge->valido){
                        return response()->json(['navegador' => 'CGEV']);
                    } else {
                        return response()->json(['navegador' => 'CGE']);
                    }
                } else {
                    return response()->json(['navegador' => 'SGE']);
                }
            } else if($usuario->nombreRol  == 'Consultor'){
                return response()->json(['navegador' => 'C']);
            } else if($usuario->nombreRol == 'Administrador'){
                return response()->json(['navegador' => 'A']);
            } else {
                return response()->json(["mensaje" => "el usuario no tiene Rol"]);
            }
        } else {
            return response()->json(["mensaje" => "el usuario no existe"]);
        }    
    }
}
