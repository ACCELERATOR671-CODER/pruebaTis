<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Grupo extends Model
{
    protected $table = 'Grupo';
    protected $primaryKey = 'idGrupo';
    protected $fillable = ['nomGrupo'];
    public $timestamps = false;
}
