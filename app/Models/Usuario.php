<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Usuario extends Model
{
    protected $table = 'Usuario';
    protected $primaryKey = 'idUsuario';
    protected $fillable = ['idGE','nombreC','email','telefono','codSis',
                                'foto_perfil','nombreUsuario','contrasenia', 
                                        'idCarrera', 'administrador', 'idGrupo','registrado'];

    public $timestamps = false;
}
