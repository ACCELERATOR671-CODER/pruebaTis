<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Invitacion extends Model
{
    protected $table = 'Invitacion';
    protected $primaryKey = 'idInvitacion';
    //el idUsuario es el usuario que recibe la invitacion
    //el idGE es la grupo empresa implicada
    //el sender es la persona que mandó la invitacion
    //el estado es el estado xD, por defecto se pone como Pendiente
    protected $fillable = ['idUsuario','idGE','estado','invitacion'];
    public $timestamps = false;
}
