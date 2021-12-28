<?php

namespace App\Http\Controllers;

use App\Models\FundaEmpresa;
use App\Models\Grupo;
use Illuminate\Http\Request;
use App\Models\session;
use Illuminate\Support\Facades\DB;
use App\Models\Usuario;
use App\Models\GrupoEmpresa;
use App\Models\Invitacion;

class UserController extends Controller
{
    function createSession(Request $request)
    { //require el id del
        $session = new session;
        $session->token = md5(uniqid(rand(), true));
        $session->idUser = $request->idUser;

        $session->save();

        $ge = Usuario::find($request->idUser);
        $nombre = GrupoEmpresa::find($ge->idGE);
        $resp = [
            'token' => $session->token,
            'nombre' => (!empty($nombre)) ? $nombre->nombre : '',
        ];

        return response()->json($resp);
    }

    function dropSession(Request $request)
    { //require el token
        $id = DB::table('Session')->where('token', $request->token)->first();
        if ($id) {
            session::destroy($id->idSession);
        }
        return response()->json($id);
    }

    function verifySession(Request $request)
    { //verifica si el token existe y devuelve el idUser
        $id = DB::table('Session')->select('idUser')->where('token', $request->token)->first();
        return response()->json($id);
    }

    function verifySessionConsultor(Request $request)
    { //verifica si el token existe y devuelve el idUser
        $id = DB::table('Session')
            ->join('Usuario', 'Usuario.idUsuario','=','Session.idUser')
            ->select('idUser')
            ->where('token', $request->token)
            ->where('Usuario.grupo', '=','2')
            ->first();
        return response()->json($id);
    }

    function getNombre(Request $req)
    {
        $dat = Usuario::find($req->id);
        return response()->json(['nombreC' => $dat->nombreC]);
    }

    /* id = el usuario involucrado
        nombre = grupo empresa involucada
    invitacion =
                => si es false entonces es un usuario solicitando entrar a la grupo empresa
                => si es true entonces es una grupo empresa invitando a un usuario

    */
    function mandarInvitacion(Request $req)
    {
        $ge = DB::table('Grupo_Empresa')->where('nombre', '=', $req->nombre)->first();
        if (isset($ge->idGE)) {
            $usuario = Usuario::find($req->id);
            if (isset($usuario->idUsuario)) {
                if (empty($usuario->idGE)) {
                    $invitacion = DB::table('Invitacion')
                        ->where('idUsuario', '=', $usuario->idUsuario)
                        ->where('idGE', '=', $ge->idGE)
                        ->where('invitacion', '=', $req->invitacion)
                        ->first();
                    if (!isset($invitacion->idInvitacion)) {
                        $inv = new Invitacion;
                        $inv->idGE = $ge->idGE;
                        $inv->idUsuario = $usuario->idUsuario;
                        $inv->invitacion = $req->invitacion;
                        $inv->save();

                        $invi =  DB::table('Invitacion')
                            ->join('Usuario', 'Usuario.idUsuario', '=', 'Invitacion.idUsuario')
                            ->where('Invitacion.idUsuario', '=', $usuario->idUsuario)
                            ->where('Invitacion.idGE', '=', $ge->idGE)
                            ->first();


                        $not = new NotificacionController;
                        $request = new Request(); 
                        
                        if($inv->invitacion == false){
                            $request->idUsuario = $usuario->idUsuario;
                            $request->descripcion = $ge->nombre.' Te ha invitado a formar parte de sus socios';
                            $request->link = 'Socio-'.$usuario->idUsuario;
                            $request->tipo = 'invitacion';
                        } else {
                            $request->idUsuario = $ge->duenio;
                            $request->descripcion = $usuario->nombreC.' ha solicitado formar parte de tu Grupo-Empresa';
                            $request->link = 'GE-'.$ge->nombre;
                            $request->tipo = 'invitacion';
                        }

                        $not->crearNotificacion($request);

                        return response()->json($invi);
                    } else {
                        return response()->json(['mensaje' => 'Ya existe una invitacion o solicitud entre el usuario y la grupo empresa']);
                    }
                } else {
                    return response()->json(['mensaje' => 'El usuario ya esta en una grupo empresa']);
                }
            } else {
                return response()->json(['mensaje' => 'Usuario inexistente']);
            }
        } else {
            return response()->json(['mensaje' => 'Grupo Empresa Inexistente']);
        }
    }

    function crearUsuario()
    {
        return view('registroUsuario');
    }

