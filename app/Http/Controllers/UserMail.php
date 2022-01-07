<?php

namespace App\Http\Controllers;

use App\Mail\NotificacionInscripcion;
use App\Models\Usuario;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class UserMail extends Controller
{
    static function enviarMail($idUsuario)
    {
        $user = Usuario::find($idUsuario);
        Mail::to($user-> email )->send(new NotificacionInscripcion() );
    }
    
}
