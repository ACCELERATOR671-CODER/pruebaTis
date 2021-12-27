<?php

namespace App\Http\Controllers;

use App\Models\Elemento;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


class EspacioRevisionController extends Controller
{
    public function index_view()
    {
        return view('espacioRevision');
    }

    public function verificarConsultor(Request $request){
        $rolCons = DB::table('Rol')->where('nombreRol','=','Estudiante')->first();
        $usuario = DB::table('Usuario')
            ->select('*')
            ->where('idUsuario','=',$request->idUsuario)->first();
        if ($usuario->idRol == $rolCons->idRol) {
            return response()->json(['msg' => 'valido', 'grupoConsultor' => $usuario->idGrupo]);
        } else {
            return response()->json(['msg' => 'novalido']);
        }
    }

    public function cambiarRevisado(Request $request){
        $elemento = Elemento::find($request->idElemento);
        $elemento->revisado = true;
        $elemento->save();
        return response(200);
    }
}
