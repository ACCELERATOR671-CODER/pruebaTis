<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use App\Models\Notificacion;
use Illuminate\Http\Request;

class NotificacionController extends Controller
{
    public function crearNotificacion(Request $request)
    {
        $notificacion = new Notificacion();
        $notificacion->idUsuario = $request->idUsuario;
        $notificacion->descNotificacion = $request->descripcion;
        $notificacion->link = $request->link;
        $notificacion->fecha_creacion = date('Y-m-d H:i:s');
        $notificacion->tipoNotificacion = $request->tipo;
        $notificacion->save();
        return response(200);
    }

    public function actualizarNotificacion(Request $request)
    {
        $notificacion = Notificacion::find($request->idNotificacion);
        if(isset($request->idUsuario)){
            $notificacion->idUsuario = $request->idUsuario;
        }
        if(isset($request->descripcion)){
            $notificacion->descNotificacion = $request->descripcion;
        }
        if(isset($request->link)){
            $notificacion->link = $request->link;
        }
        if(isset($request->tipo)){
            $notificacion->tipoNotificacion = $request->tipo;
        }
        if(isset($request->visto)){
            $notificacion->visto = $request->visto;
        }
        $notificacion->save();

        return response(200);
    }

    public function eliminarNotificacion(Request $request)
    {
        $notificacion = Notificacion::find($request->idNotificacion);
        $notificacion->delete();

        return response(200);
    }

    /*
        idUsuario - id del usuario
    */
    public function obtenerNotificaciones(Request $req){
        $notificaciones = DB::table('notificacion')
                                ->where('idUsuario', '=', $req->idUsuario)
                                ->take(5)
                                ->orderBy('fecha_creacion', 'desc')
                                ->get();
        $cantidadSinLeer = DB::table('notificacion')
                                ->where('idUsuario', '=', $req->idUsuario)
                                ->where('visto', '=', false)
                                ->count('idNotificacion');
        return response()->json([$notificaciones, $cantidadSinLeer]);
    }
}
