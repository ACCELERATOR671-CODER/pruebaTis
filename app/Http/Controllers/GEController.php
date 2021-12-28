<?php


namespace App\Http\Controllers;

use App\Models\Elemento;
use App\Models\GrupoEmpresa;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class GEController extends Controller
{
    public function viewGEValida()
    {
        return view('vistaGEValida');
    }
    public function viewValidarGE()
    {
        return view('vistaValidarGE');
    }
    public function obtenerGrupoEmpresa(Request $req)
    {
        $debate = DB::table('GrupoEmpresa')
            ->select('foto_perfil', 'titulo', 'idDebate', 'nombreC', 'descripcion', 'fecha_creacion')
            ->join('Usuario', 'Usuario.idUsuario', '=', 'Debate.duenio')
            ->where('Debate.idDebate', '=', $req->idDebate)
            ->first();
        return response()->json($debate);
    }

    function obtenerTodasGrupoEmpresas(Request $req)
    {
        $grupo = DB::table('Usuario')
            ->select('Usuario.idGrupo')
            ->where('idUsuario', '=', $req->id)
            ->first();
        $dat = DB::table('Grupo_Empresa')
            ->join('Usuario', 'Usuario.idUsuario', '=', 'Grupo_Empresa.duenio')
            ->select(
                'Grupo_Empresa.idGE',
                'Grupo_Empresa.nombre',
                'Grupo_Empresa.nombreAb',
                'Grupo_Empresa.valido'
            )
            ->where('Usuario.idGrupo', '=', $grupo->idGrupo)
            ->get();
        $res = [];
        foreach ($dat as $value) {
            $integrantes = DB::table('Usuario')
                ->join('Grupo_Empresa', 'Usuario.idGE', '=', 'Grupo_Empresa.duenio')
                ->where('Usuario.idGE', '=', $value->idGE)
                ->count();
            $val2 = (array)$value;
            $val2['integrantes'] = $integrantes;
            array_push($res, $val2);
        }
        return response()->json($res);
    }

    function obtenerGrupoEmpresasValidas(Request $req)
    {
        $grupo = DB::table('Usuario')
            ->select('Usuario.idGrupo')
            ->where('idUsuario', '=', $req->id)
            ->first();
        $dat = DB::table('Grupo_Empresa')
            ->join('Usuario', 'Usuario.idUsuario', '=', 'Grupo_Empresa.duenio')
            ->select(
                'Grupo_Empresa.idGE',
                'Grupo_Empresa.nombre',
                'Grupo_Empresa.nombreAb',
                'Grupo_Empresa.valido'
            )
            ->where('Usuario.idGrupo', '=', $grupo->idGrupo)
            ->where('Grupo_Empresa.valido', '=', 'true')
            ->get();
        $res = [];
        foreach ($dat as $value) {
            $integrantes = DB::table('Usuario')
                ->join('Grupo_Empresa', 'Usuario.idGE', '=', 'Grupo_Empresa.duenio')
                ->where('Usuario.idGE', '=', $value->idGE)
                ->count();
            $val2 = (array)$value;
            $val2['integrantes'] = $integrantes;
            array_push($res, $val2);
        }
        return response()->json($res);
    }

    function validarGrupoEmpresas(Request $req)
    {
        $grupo = DB::table('Usuario')
            ->select('Usuario.idGrupo')
            ->where('idUsuario', '=', $req->id)
            ->first();
        $dat = DB::table('Grupo_Empresa')
            ->join('Usuario', 'Usuario.idUsuario', '=', 'Grupo_Empresa.duenio')
            ->where('Usuario.idGrupo', '=', $grupo->idGrupo)
            ->where('Grupo_Empresa.valido', '=', 'false')
            ->get();

        foreach ($dat as $value) {
            $integrantes = DB::table('Usuario')
                ->join('Grupo_Empresa', 'Usuario.idGE', '=', 'Grupo_Empresa.duenio')
                ->where('Usuario.idGE', '=', $value->idGE)
                ->count();

            $fecha = DB::table('Opcion')
                ->join('Evento', 'Opcion.idEvento', '=', 'Evento.idEvento')
                ->where('Opcion.nombreOpcion','=','Creación de espacios de trabajo por equipos')
                ->first();

            if ($integrantes > 2 && $fecha->fecha_final >= $value->fecha_registro) {

                $ge = GrupoEmpresa::find($value->idGE);
                $ge->valido = true;
                $ge->save();

                $elemento = new Elemento;
                $elemento->nombre = "Propuestas";
                $elemento->tipo = "carpeta";
                $elemento->link = "#";
                $elemento->idGE = $ge->idGE;
                $elemento->revisado = true;
                $elemento->save();

                $elemento2 = new Elemento;
                $elemento2->nombre = "Avances";
                $elemento2->tipo = "carpeta";
                $elemento2->link = "#";
                $elemento2->idGE = $ge->idGE;
                $elemento2->revisado = true;
                $elemento2->save();

                $elemento3 = new Elemento;
                $elemento3->nombre = "Socios";
                $elemento3->tipo = "carpeta";
                $elemento3->link = "#";
                $elemento3->idGE = $ge->idGE;
                $elemento3->revisado = true;
                $elemento3->save();
            } else {
                $Users = DB::table('Usuario')
                    ->join('Grupo_Empresa', 'Usuario.idGE', '=', 'Grupo_Empresa.duenio')
                    ->where('Usuario.idGE', '=', $value->idGE);
                foreach ($Users as $usuario) {
                    $usuario->idGE = null;
                    $usuario->save();
                }

                $ge = GrupoEmpresa::find($value->idGE);
                $ge->delete();
            }
        }
        return view('vistaGEValida');
    }
}
