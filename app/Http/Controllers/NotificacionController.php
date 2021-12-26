<?php

namespace App\Http\Controllers;

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
        $notificacion->tipoNotificacion = $request->tipo;
        $notificacion->save();
        return response(200);
    }

    public function actualizarNotificacion(Request $request)
    {
        $notificacion = Notificacion::find($request->idNotificacion);
        $notificacion->idUsuario = $request->idUsuario;
        $notificacion->descNotificacion = $request->descripcion;
        $notificacion->link = $request->link;
        $notificacion->tipoNotificacion = $request->tipo;
        $notificacion->save();

        return response(200);
    }

    public function eliminarNotificacion(Request $request)
    {
        $notificacion = Notificacion::find($request->idNotificacion);
        $notificacion->delete();

        return response(200);
    }
}
