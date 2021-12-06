<?php

namespace App\Http\Controllers;

use App\Models\Calendario;
use App\Models\Evento;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CalendarioController extends Controller
{
    public function agregarEvento(Request $request){
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
    }

    public function obtenerEventos(Request $request){
        $calendario = DB::table('Calendario')
                        ->where('idGE','=',$request->idGE)
                        ->first();
        error_log("p1");
        $eventos = DB::table('Evento')
                        ->select('*')
                        ->where('idCalendario','=',$calendario->idCalendario)
                        ->orderBy('fecha_inicio', 'ASC')
                        ->get();
        return response()->json($eventos);
    }
}
