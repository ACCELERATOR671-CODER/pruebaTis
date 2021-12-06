<?php

namespace App\Http\Controllers;

use App\Models\Usuario;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class VistaInscritosController extends Controller
{
    public function index()
    {
        return view('vistaInscritos');
    }

    public function getUsuariosMismoGrupo(Request $request){
        $usuario = Usuario::findOrFail($request->idUsuario);
        $usuarios = DB::table('Usuario')
                    ->leftjoin('Grupo_Empresa','Grupo_Empresa.idGE','=','Usuario.idGE')
                    ->where('Usuario.idGrupo','=',$usuario->idGrupo)
                    ->where('Usuario.registrado','=',true)
                    ->orderBy('Usuario.idUsuario','ASC')
                    ->get();
        return response()->json($usuarios);
    }
}
