<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GrupoEmpresa extends Model
{
    protected $table = 'Grupo_Empresa';
    protected $primaryKey= 'idGE';
    protected $fillable = ['fecha_creacion', 'fecha_registro',
                             'orgJur', 'nombre', 'nombreAb', 'telefono',
                             'direccion','email', 'descripcion','logo','orgJur','duenio'];
    public $timestamps = false;
}
        
