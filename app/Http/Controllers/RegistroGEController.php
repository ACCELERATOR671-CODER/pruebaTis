<?php

namespace App\Http\Controllers;

use App\Models\GrupoEmpresa;
use App\Models\socio;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;
use NunoMaduro\Collision\Adapters\Phpunit\State;
use App\Models\Usuario;
use App\Models\Invitacion;

class RegistroGEController extends Controller
{
    function RegistrarGrupoEmpresa(Request $req){
        $grupoEmpresa = new GrupoEmpresa;

        $grupoEmpresa->nombre = $req->nombre;
        $grupoEmpresa->nombreAb = $req->nombreAb;
        $grupoEmpresa->fecha_registro = $req->fecha_registro;
        $grupoEmpresa->fecha_creacion = date("Y-m-d");
        $grupoEmpresa->direccion = $req->direccion;
        $grupoEmpresa->email = $req->email;
        $grupoEmpresa->telefono = $req->telefono;
        $grupoEmpresa->orgJur = $req->orgJur;
        $grupoEmpresa->descripcion = $req->descripcion;

        $file = $req->file('imagen');
        $nombre =  time()."_".$file->getClientOriginalName();
        $file->move('resources', $nombre);
        $grupoEmpresa->logo = $nombre;

        $id = DB::table('Session')->select('idUser')->where('token', '=', $req->token)->first();
        $grupoEmpresa->duenio = $id->idUser;

        $grupoEmpresa->save();

        
        $idge = DB::table('Grupo_Empresa')->select('idGE')->where('nombre', '=', $grupoEmpresa->nombre)->first();
        $us = Usuario::find($id->idUser);
        $us->idGE = $idge->idGE;
        $us->save();
        return response(20);
    }

    function verificarNombre(request $req){
        $response = DB::table('Grupo_Empresa')->select($req->campo)->where($req->campo,'=',$req->nombre)->first();

        return response()->json(($response) ? ['nombre' => 'false']:['nombre' => 'true']);
    }

    function vistaRegistroGE(){
        return view('registroGE');
    }

    function vistaGE($nombre) {
        $ge = DB::table('Grupo_Empresa')->where('nombre','=',$nombre)->first();
        if(!empty((array) $ge)){
            $datos = [
                'nombre' => $ge->nombre,
                'nombreAb' => $ge->nombreAb,
                'logo' => $ge->logo,
                'fecha_creacion' => $ge->fecha_creacion,
                'direccion' => $ge->direccion,
                'descripcion' => $ge->descripcion,
                'email' => $ge->email,
                'telefono' => $ge->telefono,
                'orgJur' => $ge->orgJur,
                'duenio' => $ge->duenio
            ];
            return view('vistaGE')->with($datos);
        }
        return view('login')->with(['msg' => $nombre]);
    }

    function obtenerSocios(Request $req){
        $datoGE = DB::table('Grupo_Empresa')->select('idGE', 'duenio')->where('nombre', '=',$req->nombre)->first();
        $usuarios = DB::table('Usuario')->select('idUsuario','nombreC', 'foto_perfil')->where('idGE','=',$datoGE->idGE)->get();

        $data = [
            'socios' => $usuarios,
            'lider' => $datoGE->duenio,
        ];

        return response()->json($data);
    }

    function expulsarSocio(Request $req){
        $user = Usuario::find($req->id);
        $user->idGE = null;
        $user->save();
        return response(200);
    }

    function obtenerUsuariosG(Request $req){
        $user = Usuario::find($req->id);
        $usuarios = DB::table('Usuario')
                    ->select('nombreC','foto_perfil', 'idUsuario')
                    ->where('idGrupo', '=',$user->idGrupo)
                    ->where('idUsuario', '<>', $req->id)
                    ->get();


        return response()->json($usuarios);
    }


    /*
        ge = nombre de la grupo empresa de lq cual se quiere buscar los datos pendiente;
    */
    function obtenerPendientes(Request $req){
        $ge = DB::table('Grupo_Empresa')
                    ->select('idGE')
                    ->where('nombre', '=', $req->ge)
                    ->first();
        if(!empty($ge)){
            $invitaciones = DB::table('Invitacion')
                                    ->join('Usuario','Usuario.idUsuario','=','Invitacion.idUsuario')
                                    ->where('Invitacion.idGE','=',$ge->idGE)
                                    ->where('Invitacion.invitacion','=', true)
                                    ->get();
            return  response()->json($invitaciones);
        } else {
            return  response()->json(['mensaje'=>'La grupo empresa no existe']);
        }
    }

    function eliminarInvitacion(Request $req){
        $inv = Invitacion::findOrFail($req->id);
        $inv->delete();
        return response(200);
    }

    function viewGrupoEmpresas(){
        return view('grupoEmpresas');
    }

    function obtenerGrupoEmpresas(Request $req){
        $grupo = DB::table('Usuario')
                        ->where('idUsuario','=',$req->id)
                        ->first();

        $dat = DB::table('Grupo_Empresa')
                    ->join('Usuario', 'Usuario.idUsuario', '=','Grupo_Empresa.duenio')
                    ->select('Grupo_Empresa.idGE',
                                'Usuario.nombreC as creador', 
                                'Grupo_Empresa.nombre as nombre')
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

    /*
        ge= grupo empresa, nada mas
    */
    function obtenerSolicitudes(Request $req){
        $GE = DB::table('Grupo_Empresa')
                    ->where('nombre','=', $req->ge)
                    ->first();
        $pendientes = DB::table('Invitacion')
                            ->join('Usuario', 'Usuario.idUsuario','=','Invitacion.idUsuario')
                            ->join('Grupo_Empresa', 'Grupo_Empresa.idGE', '=', 'Invitacion.idGE')
                            ->where('invitacion', '=', false)
                            ->where('estado', '=', 'Pendiente')
                            ->get();
        return response()->json($pendientes);
    }

    /*
        nombreGE = nombre de la grupo empresa
        idUsuario = iddel usuario solicitante
    */
    function obtenerDatosGrupoEmpresa(Request $req){
        $ge = DB::table('Grupo_Empresa')
                    ->where('nombre' , '=', $req->nombreGE)
                    ->first();
        if(isset($ge->idGE)){
            $usuario = Usuario::find($req->idUsuario);
            if(isset($usuario->idUsuario)){ 
                if($ge->idGE == $usuario->idGE){
                    return response()->json($ge);
                } else {
                    return response()->json(['mensaje' => 'No tienes permisos para ingresar a esta sala']);
                }
            } else {
                return response()->json(['mensaje' => 'Usuario no existe']);
            }
        } else {
            return response()->json(['mensaje' => 'no existe la grupo empresa solicitada']);
        }
    }
}
