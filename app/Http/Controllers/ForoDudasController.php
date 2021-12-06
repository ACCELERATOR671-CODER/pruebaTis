<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Debate;
use Illuminate\Support\Facades\DB;
use App\Models\Mensaje;

class ForoDudasController extends Controller
{
    public function VistaForo(){
        return view('foro');
    }

    public function VistaDebate($id){
        return view('debate')->with(['id' => $id]);
    }

    /*
        id = dueño del que lo a creado
        titulo = titulo de el debate
        mensaje = descripcion del mensake
    */
    public function registrarDebate(Request $req){
        $deb = new Debate;
        $deb->duenio = $req->id;
        $deb->titulo = $req->titulo;
        $deb->descripcion = $req->mensaje;
        $deb->fecha_creacion = date('Y-m-d H:i:s');

        $deb->save();

        $debate = DB::table('Debate')
                        ->join('Usuario', 'Usuario.idUsuario', '=', 'Debate.duenio')
                        ->where('Debate.duenio', '=', $deb->duenio)
                        ->where('Debate.titulo', '=', $deb->titulo)
                        ->where('Debate.descripcion', '=', $deb->descripcion)
                        ->first();
        return response()->json($debate);
    }

    public function obtenerDebates(){
        $debates = DB::table('Debate')
                            ->select()
                            ->join('Usuario', 'Usuario.idUsuario' , '=' , 'Debate.duenio')
                            ->get();

        return response()->json($debates);
    }

    /*
        idDebate = el debate duenio de los mensajes
    */

    public function obtenerMensajes(Request $req){
        $mensajes = DB::table('Mensaje')
                            ->select('idMensaje', 
                                     'foto_perfil', 
                                     'nombreC' ,
                                     'mensaje as descripcion', 
                                     'fecha_creacion' )
                            ->join('Usuario', 'Usuario.idUsuario', '=', 'Mensaje.duenio')
                            ->where('idDebate' ,'=' , $req->idDebate)
                            ->get();

        return response()->json($mensajes);
    }

    /*
        idDebate1
    */

    public function obtenerDebate(Request $req){
        $debate = DB::table('Debate')
                        ->select('foto_perfil','titulo', 'idDebate', 'nombreC', 'descripcion', 'fecha_creacion')
                        ->join('Usuario', 'Usuario.idUsuario', '=', 'Debate.duenio')
                        ->where('Debate.idDebate', '=', $req->idDebate)
                        ->first();

        return response()->json($debate);
    }

    /*
        idUsuario = usuario que manda el mensaje
        idDebate = debate al cual petenece el mensaje
        descripcion = la descripcion del mensaje
    */

    public function registrarMensaje(Request $req){
        $mensaje = new Mensaje;
        
        $mensaje->idDebate = $req->idDebate;
        $mensaje->mensaje = $req->descripcion;
        $mensaje->fecha_creacion = date('Y-m-d H:i:s');
        $mensaje->duenio = $req->ìdUsuario;

        $mensaje->save();

        $resp = DB::table('Mensaje')
                        ->select('idMensaje', 
                        'foto_perfil', 
                        'nombreC' ,
                        'mensaje as descripcion', 
                        'fecha_creacion' )
                        ->join('Usuario', 'Usuario.idUsuario', '=', 'Mensaje.duenio')
                        ->where('idDebate', '=' , $mensaje->idDebate)
                        ->where('mensaje', '=',$mensaje->mensaje)
                        ->where('fecha_creacion', '=' , $mensaje->fecha_creacion)
                        ->where('duenio', '=', $mensaje->duenio)
                        ->first();

        return response()->json($resp);
    }
}
