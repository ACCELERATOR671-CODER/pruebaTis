<?php

namespace App\Http\Controllers;

use App\Models\Invitacion;
use Illuminate\Http\Request;
use App\Models\Usuario;
use Illuminate\Support\Facades\DB;

class PerfilUsuarioController extends Controller
{
    public function index($id){
        return view('perfilUsuario');
    }

    public function show($id)
    {
        $existeUsuario = DB::table('Usuario')->where('idUsuario',$id)->exists();
        if ($existeUsuario) {
            $usuario = Usuario::find($id);
            return view('perfilUsuario',['id' => $id, 'idGE' => $usuario->idGE]);
        } else {
            return view('404',['msg' => 'Usuario No Existe']);
        }
    }

    public function obtenerUsuario(Request $request) {
        $usuario = Usuario::find($request->id);
        $carrera = DB::table('Carrera')->select('nomCarrera')->where('idCarrera','=',$usuario->idCarrera)->first();
        $grupo = DB::table('Grupo')->select('nomGrupo')->where('idGrupo','=',$usuario->idGrupo)->first();
        $datos = [$usuario, $carrera, $grupo];
        return response()->json($datos);
    }

    public function obtenerUsuarios() {
        $usuarios = DB::table('Usuario')->get();
        return response()->json($usuarios);
    }

    public function obtenerInvitaciones(Request $request) {
        $invitaciones = DB::table('Invitacion')
                            ->join('Grupo_Empresa','Grupo_Empresa.idGE','=','Invitacion.idGE')
                            ->where('Invitacion.idUsuario','=',$request->id)
                            ->get();
        return response()->json($invitaciones);    
    }

    public function rechazarInvitacion(Request $request)
    {
        $inv = Invitacion::findOrFail($request->idInv);
        $inv->estado = "Rechazado";
        $inv->save();
        return response(200);
    }

    public function aceptarInvitacion(Request $request)
    {
        $inv = Invitacion::findOrFail($request->idInv);
        $usuario = Usuario::find($inv->idUsuario);
        $usuario->idGE = $inv->idGE;
        $invitaciones = Invitacion::where('idUsuario','=',$usuario->idUsuario)->get();

        foreach($invitaciones as $invitacion){
            if ($invitacion->invitacion) {
                $invitacion->estado = 'Rechazado';
                $invitacion->save();
            } else {
                $invitacion->delete();
            }
        }

        $inv->delete();
        $usuario->save();

        return  response(200);
    }
}
