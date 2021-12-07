<?php


namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class GEController extends Controller
{
    public function viewGEValida()
    {
        return view('VistaGEValida');
    }
    public function viewValidarGE()
    {
        return view('VistaValidarGE');
    }
    public function obtenerGrupoEmpresa(Request $req){
        $debate = DB::table('GrupoEmpresa')
                        ->select('foto_perfil','titulo', 'idDebate', 'nombreC', 'descripcion', 'fecha_creacion')
                        ->join('Usuario', 'Usuario.idUsuario', '=', 'Debate.duenio')
                        ->where('Debate.idDebate', '=', $req->idDebate)
                        ->first();
        return response()->json($debate);
    }

    function obtenerTodasGrupoEmpresas(Request $req){
        $grupo = DB::table('Usuario')
            ->select('Usuario.idGrupo')
            ->where('idUsuario','=',$req->id)
            ->first();
        $dat = DB::table('Grupo_Empresa')
            ->join('Usuario', 'Usuario.idUsuario', '=','Grupo_Empresa.duenio')
            ->select('Grupo_Empresa.idGE',
                    'Grupo_Empresa.nombre',
                    'Grupo_Empresa.nombreAb',
                    'Grupo_Empresa.valido')
                    ->where('Usuario.idGrupo', '=', $grupo->idGrupo)
                    ->get();
        $res = [];
        foreach ($dat as $value){
            $integrantes = DB::table('Usuario')
                ->join('Grupo_Empresa', 'Usuario.idGE', '=', 'Grupo_Empresa.duenio')
                ->where('Usuario.idGE','=', $value->idGE)
                ->count();
            $val2 = (array)$value;
            $val2['integrantes'] = $integrantes;
            array_push($res, $val2);
        }
        return response()->json($res);
    }

    function obtenerGrupoEmpresasValidas(Request $req){
        $grupo = DB::table('Usuario')
            ->select('Usuario.idGrupo')
            ->where('idUsuario','=',$req->id)
            ->first();
        $dat = DB::table('Grupo_Empresa')
            ->join('Usuario', 'Usuario.idUsuario', '=','Grupo_Empresa.duenio')
            ->select('Grupo_Empresa.idGE',
                    'Grupo_Empresa.nombre',
                    'Grupo_Empresa.nombreAb',
                    'Grupo_Empresa.valido')
                    ->where('Usuario.idGrupo', '=', $grupo->idGrupo)
                    ->where('Grupo_Empresa.valido', '=', 'true')
                    ->get();
        $res = [];
        foreach ($dat as $value){
            $integrantes = DB::table('Usuario')
                ->join('Grupo_Empresa', 'Usuario.idGE', '=', 'Grupo_Empresa.duenio')
                ->where('Usuario.idGE','=', $value->idGE)
                ->count();
            $val2 = (array)$value;
            $val2['integrantes'] = $integrantes;
            array_push($res, $val2);
        }
        return response()->json($res);
    }
}
