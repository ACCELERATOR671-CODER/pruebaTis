<?php


namespace App\Http\Controllers;

use App\Models\Elemento;
use App\Models\GrupoEmpresa;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Usuario;
use App\Models\Calendario;
use Error;
use Illuminate\Support\Facades\File;
use Monolog\ErrorHandler;

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
            ->where('Grupo_Empresa.valido', '=', false)
            ->where('Usuario.idGrupo', '=', $grupo->idGrupo)
            ->get();
        $res = [];
        foreach ($dat as $dat) {
            $integrantes = DB::table('Usuario')
                ->join('Grupo_Empresa', 'Usuario.idGE', '=', 'Grupo_Empresa.idGE')
                ->where('Usuario.idGE', '=', $dat->idGE)
                ->count();
            $val2 = (array)$dat;
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
                'Grupo_Empresa.valido',
                'Grupo_Empresa.duenio',

            )
            ->where('Usuario.idGrupo', '=', $grupo->idGrupo)
            ->where('Grupo_Empresa.valido', '=', 'true')
            ->get();
        $res = [];
        foreach ($dat as $dat) {
            $integrantes = DB::table('Usuario')
                ->join('Grupo_Empresa', 'Usuario.idGE', '=', 'Grupo_Empresa.idGE')
                ->where('Usuario.idGE', '=', $dat->idGE)
                ->count();
            $val2 = (array)$dat;
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

        /*$db = DB::table('Usuario')
                    ->
                    ->where('idGrupo', '=', $grupo->idGrupo)
                    ->whereNotNull('idGE')
                    ->get();*/

        $dat = DB::table('Grupo_Empresa')
            ->join('Usuario', 'Usuario.idUsuario', '=', 'Grupo_Empresa.duenio')
            ->where('Grupo_Empresa.valido', '=', false)
            ->where('Usuario.idGrupo', '=', $grupo->idGrupo)
            ->get();

        foreach ($dat as $dat) {
            $integrantes = DB::table('Usuario')
                ->join('Grupo_Empresa', 'Usuario.idGE', '=', 'Grupo_Empresa.idGE')
                ->where('Usuario.idGE', '=', $dat->idGE)
                ->count();

            $fecha = DB::table('Opcion')
                ->join('Evento', 'Opcion.idEvento', '=', 'Evento.idEvento')
                ->where('Opcion.nombreOpcion', '=', 'Creación de espacios de trabajo por equipos')
                ->first();
            $ge = GrupoEmpresa::find($dat->idGE);
            if ($integrantes >= 3 /*&& $fecha->fecha_final >= $dat->fecha_registro*/) {

                $ge->valido = true;
                $ge->save();

                $elemento = new Elemento;
                $elemento->nombre = "Propuestas";
                $elemento->tipo = "carpeta";
                $elemento->link = "#";
                $elemento->idGE = $ge->idGE;
                $elemento->revisado = 'true';
                $elemento->save();

                $elemento2 = new Elemento;
                $elemento2->nombre = "Avances";
                $elemento2->tipo = "carpeta";
                $elemento2->link = "#";
                $elemento2->idGE = $ge->idGE;
                $elemento2->revisado = 'true';
                $elemento2->save();

                $elemento3 = new Elemento;
                $elemento3->nombre = "Socios";
                $elemento3->tipo = "carpeta";
                $elemento3->link = "#";
                $elemento3->idGE = $ge->idGE;
                $elemento3->revisado = 'true';
                $elemento3->save();

                $int = DB::table('Usuario')
                    ->where('idGE', '=', $ge->idGE)
                    ->get();


                foreach ($int as $integrante) {
                    $not = new NotificacionController;
                    $request = new Request();
                    $request->idUsuario = $integrante->idUsuario;
                    $request->descripcion = 'Se ha marcado tu grupo empresa como Válida, ahora puedes acceder al espacio de asesoramiento';
                    $request->link = 'Esp-de-Asesoramiento-' . $ge->nombre;
                    $request->tipo = 'ge';
                    $not->crearNotificacion($request);
                }
            } else {
                $Users = DB::table('Usuario')
                    ->join('Grupo_Empresa', 'Usuario.idGE', '=', 'Grupo_Empresa.idGE')
                    ->where('Usuario.idGE', '=', $dat->idGE)
                    ->get();
                foreach ($Users as $usuario) {
                    $us = Usuario::findOrFail($usuario->idUsuario);
                    $us->idGE = null;
                    $us->save();
                }
                $cal = DB::table('Calendario')
                    ->where('idGE', '=', $ge->idGE)
                    ->first();

                $calend = Calendario::findOrFail($cal->idCalendario);
                $calend->delete();

                File::delete('resources/' . $ge->logo);
                $ge->delete();
            }
        }
        return view('vistaGEValida');
    }
    function validarGrupoEmpresa(Request $req)
    {
        $dat = DB::table('Grupo_Empresa')
            ->join('Usuario', 'Usuario.idUsuario', '=', 'Grupo_Empresa.duenio')
            ->where('idUsuario', '=', $req->id)
            ->first();

        $ge = GrupoEmpresa::find($dat->idGE);
        if ($ge->valido == false) {
            $integrantes = DB::table('Usuario')
                ->join('Grupo_Empresa', 'Usuario.idGE', '=', 'Grupo_Empresa.idGE')
                ->where('Usuario.idGE', '=', $dat->idGE)
                ->count();
            if ($integrantes >= 3 && $integrantes <= 6) {
                $ge->valido = true;
                $ge->save();
                $elemento = new Elemento;
                $elemento->nombre = "Propuestas";
                $elemento->tipo = "carpeta";
                $elemento->link = "#";
                $elemento->idGE = $ge->idGE;
                $elemento->revisado = 'true';
                $elemento->save();

                $elemento2 = new Elemento;
                $elemento2->nombre = "Avances";
                $elemento2->tipo = "carpeta";
                $elemento2->link = "#";
                $elemento2->idGE = $ge->idGE;
                $elemento2->revisado = 'true';
                $elemento2->save();

                $elemento3 = new Elemento;
                $elemento3->nombre = "Socios";
                $elemento3->tipo = "carpeta";
                $elemento3->link = "#";
                $elemento3->idGE = $ge->idGE;
                $elemento3->revisado = 'true';
                $elemento3->save();
            } else {
                return response('', 204);
            }
        } else {
            $ge->valido = false;
            $ge->save();
            $carpetasGE = DB::table('Elemento')
                ->where('Elemento.idGE', '=', $ge->idGE)
                ->get();
            foreach ($carpetasGE as $c) {
                $carpeta = Elemento::findOrFail($c->idElemento);
                $carpeta->delete();
            }
        }
        $int = DB::table('Usuario')
            ->where('idGE', '=', $ge->idGE)
            ->get();

        foreach ($int as $integrante) {
            $not = new NotificacionController;
            $request = new Request();
            $request->idUsuario = $integrante->idUsuario;
            if ($ge->valido == true) {
                $request->descripcion = 'Se ha marcado tu grupo empresa como Válida, ahora puedes acceder al espacio de asesoramiento';
                $request->link = 'Esp-de-Asesoramiento-' . $ge->nombre;
            } else {
                $request->descripcion = 'Se ha marcado tu grupo empresa como No Válida, tu espacio de asesoramiento fue removido';
            }
            $request->tipo = 'ge';
            $not->crearNotificacion($request);
        }
        if ($ge->valido == true) {
            return response('', 200);
        } else {
            return response('', 201);
        }
    }

    function puedeValidarGE(Request $req)
    {
        $db = DB::table('Opcion')
            ->join('Evento', 'Evento.idEvento', '=', 'Opcion.idEvento')
            ->where('Opcion.nombreOpcion', '=', "Entrega de propuestas")
            ->first();
        if ($db) {
            $fecha_actual = strtotime(date("Y-m-d", time()));
            $fecha_entrada = strtotime($db->fecha_final);
            error_log($fecha_actual);
            error_log($fecha_entrada);
            error_log((int)$fecha_actual >= (int)$fecha_entrada);
            if ((int)$fecha_actual >= (int)$fecha_entrada) {
                return response('', 201);
            }
        }
    }

    function establecerBotonValidar(Request $req)
    {
        $dat = DB::table('Grupo_Empresa')
            ->join('Usuario', 'Usuario.idUsuario', '=', 'Grupo_Empresa.duenio')
            ->where('idUsuario', '=', $req->id)
            ->first();
        $ge = GrupoEmpresa::find($dat->idGE);
        if ($ge) {
            if ($ge->valido == false) {
                return response('', 201);
            }
        }
    }


    public function obtenerEvento()
    {
        $calendario = DB::table('Calendario')
            ->join('Evento', 'Evento.idCalendario', '=', 'Calendario.idCalendario')
            ->where('Calendario.general', '=', true)
            ->orderBy('fecha_final')
            ->get();
        $calendarioG = $this->obtenerEventosG($calendario);
        return response()->json($calendarioG);
    }
}
