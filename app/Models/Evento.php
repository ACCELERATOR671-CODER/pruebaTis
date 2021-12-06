<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Evento extends Model
{
    protected $table = 'Evento';
    protected $primaryKey= 'idEvento';
    protected $fillable = ['fecha_creacion', 'nombre',
                            'idCalendario', 'fecha_inicio', 'fecha_final'];
    public $timestamps = false;
}
