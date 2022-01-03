<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Documentacion extends Model
{
    protected $table = 'Documentacion';
    protected $primaryKey= 'idDoc';
    protected $fillable = ['documento', 'nombre', 'fecha_creacion'];
    public $timestamps = false;
}
