<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class socio extends Model
{
    protected $fillable = [
        'idSocio','idCarrera','idGE','nombre','email','telefono','CI','foto_perfil','nombreusuario'
    ];
}
