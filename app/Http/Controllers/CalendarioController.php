<?php

namespace App\Http\Controllers;

use App\Models\Evento;
use App\Models\Option;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CalendarioController extends Controller
{
    public function agregarEvento(Request $request){
        if ($request->fecha_inicio <= $request->fecha_final) {
            $calendario = DB::table('Calendario')
                            ->where('idGE','=',$request->idGE)
                            ->first();
            $evento = new Evento();
            $evento->idCalendario = $calendario->idCalendario;
            $evento->nombre = $request->nombre;
            $evento->fecha_creacion = date("Y-m-d");
            $evento->fecha_inicio = $request->fecha_inicio;
            $evento->fecha_final = $request->fecha_final;
    
            $evento->save();
    
            return response(200);
        } else {
            return response('',201); 
        }
    }

    public function obtenerEventos(Request $request){
        $calendario = DB::table('Calendario')
                        ->where('idGE','=',$request->idGE)
                        ->first();
        $eventos = DB::table('Evento')
                        ->select('*')
                        ->where('idCalendario','=',$calendario->idCalendario)
                        ->orderBy('fecha_inicio', 'ASC')
                        ->get();
        return response()->json($eventos);
    }

    public function editarEvento(Request $request){
        $evento = Evento::find($request->idEvento);
        $evento->fecha_inicio = $request->fecha_inicio;
        $evento->fecha_final = $request->fecha_final;
        $evento->nombre = $request->nombre;
        $evento->save();

        return response(200);
    }

    public function quitarEvento(Request $request){
        $evento = Evento::find($request->idEvento);
        $evento->delete();

        return response(200);
    }

    public function ObtenerOpocionesG(){
        $actividad = DB::table('Opcion')
                            ->where('tipoOpcion', '=', 'Actividad')
                            ->get();
        $recurso = DB::table('Opcion')
                            ->where('tipoOpcion', '=', 'Recurso')
                            ->get();
        $evaluacion = DB::table('Opcion')
                            ->where('tipoOpcion', '=', 'Evaluacion')
                            ->get();
        return response()->json([$actividad, $recurso, $evaluacion]);
    }

    public function obtenerCalendarioGeneral(){
        $calendario = DB::table('Calendario')
                            ->join('Evento', 'Evento.idCalendario' , '=' ,'Calendario.idCalendario')
                            ->where('Calendario.general', '=', true)
                            ->orderBy('fecha_final')
                            ->get();
        $calendarioG = $this->obtenerEventosG($calendario);
        return response()->json($calendarioG);
    }

    private function obtenerEventosG($fechas){
        $eventos = [];
        foreach($fechas as $fecha){
            $evento = DB::table('Opcion')
                            ->where('idEvento', '=', $fecha->idEvento)
                            ->get();
            $arrayFecha = (array) $fecha;
            $arrayFecha['eventos'] = $evento;
            array_push($eventos, (object) $arrayFecha);
        }

        return $eventos;
    }

    public function crearFechaG(Request $req){
        if(sizeof((array)$req->checkbox) < 1){
            return response()->json(['mensaje' => 'debes seleccionar al menos una opción de la lista']);
        } else {
            $evento = new Evento;

            $id = (Evento::max('idEvento'))+1;
            $evento->idEvento = $id;
            $evento->idCalendario = '999';
            $evento->fecha_creacion = date("Y-m-d");
            $evento->fecha_final = $req->fecha;

            $evento->save();
            foreach($req->checkbox as $checked){
                $option = Option::findOrFail($checked);
                $option->idEvento = $id;
                $option->save();
            }
    
            return response()->json(sizeof($req->checkbox));
        }
    }

    /*
        recibir todos los ids
    */
    public function dropDate(Request $req){
        $evento = Evento::findOrFail($req->idEvento);
        $opciones = json_decode($req->idOpcion);
        foreach($opciones as $opcion){
            $option = Option::findOrFail($opcion->idOption);
            $option->idEvento = null;
            $option->save();
        }
        $evento->delete();

        return response()->json($opciones);
    }
}
