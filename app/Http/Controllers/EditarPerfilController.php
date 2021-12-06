<?php

namespace App\Http\Controllers;

use App\Models\Usuario;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;

class EditarPerfilController extends Controller
{
    public function modificarDatos (Request $request) {
        $id = DB::table('Session')->select('idUser')->where('token', '=', $request->token)->first();
        $usuario = Usuario::find($id->idUser);
        $usuario->nombreC = $request->nombreC;
        $usuario->nombreUsuario = $request->nombreUsuario;
        $usuario->email = $request->email;
        $usuario->telefono = $request->telefono;
        $usuario->codSis = $request->codSis;

        $file = $request->file('imagen');
        if ($file != null){
            $nombre = time()."_".$file->getClientOriginalName();
            $file->move('resources/socios', $nombre);
            File::delete('resources/socios/'.$usuario->foto_perfil);
            $usuario->foto_perfil = $nombre;
        }

        $usuario->save();
        return response(20);
    }
}