    /*
        codSis => el codigo sis del estudiante que se esta registrando
        telefono => el telefono del estudiante
        nombreU => el nombre de usuario con el que podrá ingresar al sistema
        contrasenia => la contraseña con la que el estudiante podrá ingresar al sistema
        foto_perfil => imagen del usuario
    */
    function actualizarUsuario(Request $req)
    {
        $dat = DB::table('Usuario')
            ->where('codSis', '=', $req->codsis)
            ->first();
        if (isset($dat->idUsuario)) {
            $usuario = Usuario::find($dat->idUsuario);
            if (!$usuario->registrado) {
                $otrosUsuarios = DB::table('Usuario')
                                    ->where('nombreUsuario','=',$req->nombreU)
                                    ->where('idUsuario','<>',$usuario->idUsuario)
                                    ->get();
                if(sizeof($otrosUsuarios)<=0){
                    
                    $usuario->nombreUsuario = $req->nombreU;
                    $usuario->telefono = $req->telefono;
                    $usuario->contrasenia = $req->contrasenia;
                    $usuario->registrado = true;

                    if ($req->file('foto_perfil') != null) {
                        $file = $req->file('foto_perfil');
                        $nombre =  time() . "_" . $file->getClientOriginalName();
                        $file->move('resources/socios', $nombre);
                        $usuario->foto_perfil = $nombre;
                    }

                    $usuario->save();

                    return response()->json($usuario);
                } else {
                    return response()->json(['mensaje' => "Ya existe otro usuario con el mismo nombre de usuario"]);
                }
            } else {
                return response()->json(['mensaje' => "Esta Cuenta Ya Fue Registrada"]);
            }
        } else {
            return response()->json(['mensaje' => "El usuario no existe"]);
        }
    }

    /**
     * condiciones
     * el usuario no debe tener grupo empresa
     * la grupo empresa debe tener menos de 5 integrantes
     *
     * id = usuario que quiere mandar la solicitud
     * ge = grupo empresa que quiere ingresar
     *
     */
    function puedeVerSolicitudes(Request $req)
    {
        $usuario = Usuario::find($req->id);
        if ($usuario->idGE == null) {
            $db = DB::table('Grupo_Empresa')
                ->join('Usuario', 'Usuario.idGE', '=', 'Grupo_Empresa.idGE')
                ->where('Grupo_Empresa.nombre', '=', $req->ge)
                ->get();
            if (sizeof($db) < 5) {
                return response()->json(["mensaje" => "true"]);
            } else {
                return response()->json(["mensaje" => "false"]);
            }
        } else {
            return response()->json(["mensaje" => "false"]);
        }
    }

    /**
     * id = el usuario en cuestion
     * ge= la grupo empresa
     *
     * devuelve una invitacion, o un mensaje, si recibe la invitacion es que existia una solicitud
     * caso contrario es que no existe una invitacion
     *
     */
    function tieneSolicitudes(Request $req)
    {
        $ge = DB::table('Grupo_Empresa')
            ->where('nombre', '=', $req->ge)
            ->first();
        $inv = DB::table('Invitacion')
            ->where('idUsuario', '=', $req->id)
            ->where('idGE', '=', $ge->idGE)
            ->where('invitacion', '=', false)
            ->first();
        return response()->json($inv);
    }

    public function obtenerDatosFE()
    {
        $datos = FundaEmpresa::all();
        return response()->json($datos);
    }

    public function createUser(Request $req)
    {

        $usuario = new Usuario;
        $usuario->idUsuario = $req->codsis;
        $usuario->nombreC = $req->nombreUsuario;
        $usuario->email = $req->email;
        $usuario->codSis = $req->codsis;
        $usuario->idCarrera = $req->carrera;
        $usuario->idGrupo = $req->grupo;

        $rol = DB::table('Rol')
                    ->where('nombreRol', '=', 'Estudiante')
                    ->first();
        $usuario->idRol = $rol->idRol;

        $usuario->save();

        return response()->json($usuario);
    }

    public function createAdviser(Request $req){

        $usuario = new Usuario;
        $usuario->idUsuario = $req->codsis;
        $usuario->nombreC = $req->nombreUsuario;
        $usuario->email = $req->email;
        $usuario->codSis = $req->codsis;
        $usuario->idCarrera = null;

        //crear nuevo grupo a partir de aca

        $gm = DB::table('Grupo')->max('idGrupo');
        $id = (!empty($gm)) ? $gm+1: 1; 

        $grupo = new Grupo;
        $grupo->idGrupo = $id;
        $grupo->nomGrupo = $usuario->nombreC;
        $grupo->save();

        $gp = DB::table('Grupo')
                    ->where('nomGrupo', '=', $usuario->nombreC)
                    ->first();


        $usuario->idGrupo = $gp->idGrupo;//recuperamoe el nuevo grupo de la licenciad@ y le asignamos
        $rol = DB::table('Rol')
                        ->where('nombreRol', '=', 'Consultor')
                    ->first();
        $usuario->idRol = $rol->idRol;

        $usuario->save();

        return response()->json($usuario);
    }



    public function verificarCodSis(Request $req){
        $usuario = DB::table('Usuario')
            ->where('codSis', '=', $req->codsis)
            ->first();
        if (isset($usuario->idUsuario)) {
            return response()->json(['mensaje' => 'true']);
        } else {
            return response()->json(['mensaje' => 'false']);
        }
    }

    public function verificarEmail(Request $req)
    {
        $usuario = DB::table('Usuario')
            ->where('email', '=', $req->email)
            ->first();
        if (isset($usuario->idUsuario)) {
            return response()->json(['mensaje' => 'true']);
        } else {
            return response()->json(['mensaje' => 'false']);
        }
    }
}
